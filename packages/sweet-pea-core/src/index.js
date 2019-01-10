import DrupalTheme from './DrupalTheme';

// TODO: Add SASS/JS linting.
// TODO: Add watching. Make chokidar optional: https://github.com/babel/babel/blob/master/packages/babel-cli/src/babel/util.js#L106
// TODO: Add a styleguide builder.
// TODO: Add color module preview stylesheets.

import cleanCss from './tasks/cleanCss';
import cleanJs from './tasks/cleanJs';
import scripts from './tasks/scripts';
import styles from './tasks/styles';

export {
  DrupalTheme,
  scripts,
  styles,
  cleanCss,
  cleanJs,
};
