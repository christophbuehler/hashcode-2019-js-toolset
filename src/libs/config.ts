import ndarray = require('ndarray');
import * as nj from 'numjs';
import { readFileSync, writeFileSync } from './file-operations';

export interface Config {
  imageCount: number;
  fileName: string;
  images: Image[];
}

export interface Image {
  index: number;
  usedInAlbum: boolean;
  tagCount: number;
  isVertical: boolean;
  tags: string[];
}

/**
 * Load a configuration object from a file.
 * @param fileName path to config file
 */
export function loadConfig(fileName: string): Config {
  const bSmall = readFileSync(`assets/${fileName}`);
  const config = toConfig(bSmall, fileName);
  return config;
}

/**
 * Raw input to config.
 * @param raw raw input string from file
 */
function toConfig(raw: string, fileName: string): Config {
  const lines = raw.split('\r\n');
  const imageCount = parseInt(lines[0], 10);

  lines.splice(0, 1);

  const images = lines
    .filter((line) => line.trim() !== '')
    .map((line, i) => {
      const parts = line.split(' ');
      const isVertical = parts[0] === 'V';
      const tagCount = parseInt(parts[1], 10);
      parts.splice(0, 2);

      return {
        isVertical,
        tagCount,
        tags: parts.sort(),
        index: i,
        usedInAlbum: false,
      };
    });

  return {
    fileName,
    imageCount,
    images,
  };
}
