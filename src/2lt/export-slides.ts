import { Config } from '../libs/config';
import { writeFileSync } from '../libs/file-operations';
import { Album } from '../shared/album';
import { Slide } from '../shared/slide';

export default function exportSlides(slides: Slide[], config: Config) {
  const lines = [slides.length.toString()].concat(
    slides.map(
      (slide) =>
        `${slide.imageOne.index}` +
        (slide.imageTwo ? ` ${slide.imageTwo.index}` : ''),
    ),
  );
  writeFileSync(`out/${config.fileName}`, lines.join('\n'));
}
