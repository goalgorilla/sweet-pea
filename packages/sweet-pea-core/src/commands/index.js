"use strict";

import cleanCss from './cleanCss';
import cleanJs from './cleanJs';
import scripts from './scripts';
import styles from './styles';

// TODO: Add SASS/JS linting.
// TODO: Add watching. Make chokidar optional: https://github.com/babel/babel/blob/master/packages/babel-cli/src/babel/util.js#L106
// TODO: Add a styleguide builder.
// TODO: Add color module preview stylesheets.

export default function resolveCommand(command, args) {
  switch(command) {
    case 'help':
      printUsage();
      return null;
    case 'clean':
      return (Theme) => {
        cleanCss(Theme);
        cleanJs(Theme);
      };
    case 'clean:css':
      return cleanCss;
    case 'clean:js':
      return cleanJs;
    case 'scripts':
      return scripts;
    case 'styles':
      return styles;
    default:
      throw new Error('Unknown Command');
  }
}
