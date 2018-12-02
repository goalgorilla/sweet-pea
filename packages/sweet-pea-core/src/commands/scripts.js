"use strict";

import fs  from 'fs';
import glob  from 'glob';
import path  from 'path';
import UglifyJS  from 'uglify-js';
import { humanFileSize } from "../util/file";

export default function compileScripts(Theme) {
  const options = {
    directory: Theme.getComponentsPath(),
    output: Theme.getOutputPath('js'),
  };

  compileDir(options);
}

// TODO: The signature of this function is the same as for styles.
function compileDir(options, emitter) {
  const globPath = path.resolve(options.directory, '**/*.js');
  // TODO: Make follow (symlinks) configurable.
  // TODO: Promisify glob.
  glob(globPath, { ignore: '**/_*', follow: false }, function(err, files) {
    if (err) {
      return emitter.emit('error', `You do not have permission to access this path: ${err.path}.`);
    } else if (!files.length) {
      return emitter.emit('error', 'No input file was found.');
    }

    console.log(`Compiling ${files.length} files.`);

    // Process all variables in order, one at a time.
    files.reduce((p, file) => p.then(compileFile.bind(null, file, options, emitter)), Promise.resolve());
  });
}

async function compileFile(file, options, emitter) {
  const inFile = path.basename(file);
  const outFile = path.join(options.output, [path.basename(file, '.js'), '.min.js'].join(''));
  return readFile(file, { encoding: 'utf8' })
    .then((data) => UglifyJS.minify({ [inFile]: data }))
    .then((result) => writeFile(outFile, result.code))
    .then((bytes) => console.log(`${path.basename(outFile)} ${humanFileSize(bytes)}`));
}

/**
 * An async wrapper arond fs.readFile
 */
async function readFile(file, options) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, options, (error, data) => {
      if (error) {
        return reject(error);
      }
      resolve(data);
    });
  });
}

/**
 * An async wrapper around fs.writeFile
 * TODO: Duplicate of styles function.
 */
async function writeFile(file, data, options) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, options, (error) => {
      if (error) {
        return reject(error);
      }
      resolve(data.length);
    });
  });
}
