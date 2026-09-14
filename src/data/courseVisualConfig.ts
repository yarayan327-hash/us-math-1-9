import { courseAssets } from './courseAssets';

export type VisualAgeBand = 'young' | 'middle' | 'senior';
export type IntroScenePreset = 'characterObjectRight' | 'characterOnlyRight' | 'objectOnlyRight';
export type TeachingContextPreset = 'objectOnlyLowRight';
export type FeedbackState = 'thinking' | 'correct' | 'retry';

export type VisualAssetRef = {
  src: string;
  label: string;
};

export type ProblemVisualConfig = {
  ageBand: VisualAgeBand;
  intro: {
    character: VisualAssetRef | null;
    object: VisualAssetRef | null;
    supportingObject?: VisualAssetRef | null;
    preset: IntroScenePreset;
  } | null;
  teaching: {
    object: VisualAssetRef | null;
    preset: TeachingContextPreset;
  } | null;
  feedback: Partial<Record<FeedbackState, VisualAssetRef>>;
  mappingReason: string;
};

const characterAssets = {
  emmaThinking: { src: courseAssets.characters.girlThinking, label: 'Emma thinking pose' },
  emmaCorrect: { src: courseAssets.characters.girlCelebrating, label: 'Emma celebrating pose' },
  benThinking: { src: courseAssets.characters.ben, label: 'Ben approved character asset' },
  benCorrect: { src: courseAssets.characters.ben, label: 'Ben approved character asset' },
  omarThinking: null,
  omarCorrect: null
} as const;

const objectAssets = {
  blueCrayon: { src: courseAssets.objects.crayonBlue, label: 'blue crayon' },
  yellowCrayon: { src: courseAssets.objects.crayonYellow, label: 'yellow crayon supporting accent' },
  cookie: { src: courseAssets.objects.cookie, label: 'cookie' },
  sticker: null,
  gameCard: null
} as const;

export const problemVisualConfig: Record<string, ProblemVisualConfig> = {
  's1-challenge': {
    ageBand: 'young',
    intro: {
      character: characterAssets.emmaThinking,
      object: objectAssets.blueCrayon,
      supportingObject: objectAssets.yellowCrayon,
      preset: 'characterObjectRight'
    },
    teaching: {
      object: objectAssets.blueCrayon,
      preset: 'objectOnlyLowRight'
    },
    feedback: {
      thinking: characterAssets.emmaThinking,
      correct: characterAssets.emmaCorrect,
      retry: characterAssets.emmaThinking
    },
    mappingReason: 'The problem explicitly names Emma and crayons; approved crayon and neutral/thinking girl assets are available.'
  },
  's1-prac2': {
    ageBand: 'young',
    intro: {
      character: null,
      object: objectAssets.cookie,
      preset: 'objectOnlyRight'
    },
    teaching: {
      object: objectAssets.cookie,
      preset: 'objectOnlyLowRight'
    },
    feedback: {},
    mappingReason: 'The problem explicitly names Omar and cookies; cookie is available, but no approved Omar character asset exists.'
  },
  's2-fewer-example': {
    ageBand: 'young',
    intro: {
      character: characterAssets.benThinking,
      object: objectAssets.sticker,
      preset: 'characterOnlyRight'
    },
    teaching: {
      object: objectAssets.sticker,
      preset: 'objectOnlyLowRight'
    },
    feedback: {
      thinking: characterAssets.benThinking,
      correct: characterAssets.benCorrect,
      retry: characterAssets.benThinking
    },
    mappingReason: 'The More/Fewer problem explicitly names Ben/Ava and stickers; Ben/Ava are available, but no approved sticker asset exists.'
  }
};

export function getProblemVisualConfig(activityId: string): ProblemVisualConfig | null {
  return problemVisualConfig[activityId] ?? null;
}
