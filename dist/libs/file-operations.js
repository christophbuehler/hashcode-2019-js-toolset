"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs-extra");
const path = require("path");
/**
 * Read a file async.
 * @param fileName file name
 */
function readFileAsync(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, contents) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(contents);
            }
        });
    });
}
exports.readFileAsync = readFileAsync;
/**
 * Read a file sync.
 * @param fileName file name
 */
function readFileSync(fileName) {
    return fs.readFileSync(fileName, 'utf8');
}
exports.readFileSync = readFileSync;
/**
 * Write file sync. If data is an array or an object,
 * it will be converted to json before writing.
 * @param filePath file name
 * @param data data to write
 */
function writeFileSync(filePath, data) {
    const dirname = path.dirname(filePath);
    fs.ensureDir(dirname);
    fs.writeFileSync(filePath, typeof data === 'object' ? JSON.stringify(data) : data);
}
exports.writeFileSync = writeFileSync;
//# sourceMappingURL=file-operations.js.map