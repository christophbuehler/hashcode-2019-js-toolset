import ndarray = require('ndarray');
import * as nj from 'numjs';
import { readFileSync, writeFileSync } from './file-operations';

export interface Config {
  imageCount: number;
  images: Image[];
}

export interface Image {
  tagCount: number;
  isVertical: boolean;
  tags: string[];
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
  const lines = raw.split('\r\n');
  const imageCount = parseInt(lines[0], 10);

  lines.splice(0, 1);

  const images = lines.map((line) => {
    const parts = line.split(' ');
    const isVertical = parts[0] === 'V';
    const tagCount = parseInt(parts[1], 10);
    parts.splice(0, 2);

    return {
      isVertical,
      tagCount,
      tags: parts.sort(),
    };
  });

  return {
    imageCount,
    images,
  };
}
