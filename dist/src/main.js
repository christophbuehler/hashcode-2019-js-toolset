"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const moment = require("moment");
const charting_1 = require("./libs/charting");
const file_operations_1 = require("./libs/file-operations");
console.log(chalk_1.default.blue(`~ Google Hash Code 2019 [build from ${moment().format('HH:mm:ss')}] ~`));
charting_1.chart();
/**
 * The sum of two values (for testing).
 * @param a val1
 * @param b val2
 */
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
/**
 * Working with files:
 */
const bSmall = file_operations_1.readFileSync('assets/b_small.in');
const config = toConfig(bSmall);
// console.log('toConfig', toConfig(bSmall));
file_operations_1.writeFileSync('out/test.txt', config);
/**
 * Raw input to config.
 * @param raw raw input string from file
 */
function toConfig(raw) {
    const arr = raw.split('\r\n');
    const header = arr[0].split(' ');
    arr.splice(0, 1);
    return {
        rowCound: header[0],
        colCount: header[1],
        minOfEach: header[2],
        maxSquares: header[3],
        squares: arr,
    };
}
//# sourceMappingURL=main.js.map