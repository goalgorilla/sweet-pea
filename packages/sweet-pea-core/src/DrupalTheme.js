"use strict";

import path from 'path';
import assert from './util/assert';
import { themeForDirectory } from './util/file';

export default class DrupalTheme {
  constructor(directory, name) {
    this.directory = directory;
    this.name = name;

    this.config = {
      // Paths are always relative to the theme directory.
      paths: {
        src: {
          components: 'components',
          // TODO: This should be in a .build.yml file.
          icons: 'components/06-libraries/icons/source/'
        },
        output: {
          css: 'assets/css',
          js: 'assets/js',
          icons: 'assets/images/icons',
          iconSprite: 'assets/icons/',
          mimeIcons: 'assets/images/mime-icons',
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
    return path.join(this.directory, this.config.paths.src.components);
  }

  getSourcePath(type) {
    if (typeof this.config.paths.src[type] === 'undefined') {
      throw new Error(`No source path specified for type '${type}'`);
    }

    return path.join(this.directory, this.config.paths.src[type]);
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
