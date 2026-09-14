import { courseAssets } from './courseAssets';

export type VisualFeedbackState = 'thinking' | 'correct' | 'retry';
export type CharacterPose = 'normal' | 'thinking' | 'pointing' | 'happy' | 'celebrating';
export type CharacterIdentity = 'ava' | 'ben' | 'boy' | 'girl';
export type AmbientMotif = 'build' | 'compare' | 'part-whole' | 'unit' | 'hidden' | 'scale' | 'eliminate' | 'rebuild' | 'transfer';

export type CharacterVisualConfig = {
  identity: CharacterIdentity;
  introPose: CharacterPose;
  thinkingPose: CharacterPose;
  correctPose: CharacterPose;
  retryPose: CharacterPose;
};

export type ProblemVisualConfig = {
  character: CharacterVisualConfig | null;
  introObjects: string[];
  teachingWatermark: string | null;
  ambientMotif: AmbientMotif;
};

const characterRoles: Record<string, CharacterVisualConfig> = {
  ava: { identity: 'ava', introPose: 'normal', thinkingPose: 'thinking', correctPose: 'celebrating', retryPose: 'pointing' },
  ben: { identity: 'ben', introPose: 'normal', thinkingPose: 'thinking', correctPose: 'celebrating', retryPose: 'pointing' },
  emma: { identity: 'girl', introPose: 'thinking', thinkingPose: 'thinking', correctPose: 'celebrating', retryPose: 'pointing' },
  mia: { identity: 'girl', introPose: 'pointing', thinkingPose: 'thinking', correctPose: 'happy', retryPose: 'pointing' },
  sara: { identity: 'girl', introPose: 'normal', thinkingPose: 'thinking', correctPose: 'celebrating', retryPose: 'pointing' },
  leo: { identity: 'boy', introPose: 'thinking', thinkingPose: 'thinking', correctPose: 'celebrating', retryPose: 'pointing' },
  noah: { identity: 'boy', introPose: 'pointing', thinkingPose: 'thinking', correctPose: 'celebrating', retryPose: 'pointing' },
  omar: { identity: 'boy', introPose: 'thinking', thinkingPose: 'thinking', correctPose: 'celebrating', retryPose: 'pointing' },
  sam: { identity: 'boy', introPose: 'normal', thinkingPose: 'thinking', correctPose: 'happy', retryPose: 'pointing' }
};

const characterAssets: Record<CharacterIdentity, Record<CharacterPose, string>> = {
  ava: {
    normal: courseAssets.characters.ava,
    thinking: courseAssets.characters.girlThinking,
    pointing: courseAssets.characters.girlPointing,
    happy: courseAssets.characters.girlHappy,
    celebrating: courseAssets.characters.girlCelebrating
  },
  ben: {
    normal: courseAssets.characters.ben,
    thinking: courseAssets.characters.boyThinking,
    pointing: courseAssets.characters.boyPointing,
    happy: courseAssets.characters.boyHappy,
    celebrating: courseAssets.characters.boyCelebrating
  },
  boy: {
    normal: courseAssets.characters.boyNormal,
    thinking: courseAssets.characters.boyThinking,
    pointing: courseAssets.characters.boyPointing,
    happy: courseAssets.characters.boyHappy,
    celebrating: courseAssets.characters.boyCelebrating
  },
  girl: {
    normal: courseAssets.characters.girlNormal,
    thinking: courseAssets.characters.girlThinking,
    pointing: courseAssets.characters.girlPointing,
    happy: courseAssets.characters.girlHappy,
    celebrating: courseAssets.characters.girlCelebrating
  }
};

