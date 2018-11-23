"use strict";

import del from 'del';

export default function cleanJs(Theme) {
  const path = Theme.getOutputPath('js');

  console.log("Deleting .js files in", path);

  del([
    path + '**/*.js',
  ]);

};
