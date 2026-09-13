import { Activity, CourseStage, VisualStep } from '../types';
import { courseAssets } from '../data/courseAssets';

export type AgeBand = 'playful' | 'structured' | 'mastery';
export type ProblemContextTheme =
  | 'game'
  | 'recipe'
  | 'smoothie'
  | 'school'
  | 'shopping'
  | 'tickets'
  | 'candy'
  | 'cards'
  | 'money'
  | 'logic';
export type IntroComposition = 'hero-left' | 'hero-right' | 'center-stage' | 'diagonal-story' | 'split-story-math';
export type TeachingVisualState = 'intro' | 'read' | 'model' | 'discover' | 'calculate' | 'answer' | 'complete';

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

export function getLevelIdentity(levelNumber: number): {
  motifClass: string;
  cueEN: string;
  cueZH: string;
} {
  const identities = [
    ['vm-identity-build', 'Quantity Builder', '数量建造'],
    ['vm-identity-compare', 'Same & Different', '相同与不同'],
    ['vm-identity-whole', 'Part / Whole', '部分与整体'],
    ['vm-identity-unit', 'Find One First', '先找一份'],
    ['vm-identity-hidden', 'Hidden Unit', '隐藏单位'],
    ['vm-identity-scale', 'Scale Up / Down', '比例缩放'],
    ['vm-identity-algebra', 'Visual Algebra', '视觉代数'],
    ['vm-identity-rebuild', 'Rebuild the Whole', '重构整体'],
    ['vm-identity-transfer', 'Transfer / Mastery', '转移与守恒']
  ] as const;
  const selected = identities[Math.max(0, Math.min(8, levelNumber - 1))];
  return { motifClass: selected[0], cueEN: selected[1], cueZH: selected[2] };
}

export function getProblemContextTheme(activity: Activity): ProblemContextTheme {
  const text = `${activity.titleEN} ${activity.questionEN} ${activity.modelConfig.unitNameEN ?? ''} ${activity.assetSlots?.object ?? ''}`.toLowerCase();
  if (text.includes('game') || text.includes('quest') || text.includes('star')) return 'game';
  if (text.includes('recipe') || text.includes('bakery') || text.includes('flour') || text.includes('sugar')) return 'recipe';
  if (text.includes('smoothie') || text.includes('strawberr')) return 'smoothie';
  if (text.includes('shirt') || text.includes('hat') || text.includes('shopping')) return 'shopping';
  if (text.includes('ticket') || text.includes('theater')) return 'tickets';
  if (text.includes('candy')) return 'candy';
  if (text.includes('card') || text.includes('deck')) return 'cards';
  if (text.includes('notebook') || text.includes('book') || text.includes('pencil') || text.includes('eraser') || text.includes('crayon')) return 'school';
  if (text.includes('money') || text.includes('dollar') || text.includes('$')) return 'money';
  if (text.includes('cookie')) return 'recipe';
  return 'logic';
}

export function getIntroComposition(stage: CourseStage, activity: Activity): IntroComposition {
  const theme = getProblemContextTheme(activity);
  if (stage.levelNumber >= 8 || theme === 'cards') return 'split-story-math';
  if (theme === 'recipe' || theme === 'smoothie') return 'diagonal-story';
  if (theme === 'school') return activity.type === 'concept_intro' ? 'hero-left' : 'hero-right';
  if (theme === 'shopping' || theme === 'tickets') return 'center-stage';
  if (stage.levelNumber <= 2) return activity.type === 'concept_intro' ? 'hero-right' : 'center-stage';
  return stage.levelNumber % 2 === 0 ? 'hero-left' : 'hero-right';
}

export function getContextAssets(stage: CourseStage, activity: Activity): {
  primary: string;
  secondary: string | null;
} {
  const theme = getProblemContextTheme(activity);
  switch (theme) {
    case 'game':
      return { primary: courseAssets.objects.gameController, secondary: courseAssets.feedback.star };
    case 'recipe':
      return { primary: courseAssets.objects.flourCup, secondary: courseAssets.objects.cookie };
    case 'smoothie':
      return { primary: courseAssets.objects.smoothieCup, secondary: courseAssets.objects.strawberry };
    case 'school':
      if (activity.questionEN.toLowerCase().includes('crayon')) {
        return { primary: courseAssets.objects.crayonBlue, secondary: courseAssets.objects.crayonYellow };
      }
      if (activity.questionEN.toLowerCase().includes('eraser')) {
        return { primary: courseAssets.objects.eraser, secondary: courseAssets.objects.pencil };
      }
      if (activity.questionEN.toLowerCase().includes('book')) {
        return { primary: courseAssets.objects.openBook, secondary: courseAssets.objects.booksStack };
      }
      return { primary: courseAssets.objects.notebook, secondary: courseAssets.objects.pencil };
    case 'shopping':
      return { primary: courseAssets.objects.shirt, secondary: courseAssets.objects.hat };
    case 'tickets':
      return { primary: courseAssets.objects.adultTicket, secondary: courseAssets.objects.childTicket };
    case 'candy':
      return { primary: courseAssets.objects.candy, secondary: courseAssets.objects.giftBox };
    case 'cards':
      return { primary: courseAssets.objects.ticket, secondary: courseAssets.levelVisuals.logicNodes };
    case 'money':
      return { primary: courseAssets.objects.dollarBill, secondary: courseAssets.objects.coins };
    case 'logic':
    default:
      return { primary: getStageHeroAsset(stage), secondary: getStageAccentAsset(stage) };
  }
}

export function getTeachingVisualState(
  step: VisualStep,
  stepIndex: number,
  totalSteps: number
): TeachingVisualState {
  if (stepIndex >= totalSteps - 1) return 'answer';
  if (step.formulaEN) return 'calculate';
  if (
    step.highlightDifference ||
    step.highlightSame ||
    step.highlightUnitRate ||
    step.eliminatedRow1Common ||
    step.eliminatedRow2Common ||
    step.isolatedUnitIndex !== undefined ||
    step.transferPhase ||
    step.highlightTargetSection
  ) {
    return 'discover';
  }
  if (stepIndex === 0) return 'read';
  return 'model';
}

export function getStateAccentLabel(state: TeachingVisualState): string {
  switch (state) {
    case 'read':
      return 'Read';
    case 'model':
      return 'Model';
    case 'discover':
      return 'Discover';
    case 'calculate':
      return 'Calculate';
    case 'answer':
      return 'Answer';
    case 'complete':
      return 'Complete';
    case 'intro':
    default:
      return 'Intro';
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
