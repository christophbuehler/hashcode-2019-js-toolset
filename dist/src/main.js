"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const moment = require("moment");
const mainChristoph = require("./2cb/main");
const mainDaniel = require("./2dm/main");
const mainLuca = require("./2lt/main");
const environment_1 = require("./environment");
const charting_1 = require("./libs/charting");
const file_operations_1 = require("./libs/file-operations");
console.log(chalk_1.default.blue(`~ Google Hash Code 2019 [build from ${moment().format('HH:mm:ss')}] ~`));
switch (environment_1.user) {
    case environment_1.User.DANIEL:
        mainDaniel.main();
        break;
    case environment_1.User.LUCA:
        mainLuca.main();
        break;
    case environment_1.User.CHRISTOPH:
        mainChristoph.main();
        break;
}
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