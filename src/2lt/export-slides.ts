import { writeFileSync } from '../libs/file-operations';
import { Album } from '../shared/album';
import { Slide } from '../shared/slide';

export default function exportSlides(slides: Slide[]) {
  const lines = [slides.length.toString()].concat(
    slides.map(
      (slide) =>
        `${slide.imageOne.index}` +
        (slide.imageTwo ? ` ${slide.imageOne.index}` : ''),
    ),
  );
  writeFileSync('out/outfile.txt', lines.join('\n'));
}
