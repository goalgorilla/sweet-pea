"use strict";

import path from 'path';
import assert from './util/assert';
import {findThemePath, themeForDirectory} from './util/file';

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

  /**
   * Loads a Drupal theme from the path to the theme.
   *
   * @param dir
   *   The path of the theme.
   * @return {DrupalTheme}
   *   An instantiated DrupalTheme instance for that theme.
   */
  static loadFromDirectory(dir) {
    // Verify the directory is a valid theme.
    const theme = themeForDirectory(dir);
    assert(theme !== null, `Could not load theme ${dir}. Is it a valid theme folder with an .info.yml file?`);

    return new this(dir, theme);
  }

  /**
   * Loads a theme by name given a start path in a Drupal 8 installation.
   *
   * @param name
   *   The name of the theme to load.
   * @param dir
   *   A path from which the Drupal root can be determined in which to search.
   *
   * @return {DrupalTheme}
   *   An instantiated DrupalTheme instance for that theme.
   */
  static loadByName(name, dir) {
    const drupalRoot = drupalRoot(dir);
    assert(drupalRoot !== null, `Could not find a valid Drupal installation from ${dir}. Is the folder in a webroot that contains \`core/core.services.yml\`?`);
    const themePath = findThemePath(name, dir);
    assert(themePath !== null, `Could not find theme ${themePath}. Is the theme installed in the detected Drupal root '${drupalRoot}'?`);

    return new this(themePath, name);
  }
}
