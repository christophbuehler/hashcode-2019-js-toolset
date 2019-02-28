import { Album } from '../shared/album';
import { Slide } from '../shared/slide';

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
