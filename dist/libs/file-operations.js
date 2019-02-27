"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs-extra"));
const path = __importStar(require("path"));
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
 * Write file sync.
 * @param filePath file name
 * @param data data to write
 */
function writeFileSync(filePath, data) {
    const dirname = path.dirname(filePath);
    fs.ensureDir(dirname);
    fs.writeFileSync(filePath, data);
}
exports.writeFileSync = writeFileSync;
//# sourceMappingURL=file-operations.js.map