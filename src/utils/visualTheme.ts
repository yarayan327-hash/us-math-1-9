import { Activity, CourseStage, VisualStep } from '../types';
import { levelCompleteRasterAssets } from '../data/courseVisualConfig';

export type AgeBand = 'playful' | 'structured' | 'mastery';
export type MathStructureTheme =
  | 'build'
  | 'compare'
  | 'part-whole'
  | 'unit-rate'
  | 'hidden'
  | 'scale'
  | 'algebra'
  | 'rebuild'
  | 'transfer'
  | 'logic';
export type IntroComposition = 'hero-left' | 'hero-right' | 'center-stage' | 'diagonal-story' | 'split-story-math';
export type TeachingVisualState = 'intro' | 'read' | 'model' | 'discover' | 'calculate' | 'answer' | 'complete';

export function getAgeBand(levelNumber: number): AgeBand {
  if (levelNumber <= 3) return 'playful';
  if (levelNumber <= 6) return 'structured';
  return 'mastery';
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

export function getMathStructureTheme(activity: Activity): MathStructureTheme {
  switch (activity.modelType) {
    case 'single_row_add_sub':
      return 'build';
    case 'comparison_two_rows':
    case 'same_and_different':
      return 'compare';
    case 'single_row_partition':
    case 'missing_part_row':
      return 'part-whole';
    case 'unit_scale':
    case 'scale_unit_rate':
      return 'unit-rate';
    case 'ratio_rows':
      return 'hidden';
    case 'recipe_scale':
    case 'sticker_pack_scale':
    case 'proportional_pairs':
      return 'scale';
    case 'system_elimination':
      return 'algebra';
    case 'rebuild_whole':
    case 'mia_candy_reverse':
    case 'nested_fraction_remainder':
      return 'rebuild';
    case 'card_transfer_invariance':
    case 'sam_alex_card_transfer':
      return 'transfer';
    default:
      return 'logic';
  }
}

export function getIntroComposition(stage: CourseStage, activity: Activity): IntroComposition {
  if (activity.modelType === 'system_elimination') return 'split-story-math';
  if (activity.modelType.includes('transfer')) return 'diagonal-story';
  if (activity.modelType === 'rebuild_whole' || activity.modelType === 'nested_fraction_remainder') return 'center-stage';
  if (activity.modelType === 'ratio_rows' || activity.modelType === 'proportional_pairs') return 'split-story-math';
  if (activity.type === 'concept_intro') return stage.levelNumber % 2 === 0 ? 'hero-left' : 'hero-right';
  if (activity.type === 'guided_practice') return 'center-stage';
  return stage.levelNumber % 2 === 0 ? 'hero-left' : 'hero-right';
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

export function getCompletionAsset(): string {
  return levelCompleteRasterAssets.trophy;
}

export function getAmbientMotionClass(levelNumber: number): string {
  const band = getAgeBand(levelNumber);
  if (band === 'playful') return 'vm-float-playful';
  if (band === 'structured') return 'vm-float-structured';
  return 'vm-float-mastery';
}
