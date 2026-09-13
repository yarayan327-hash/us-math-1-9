import { CourseStage, StageId } from '../types';
import { stage1 } from './stages/stage1';
import { stage2 } from './stages/stage2';
import { stage3 } from './stages/stage3';
import { stage4 } from './stages/stage4';
import { stage5 } from './stages/stage5';
import { stage6 } from './stages/stage6';
import { stage7 } from './stages/stage7';
import { stage8 } from './stages/stage8';
import { stage9 } from './stages/stage9';

export const STAGES: Record<StageId, CourseStage> = {
  // New 9-Level Pedagogical Curriculum
  'level-1-build-quantity': stage1,
  'level-2-see-difference': stage2,
  'level-3-find-missing-part': stage3,
  'level-4-find-one-unit': stage4,
  'level-5-hidden-unit': stage5,
  'level-6-scale-up-down': stage6,
  'level-7-cancel-same-part': stage7,
  'level-8-rebuild-whole': stage8,
  'level-9-master-challenge': stage9,

  // Backward compatibility aliases
  'level-6-same-and-different': stage6,
  'number-builder': stage1,
  'compare-connect': stage2,
  'find-one-first': stage4,
  'hidden-unit-explorer': stage5,
  'relationship-solver': stage7
};

export const STAGE_ORDER: StageId[] = [
  'level-1-build-quantity',
  'level-2-see-difference',
  'level-3-find-missing-part',
  'level-4-find-one-unit',
  'level-5-hidden-unit',
  'level-6-scale-up-down',
  'level-7-cancel-same-part',
  'level-8-rebuild-whole',
  'level-9-master-challenge'
];

export function getStage(stageId: StageId): CourseStage {
  return STAGES[stageId] || STAGES['level-1-build-quantity'];
}

export function getTotalActivitiesCount(): number {
  return (
    stage1.activities.length +
    stage2.activities.length +
    stage3.activities.length +
    stage4.activities.length +
    stage5.activities.length +
    stage6.activities.length +
    stage7.activities.length +
    stage8.activities.length +
    stage9.activities.length
  );
}
