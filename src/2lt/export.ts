import { writeFileSync } from '../libs/file-operations';
import { Album } from '../shared/album';
import { Slide } from '../shared/slide';

export function exportSlides(slides: Slide[]) {
  const lines = [slides.length.toString()].concat(
    slides.map(
      (slide) =>
        `${slide.imageOne.index}` +
        (slide.imageTwo ? ` ${slide.imageOne.index}` : ''),
    ),
  );
  writeFileSync('out/outfile.txt', lines.join('\n'));
}

export class Export {
  constructor() {}

  public exportData = (album: Album) => {
    // console.log(album);

    album.slides.forEach((slide) => {
      console.log(`Image 1: ${slide.imageOne.index}`);
      console.log(`Image 2: ${slide.imageTwo.index}`);
    });
  }
}
