import { loadConfig } from '../libs/config';
import { Album } from '../shared/album';
import { Slide } from '../shared/slide';

export function main() {
  trivial('assets/b_lovely_landscape.txt');
}

function trivial(file: string): void {
  const config = loadConfig('assets/a_example.txt');

  let album: Album;

  for (let i = 0; i < config.imageCount; i++) {
    let slide: Slide;
    slide.imageOne = config.images[i].index;
    slide.tags = config.images[i].tags;
    album.slides.push;
  }
}
