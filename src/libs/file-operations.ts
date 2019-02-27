import * as fs from 'fs-extra';
import * as path from 'path';

/**
 * Read a file async.
 * @param fileName file name
 */
export function readFileAsync(fileName: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, contents) => {
      if (err) {
        reject(err);
      } else {
        resolve(contents);
      }
    });
  });
}

/**
 * Read a file sync.
 * @param fileName file name
 */
export function readFileSync(fileName: string): string {
  return fs.readFileSync(fileName, 'utf8');
}

/**
 * Write file sync.
 * @param filePath file name
 * @param data data to write
 */
export function writeFileSync(filePath: string, data: any): void {
  const dirname = path.dirname(filePath);
  fs.ensureDir(dirname);
  fs.writeFileSync(filePath, data);
}
