import path from "path";
import glob from "glob";
import SVGOptim from "svgo";
import svgstore from 'svgstore';
import { fs } from '../util/async';

/**
 * Compiles the icons in a theme into a single sprite.
 *
 * @param {DrupalTheme} Theme
 *   The theme to create the sprite for.
 */
export default function spriteIcons(Theme) {
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
    // TODO: Make the icons filename configurable
    output: path.join(Theme.getOutputPath('iconSprite'), "icons.svg"),
  };

  const globPath = path.resolve(options.source, '*.svg');

  // TODO: Make follow (symlinks) configurable.
  glob(globPath, { ignore: '**/_*', follow: false }, function(err, files) {
    // Process all variables in order, one at a time.
    // TODO: This can be parallelised.
    files.reduce(
      (p, file) => {
        return p.then((icons) => optimizeFile(svgo, file).then((result) => {
          icons[result.name] = result.data;
          return icons;
        }));
      },
      Promise.resolve({})
    ).then((icons) => {
      const sprite = svgstore({
        inline: true,
        svgAttrs: {
          "class": "hide",
          // Technically the following attributes aren't needed. However, in the
          // initial release we strive for output identical to what is currently
          // present.
          "xmlns": "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
        }
      });

      for (let name in icons) {
        sprite.add(name, icons[name]);
      }

      return fs.writeFile(options.output, sprite);
    });
  });
}

/**
 * Optimize a given file.
 *
 * @param {Object} optimizer
 *   The optimizer object with an optimize function.
 * @param {String} file
 *   The name of the file to optimize.
 * @param {Object} sprite
 *   The svgstore sprite to add the result to.
 */
function optimizeFile(optimizer, file) {
  let iconName = path.basename(file, path.extname(file));
  console.log("Adding icon", iconName);
  return fs.readFile(file)
    .then(optimizer.optimize.bind(optimizer))
    .then((result) => ({ name: iconName, data: result.data}));
}
