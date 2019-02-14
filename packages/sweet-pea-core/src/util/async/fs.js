/**
 * @file
 * Contains async wrappers for the Node.js fs functions.
 */
import fs from 'fs';

/**
 * An async wrapper around fs.readFile
 */
const readFile = async (file, options = { encoding: 'utf8' }) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, options, (error, data) => {
      if (error) {
        return reject(error);
      }

      resolve(data);
    });
  });
};

/**
 * An async wrapper around fs.writeFile
 */
const writeFile = async (file, data, options) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, options, (error) => {
      if (error) {
        return reject(error);
      }
      resolve(data.length);
    });
  });
};

export default {
  readFile,
  writeFile,
};
