"use strict";

import { EventEmitter } from 'events';
import autoprefixer from 'autoprefixer';
import glob from 'glob';
import importOnce from 'node-sass-import-once';
import mqpacker from 'css-mqpacker';
import path from 'path';
import postcss from 'postcss';
import rucksack from 'rucksack-css';
import sass from 'node-sass';
import { humanFileSize } from '../util/file';
import { fs } from '../util/async';

export default function compileStyles(Theme) {
  const options = {
    // TODO: Allow this to be chosen?
    importer: importOnce,
    directory: Theme.getComponentsPath(),
    includePaths: [ Theme.getComponentsPath() ],
    output: Theme.getOutputPath('css'),
    // TODO: Make this configurable.
    outputStyle: 'expanded'
  };

  const emitter = new EventEmitter();
  emitter.on('info', console.log);
  emitter.on('error', console.log);
  renderDir(options, emitter);
}

/**
 * Render all sass files in a directory.
 *
 * This function has been inspired by the node-sass binary.
 *
 * TODO: Do we need want the emitter? How does Sweet Pea handle message passing?
 *
 * @param {Object} options
 * @param {Object} emitter
 * @api private
 */
function renderDir(options, emitter) {
  const globPath = path.resolve(options.directory, '**/*.{sass,scss}');
  // TODO: Make follow (symlinks) configurable.
  glob(globPath, { ignore: '**/_*', follow: false }, function(err, files) {
    if (err) {
      return emitter.emit('error', `You do not have permission to access this path: ${err.path}.`);
    } else if (!files.length) {
      return emitter.emit('error', 'No input file was found.');
    }

    console.log(`Rendering ${files.length} files.`);

    // Process all variables in order, one at a time.
    files.reduce((p, file) => p.then(renderFile.bind(null, file, options, emitter)), Promise.resolve());
  });
}

/**
 * Render a file
 *
 * @param {String} file
 * @param {Object} options
 * @param {Object} emitter
 * @api private
 */
async function renderFile(file, options, emitter) {
  let fileOpts = Object.assign({}, options, {
    file: file,
    outFile: path.join(
      options.output,
      // Replace ext with CSS.
      [path.basename(file, path.extname(file)), '.css'].join('')
    )
  });

  // TODO: Add Source Map support options here.

  // TODO: No watch support yet.
  if (options.watch && !options.quiet) {
    emitter.emit('info', util.format('=> changed: %s', file));
  }

  const processor = postcss([
    // TODO: Make this configurable.
    rucksack(),
    autoprefixer({browsers: ['> 1%', 'last 2 versions']}),
    mqpacker({sort: true}),
  ]);

  // TODO: Add sourcemap support to SASS and POSTCSS.
  return render(fileOpts)
    .then((result) => processor.process(result.css.toString()))
    .then((result) => fs.writeFile(fileOpts.outFile, result.css))
    .then((bytes) => console.log(`${path.basename(file)} ${humanFileSize(bytes)}`));
}

/**
 * An async wrapper around sass.render
 */
async function render(options) {
  return new Promise((resolve, reject) => {
    sass.render(options, (error, result) => {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
}
