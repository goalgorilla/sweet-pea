"use strict";

const del = require('del');

module.exports = function cleanJs(Theme) {
  const path = Theme.getOutputPath('js');

  console.log("Deleting .js files in", path);

  del([
    path + '**/*.js',
  ]);

};
