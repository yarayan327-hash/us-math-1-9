import { courseAssets } from './courseAssets';

export type VisualFeedbackState = 'thinking' | 'correct' | 'retry';

export type LowAgeVisualConfig = {
  introDecoration: string | null;
  teachingDecoration: string | null;
};

const lowAgeVisuals: Record<number, LowAgeVisualConfig> = {
  1: {
    introDecoration: courseAssets.objects.notebook,
    teachingDecoration: courseAssets.objects.pencil
  },
  2: {
    introDecoration: courseAssets.objects.crayonBlue,
    teachingDecoration: courseAssets.objects.notebook
  },
  3: {
    introDecoration: courseAssets.objects.openBook,
    teachingDecoration: courseAssets.objects.crayonYellow
  }
};

export const characterFeedbackAssets: Record<VisualFeedbackState, string> = {
  thinking: courseAssets.characters.girlThinking,
  correct: courseAssets.characters.girlCelebrating,
  retry: courseAssets.characters.girlPointing
};

export const feedbackStarAsset = courseAssets.feedback.star;

export function getLowAgeVisualConfig(levelNumber: number): LowAgeVisualConfig | null {
  return lowAgeVisuals[levelNumber] ?? null;
}

export function shouldShowLowAgeVisuals(levelNumber: number): boolean {
  return levelNumber >= 1 && levelNumber <= 3;
}
