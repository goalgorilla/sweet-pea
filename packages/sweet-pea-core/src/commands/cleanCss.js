"use strict";

import del from 'del';

export default function cleanCss(Theme) {
  const path = Theme.getOutputPath('css');

  console.log("Deleting .css and .map files in", path);

  del([
    path + '**/*.css',
    path + '**/*.map',
  ]);

};
