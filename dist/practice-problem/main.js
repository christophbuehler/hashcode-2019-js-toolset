"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_operations_1 = require("../libs/file-operations");
const bSmall = file_operations_1.readFileSync('assets/b_small.in');
file_operations_1.writeFileSync('out/test.txt', bSmall);
//# sourceMappingURL=main.js.map