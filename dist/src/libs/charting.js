"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const D3Node = require("d3-node");
const file_operations_1 = require("./file-operations");
function chart() {
    const d3n = new D3Node();
    d3n.createSVG(10, 20).append('g');
    file_operations_1.writeFileSync('out/svg.svg', d3n.svgString());
}
exports.chart = chart;
//# sourceMappingURL=charting.js.map