export const problemVisualConfig: Record<string, ProblemVisualConfig> = {
  's1-challenge': scene('emma', [courseAssets.objects.crayonBlue, courseAssets.objects.crayonYellow], courseAssets.objects.crayonBlue, 'build'),
  's1-guided-sub': scene('ben', [], null, 'build'),
  's1-guided-blocks': scene('leo', [courseAssets.objects.toyBlockBlue], courseAssets.objects.toyBlockBlue, 'build'),
  's1-prac1': scene('mia', [courseAssets.objects.pencil], courseAssets.objects.pencil, 'build'),
  's1-prac2': scene('omar', [courseAssets.objects.cookie], courseAssets.objects.cookie, 'build'),
  's1-transfer': scene('noah', [courseAssets.objects.toyBlockBlue], courseAssets.objects.toyBlockBlue, 'build'),

  's2-challenge': scene('ava', [], null, 'compare'),
  's2-fewer-example': scene('ben', [], null, 'compare'),
  's2-find-diff': scene('mia', [], null, 'compare'),
  's2-prac1': scene('sara', [courseAssets.objects.crayonBlue, courseAssets.objects.crayonYellow], courseAssets.objects.crayonYellow, 'compare'),
  's2-transfer': scene('noah', [], null, 'compare'),

  's3-challenge': scene('emma', [courseAssets.objects.cookie], courseAssets.objects.cookie, 'part-whole'),
  's3-shirts': scene('leo', [courseAssets.objects.shirt], courseAssets.objects.shirt, 'part-whole'),
  's3-points': scene('emma', [], null, 'part-whole'),
  's3-transfer': scene('ava', [courseAssets.objects.openBook], courseAssets.objects.openBook, 'part-whole'),

  's4-challenge': mature([courseAssets.objects.notebook, courseAssets.objects.dollarBill], courseAssets.objects.notebook, 'unit'),
  's4-sketchbooks': mature([courseAssets.objects.openBook], courseAssets.objects.openBook, 'unit'),
  's4-clay': mature([], null, 'unit'),
  's4-transfer': mature([courseAssets.objects.gameController], courseAssets.objects.gameController, 'unit'),

  's5-challenge': mature([], null, 'hidden'),
  's5-cards': mature([], null, 'hidden'),
  's5-club': mature([], null, 'hidden'),
  's5-transfer': mature([courseAssets.objects.coins, courseAssets.objects.dollarBill], courseAssets.objects.coins, 'hidden'),

  's6-challenge': mature([courseAssets.objects.flourCup, courseAssets.objects.sugarCup, courseAssets.objects.cookie], courseAssets.objects.flourCup, 'scale'),
  's6-smoothie': mature([courseAssets.objects.smoothieCup, courseAssets.objects.strawberry], courseAssets.objects.smoothieCup, 'scale'),
  's6-stickers': mature([], null, 'scale'),
  's6-game-gems': mature([courseAssets.objects.gameController], courseAssets.objects.gameController, 'scale'),

  's7-challenge': mature([courseAssets.objects.adultTicket, courseAssets.objects.childTicket], courseAssets.objects.ticket, 'eliminate'),
  's7-shirts': mature([courseAssets.objects.shirt, courseAssets.objects.hat], courseAssets.objects.shirt, 'eliminate'),
  's7-notebooks': mature([courseAssets.objects.notebook], courseAssets.objects.notebook, 'eliminate'),
  's7-transfer': mature([courseAssets.objects.eraser, courseAssets.objects.pencil], courseAssets.objects.eraser, 'eliminate'),

  's8-challenge': mature([courseAssets.objects.openBook, courseAssets.objects.dollarBill], courseAssets.objects.openBook, 'rebuild'),
  's8-stickers': mature([], null, 'rebuild'),
  's8-route': mature([], null, 'rebuild'),
  's8-transfer': mature([courseAssets.objects.candy], courseAssets.objects.candy, 'rebuild'),
  's8-sam-alex-transfer': mature([], null, 'transfer'),

  's9-challenge': mature([], null, 'transfer'),
  's9-two-stage-fraction': mature([courseAssets.objects.openBook, courseAssets.objects.dollarBill, courseAssets.objects.gameController], courseAssets.objects.dollarBill, 'rebuild'),
  's9-transfer-final': mature([], null, 'transfer')
};

export const feedbackStarAsset = courseAssets.feedback.star;

export const levelCompleteRasterAssets = {
  trophy: courseAssets.levelVisuals.trophy
} as const;

function scene(
  characterKey: keyof typeof characterRoles,
  introObjects: string[],
  teachingWatermark: string | null,
  ambientMotif: AmbientMotif
): ProblemVisualConfig {
  return {
    character: characterRoles[characterKey],
    introObjects,
    teachingWatermark,
    ambientMotif
  };
}

function mature(
  introObjects: string[],
  teachingWatermark: string | null,
  ambientMotif: AmbientMotif
): ProblemVisualConfig {
  return {
    character: null,
    introObjects,
    teachingWatermark,
    ambientMotif
  };
}

export function getProblemVisualConfig(problemId: string): ProblemVisualConfig | null {
  return problemVisualConfig[problemId] ?? null;
}

export function getCharacterAsset(character: CharacterVisualConfig, pose: CharacterPose): string {
  return characterAssets[character.identity][pose];
}

export function getFeedbackCharacterAsset(problemId: string, state: VisualFeedbackState): string | null {
  const character = getProblemVisualConfig(problemId)?.character;
  if (!character) return null;

  if (state === 'correct') return getCharacterAsset(character, character.correctPose);
  if (state === 'retry') return getCharacterAsset(character, character.retryPose);
  return getCharacterAsset(character, character.thinkingPose);
}

export function shouldShowLowAgeVisuals(levelNumber: number): boolean {
  return levelNumber >= 1 && levelNumber <= 3;
}
