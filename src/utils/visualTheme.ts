import { CourseStage } from '../types';
import { courseAssets } from '../data/courseAssets';

export type AgeBand = 'playful' | 'structured' | 'mastery';

export function getAgeBand(levelNumber: number): AgeBand {
  if (levelNumber <= 3) return 'playful';
  if (levelNumber <= 6) return 'structured';
  return 'mastery';
}

export function getStageHeroAsset(stage: CourseStage): string {
  switch (stage.levelNumber) {
    case 1:
      return courseAssets.characters.girlPointing;
    case 2:
      return courseAssets.characters.ava;
    case 3:
      return courseAssets.levelVisuals.connectedPieces;
    case 4:
      return courseAssets.levelVisuals.magnifyingGlass;
    case 5:
      return courseAssets.levelVisuals.hiddenUnlocked;
    case 6:
      return courseAssets.objects.smoothieCup;
    case 7:
      return courseAssets.objects.adultTicket;
    case 8:
      return courseAssets.levelVisuals.logicNodes;
    case 9:
      return courseAssets.levelVisuals.trophy;
    default:
      return courseAssets.levelVisuals.magnifyingGlass;
  }
}

export function getStageAccentAsset(stage: CourseStage): string | null {
  switch (stage.levelNumber) {
    case 1:
      return courseAssets.objects.crayonBlue;
    case 2:
      return courseAssets.characters.ben;
    case 5:
      return courseAssets.levelVisuals.hiddenLocked;
    case 6:
      return courseAssets.objects.strawberry;
    case 7:
      return courseAssets.objects.childTicket;
    case 9:
      return courseAssets.levelVisuals.logicNodes;
    default:
      return null;
  }
}

export function getCompletionAsset(stage: CourseStage): string {
  if (stage.levelNumber <= 3) return courseAssets.feedback.star;
  if (stage.levelNumber <= 6) return courseAssets.levelVisuals.hiddenUnlocked;
  return courseAssets.levelVisuals.trophy;
}

export function getAmbientMotionClass(levelNumber: number): string {
  const band = getAgeBand(levelNumber);
  if (band === 'playful') return 'vm-float-playful';
  if (band === 'structured') return 'vm-float-structured';
  return 'vm-float-mastery';
}
