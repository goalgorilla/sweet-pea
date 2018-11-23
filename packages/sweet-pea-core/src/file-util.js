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
