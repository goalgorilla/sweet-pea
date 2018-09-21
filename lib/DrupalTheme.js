"use strict";

const path = require('path');
const { themeForDirectory } = require('./file-util');

class DrupalTheme {
  constructor(directory, name) {
    this.directory = directory;
    this.name = name;

    this.config = {
      // Paths are always relative to the theme directory.
      paths: {
        components: 'components',
        output: {
          css: 'assets/css',
          js: 'assets/js',
          icons: 'assets/icons',
          mimeIcons: 'assets/mime-icons',
        }
      }
    };

    this.loadBuildConfiguration();
  }

  loadBuildConfiguration() {
    // TODO: Load a theme.build.yml file and override this.config.
    console.warn(`${this.name}.build.yml file support not implemented, using default config.`);
  };

  getComponentsPath() {
    return path.join(this.directory, this.config.paths.components);
  }

  getOutputPath(type) {
    if (typeof this.config.paths.output[type] === 'undefined') {
      throw new Error(`No output path specified for type '${type}'`);
    }

    return path.join(this.directory, this.config.paths.output[type]);
  }

  static loadFromDirectory(dir) {
    // Verify the directory is a valid theme.
    const theme = themeForDirectory(dir);
    assert(theme !== null, `Could not load theme ${dir}. Is it a valid theme folder with an .info.yml file?`);

    return new this(dir, theme);
  }
}

function assert(condition, error, code = 1) {
  if (!condition) {
    console.error(error);
    process.exit(code);
  }
}

module.exports = DrupalTheme;