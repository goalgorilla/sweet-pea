const config = require('../../webpack.config.js');

module.exports = {
  ...config,
  /**
   * We declare our dependencies as external because we're a CLI
   * tool that can easily load these at runtime, there's no reason to duplicate
   * these in our NPM package.
   */
  externals: {
    "autoprefixer": "autoprefixer",
    "chokidar": "chokidar",
    "css-mqpacker": "css-mqpacker",
    "del": "del",
    "glob": "glob",
    "node-sass": "node-sass",
    "node-sass-import-once": "node-sass-import-once",
    "postcss": "postcss",
    "rucksack-css": "rucksack-css",
    "svgo": "svgo",
    "svgstore": "svgstore",
    "uglify-js": "uglify-js",
  }
};
