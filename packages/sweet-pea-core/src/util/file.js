import path from 'path';
import fs from 'fs';

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
 * Convert size to human readable format.
 *
 * Copied from: https://stackoverflow.com/a/14919494/576060
 *
 * @param bytes
 * @return {string}
 */
export function humanFileSize(bytes) {
  const thresh = 1000;
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
