import chalk from 'chalk';
import { Config, Image } from '../libs/config';
import { Album } from '../shared/album';
import { Slide } from '../shared/slide';
import { Export } from './export';

export function main(config: Config) {
  const e = new Export();

  const imageA: Image = {
    index: 0,
    usedInAlbum: false,
    tagCount: 4,
    isVertical: false,
    tags: ['a', 'b', 'c'],
  };
  const imageB: Image = {
    index: 0,
    usedInAlbum: false,
    tagCount: 4,
    isVertical: false,
    tags: ['a', 'b', 'c'],
  };
  const imageC: Image = {
    index: 0,
    usedInAlbum: false,
    tagCount: 4,
    isVertical: false,
    tags: ['a', 'b', 'c'],
  };
  const imageD: Image = {
    index: 0,
    usedInAlbum: false,
    tagCount: 4,
    isVertical: false,
    tags: ['a', 'b', 'c'],
  };
  const imageE: Image = {
    index: 0,
    usedInAlbum: false,
    tagCount: 4,
    isVertical: false,
    tags: ['a', 'b', 'c'],
  };
  const imageF: Image = {
    index: 0,
    usedInAlbum: false,
    tagCount: 4,
    isVertical: false,
    tags: ['a', 'b', 'c'],
  };
  const imageG: Image = {
    index: 0,
    usedInAlbum: false,
    tagCount: 4,
    isVertical: false,
    tags: ['a', 'b', 'c'],
  };

  const slideOne: Slide = {
    imageOne: imageA,
    imageTwo: imageB,
    tags: ['a', 'b', 'c'],
  };
  const slideTwo: Slide = {
    imageOne: imageC,
    imageTwo: imageD,
    tags: ['d', 'b', 'f'],
  };
  const slideThree: Slide = {
    imageOne: imageF,
    imageTwo: 78,
    tags: ['x', 'y', 'z'],
  };

  const slideArray: Slide[] = [slideOne, slideTwo, slideThree];

  const testAlbum: Album = {
    slides: slideArray,
  };

  e.exportData(testAlbum);
}

/*

index: number;
usedInAlbum: boolean;
tagCount: number;
isVertical: boolean;
tags: string[];

*/
