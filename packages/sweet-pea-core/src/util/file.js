import path from 'path';
import fs from 'fs';
import glob from 'glob';

/**
 * Returns the theme that is contained in a directory.
 *
 * The theme name is always the folder name of the theme directory.
 *
 * However, for a theme to be valid it must have an .info.yml file that matches
 * the theme folder name. If we're looking in a directory
 * somepath/themes/contrib/socialblue then this function will resolve to
 * socialblue.
 *
 * @param directory
 *   The directory for the theme that we're validating.
 */
export function themeForDirectory(directory) {
  const themeName = path.basename(directory);
  const infoPath = path.join(directory, `${themeName}.info.yml`);

  if (fs.existsSync(infoPath)) {
    return themeName;
  }

  return null;
}

/**
 * Finds the path of the theme with the given name.
 *
 * @param {string} themeName
 *   The name of the theme to find.
 * @param {string} root
 *   The Drupal root directory to search from.
 *
 * @return {string|null}
 *   The path to the directory of the theme that was found or null if the theme
 *   could not be found.
 */
export function findThemePath(themeName, root) {
  const themePattern = path.join(root, "?(core/)themes", "**", `${themeName}.info.yml`);
  const paths = glob.sync(themePattern);

  // If an installation contains more than one theme with the same name this is
  // an error we can not solve.
  if (paths.length > 1) {
    throw new Error(`Found more than one theme named ${themeName}, this can indicate an error with your installation`);
  }

  return paths.length === 1 ? path.dirname(paths[0]) : null;
}

/**
 * Returns the path to the Drupal 8 site root for a given file or directory.
 *
 * Will traverse up through the file tree to find the root. This function does
 * not follow symlinks.
 *
 * Uses the core.services.yml file to find the Drupal core location and assumes
 * this folder is in the web root.
 *
 * @param {string} dir
 *   The path to start traversal from.
 *
 * @return string|null
 *   The path to the Drupal site root or null if none could be found.
 */
export function drupalRoot(dir) {
  function isValidRoot(candidate) {
    return fs.existsSync(path.join(candidate, 'core', 'core.services.yml'));
  }

  // Check each path moving up the tree.
  do {
    if (isValidRoot(dir)) {
      return dir;
    }
    dir = path.dirname(dir)
  } while (dir !== '/');

  // If we're here, nothing has been found.
  return null;
}

/**
 * Convert size to human readable format.
 *
 * Copied from: https://stackoverflow.com/a/14919494/576060
 *
 * @param bytes
 * @return {string}
 */
export function humanFileSize(bytes) {
  const thresh = 1024;
  if(Math.abs(bytes) < thresh) {
    return bytes + ' B';
  }
  const units = ['kB','MB','GB','TB','PB','EB','ZB','YB'];
  let u = -1;
  do {
    bytes /= thresh;
    ++u;
  } while(Math.abs(bytes) >= thresh && u < units.length - 1);
  return bytes.toFixed(2)+' '+units[u];
}
