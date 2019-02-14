import path from "path";
import glob from "glob";
import SVGOptim from "svgo";
import { fs } from '../util/async';

/**
 * Optimizes the individual icon files for a theme.
 *
 * @param {DrupalTheme} Theme
 *   The theme to optimize icons for.
 */
export default function imageIcons(Theme) {
  // We disable the removeViewBox optimization because it changes the SVG output
  // relative to what is in Open Social at the time of writing this tool.
  // Removing the viewBox attribute also changes browser behaviour.
  // See https://github.com/svg/svgo/issues/970
  const svgo = new SVGOptim({
    plugins: [{
      removeViewBox: false
    }],
  });

  const options = {
    source: Theme.getSourcePath('icons'),
    output: Theme.getOutputPath('icons'),
  };

  const globPath = path.resolve(options.source, '*.svg');

  // TODO: Make follow (symlinks) configurable.
  glob(globPath, { ignore: '**/_*', follow: false }, function(err, files) {
    // Process all variables in order, one at a time.
    files.reduce(
      (p, file) => {
        let outFile = path.join(options.output, path.basename(file));
        return p.then(optimizeFile.bind(null, svgo, file, outFile));
      },
      Promise.resolve()
    );
  });
}

/**
 * Optimize a given file.
 *
 * @param {Object} optimizer
 *   The optimizer object with an optimize function.
 * @param {String} file
 *   The name of the file to optimize.
 * @param {String} target
 *   The name of the file to write the output to.
 */
function optimizeFile(optimizer, file, target) {
  return fs.readFile(file)
    .then(optimizer.optimize.bind(optimizer))
    .then((result) => fs.writeFile(target, result.data));
}
