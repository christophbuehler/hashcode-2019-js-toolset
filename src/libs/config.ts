import ndarray = require('ndarray');
import * as nj from 'numjs';
import { readFileSync, writeFileSync } from './file-operations';

export interface Config {
  rowCount: number;
  colCount: number;
  minOfEach: number;
  maxSquares: number;
  squares: ndarray<string>;
}

/**
 * Load a configuration object from a file.
 * @param path path to config file
 */
export function loadConfig(path: string): Config {
  const bSmall = readFileSync(path);
  const config = toConfig(bSmall);
  return config;
}

/**
 * Raw input to config.
 * @param raw raw input string from file
 */
function toConfig(raw: string): Config {
  const arr = raw.split('\r\n');
  const header = arr[0].split(' ');

  arr.splice(0, 1);

  const rowCount = parseInt(header[0], 10);
  const colCount = parseInt(header[1], 10);
  const dataOneDim = arr.join('').split('');

  return {
    rowCount,
    colCount,
    minOfEach: parseInt(header[2], 10),
    maxSquares: parseInt(header[3], 10),
    squares: nj.array(dataOneDim).reshape(rowCount, colCount),
  };
}
