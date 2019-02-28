import { Slide } from '../shared/slide';
import { scoreTags } from './score-tags';

export default function getTotalScore(slides: Slide[]) {
  return slides.reduce((score, slide: Slide, i) => {
    const nextSlide = slides[i + 1];
    if (!nextSlide) return score;
    return score + scoreTags(slide.tags, nextSlide.tags);
  }, 0);
}
