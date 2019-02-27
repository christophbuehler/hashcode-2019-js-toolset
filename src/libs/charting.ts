import * as D3Node from 'd3-node';
import { writeFileSync } from './file-operations';

export function chart() {
  const d3n = new D3Node();
  d3n.createSVG(10, 20).append('g');
  writeFileSync('out/svg.svg', d3n.svgString());
}
