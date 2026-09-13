export type Language = 'EN' | 'ZH';

export type StageId =
  | 'level-1-build-quantity'
  | 'level-2-see-difference'
  | 'level-3-find-missing-part'
  | 'level-4-find-one-unit'
  | 'level-5-hidden-unit'
  | 'level-6-scale-up-down'
  | 'level-7-cancel-same-part'
  | 'level-8-rebuild-whole'
  | 'level-9-master-challenge'
  // Backward compatibility aliases
  | 'level-6-same-and-different'
  | 'number-builder'
  | 'compare-connect'
  | 'find-one-first'
  | 'hidden-unit-explorer'
  | 'relationship-solver';

export type ActivityType =
  | 'concept_intro'
  | 'example'
  | 'guided_practice'
  | 'transfer'
  | 'challenge';

export interface VisualStep {
  stepNumber: number;
  instructionEN: string;
  instructionZH: string;
  // Specific model state for this step
  visibleUnitsCount?: number;
  addedUnitsCount?: number;
  removedUnitsCount?: number;
  row1Units?: number;
  row2Units?: number;
  row1Add?: number;
  row2Add?: number;
  row1Remove?: number;
  row2Remove?: number;
  row2GhostUnits?: number;
  highlightDifference?: boolean;
  highlightUnitRate?: boolean;
  highlightSame?: boolean;
  eliminatedRow1Common?: boolean;
  eliminatedRow2Common?: boolean;
  isolatedUnitIndex?: number;
  bracketLabelEN?: string;
  bracketLabelZH?: string;
  bracketStartIndex?: number;
  bracketEndIndex?: number;
  bracketPosition?: 'top' | 'bottom';
  bracketRow?: 1 | 2;
  topBracketLabelEN?: string;
  topBracketLabelZH?: string;
  topBracketStartIndex?: number;
  topBracketEndIndex?: number;
  topBracket2LabelEN?: string;
  topBracket2LabelZH?: string;
  topBracket2StartIndex?: number;
  topBracket2EndIndex?: number;
  formulaEN?: string;
  formulaZH?: string;
  statusNoteEN?: string;
  statusNoteZH?: string;
  // Colors override or partition
  row1BlueCount?: number;
  row1YellowCount?: number;
  row1UnitValue?: number | string;
  row2UnitValue?: number | string;
  totalValue?: number | string;
  missingPartCount?: number;
  missingPartStartIndex?: number;
  chosenStrategy?: string;
  // Dynamic scale / transformation controls
  recipeMultiplier?: number;
  scaleMultiplier?: number;
  transferBlockValue?: number;
  transferPhase?: 'initial' | 'with_b' | 'transferred_to_a' | 'units_revealed' | 'reversed_to_b';
  activeSubSection?: string;
  highlightTargetSection?: boolean;
  fadedUnitIndices?: number[];
}

export type InteractionType =
  | 'none'
  | 'predict'
  | 'tap_relationship'
  | 'quick_choice'
  | 'strategy_select'
  | 'order_steps';

export interface StudentInteraction {
  type: InteractionType;
  promptEN: string;
  promptZH: string;
  triggerAtStep: number; // which step triggers this interaction before teacher can continue
  options?: { id: string; labelEN: string; labelZH: string; isCorrect: boolean }[];
  targetUnitIndices?: number[]; // for tap_relationship
  feedbackCorrectEN: string;
  feedbackCorrectZH: string;
}

export interface TeacherGuide {
  goalEN: string;
  goalZH: string;
  askEN: string;
  askZH: string;
  listenForEN: string;
  listenForZH: string;
  commonMistakeEN: string;
  commonMistakeZH: string;
  followUpEN: string;
  followUpZH: string;
  gradeRef: string;
}

export type ModelVisualType =
  | 'single_row_add_sub'
  | 'single_row_partition'
  | 'missing_part_row'
  | 'comparison_two_rows'
  | 'unit_scale'
  | 'scale_unit_rate'
  | 'recipe_scale'
  | 'proportional_pairs'
  | 'ratio_rows'
  | 'same_and_different'
  | 'system_elimination'
  | 'rebuild_whole'
  | 'mia_candy_reverse'
  | 'nested_fraction_remainder'
  | 'card_transfer_invariance'
  | 'sticker_pack_scale'
  | 'sam_alex_card_transfer'
  | 'percent_bar'
  | 'rate_balance';

export interface AssetSlot {
  character?: string;
  object?: string;
  category?: 'young' | 'middle' | 'mature';
  customLabelEN?: string;
  customLabelZH?: string;
}

export interface StrategyOption {
  id: string;
  labelEN: string;
  labelZH: string;
  isCorrect: boolean;
  explanationEN?: string;
  explanationZH?: string;
}

export interface ModelConfig {
  baseCount?: number;
  deltaCount?: number;
  row1LabelEN?: string;
  row1LabelZH?: string;
  row2LabelEN?: string;
  row2LabelZH?: string;
  unitNameEN?: string;
  unitNameZH?: string;
  itemUnitValue?: number;
  totalUnitsRow1?: number;
  totalUnitsRow2?: number;
  differenceUnits?: number;
  row1Color?: string;
  row2Color?: string;
  totalValueRow1?: number | string;
  totalValueRow2?: number | string;
  item1CountRow1?: number;
  item1CountRow2?: number;
  item1LabelEN?: string;
  item1LabelZH?: string;
  item2LabelEN?: string;
  item2LabelZH?: string;
  commonCount?: number;
  equation1EN?: string;
  equation2EN?: string;
  wholeCount?: number;
  knownPartCount?: number;
  unknownPartCount?: number;
  fractionDenominator?: number;
  fractionNumeratorRemaining?: number;
  ingredient1LabelEN?: string;
  ingredient1LabelZH?: string;
  ingredient1Amount?: number;
  ingredient2LabelEN?: string;
  ingredient2LabelZH?: string;
  ingredient2Amount?: number;
  yieldCount?: number;
  yieldUnitEN?: string;
  yieldUnitZH?: string;
  targetYield?: number;
  baseYield?: number;
  baseValue?: number;
  targetCount?: number;
  pairUnitsA?: number;
  pairUnitsB?: number;
  targetUnitsA?: number;
  pairAUnitNameEN?: string;
  pairAUnitNameZH?: string;
  pairBUnitNameEN?: string;
  pairBUnitNameZH?: string;
  pairNameEN_A?: string;
  pairNameZH_A?: string;
  pairNameEN_B?: string;
  pairNameZH_B?: string;
  pairIconA?: string;
  pairIconB?: string;
  pairAAmount?: number;
  pairBAmount?: number;
  targetPairAAmount?: number;
  baseUnitNameEN?: string;
  baseUnitNameZH?: string;
  targetUnitNameEN?: string;
  targetUnitNameZH?: string;
  transferAmount?: number;
  transferredCount?: number;
  ratioMultiplier?: number;
  totalCards?: number;
  totalSum?: number;
  ingredients?: Array<{
    nameEN: string;
    nameZH: string;
    amount?: number;
    baseAmount?: number;
    unitEN: string;
    unitZH: string;
    icon?: string;
  }>;
}

export interface Activity {
  id: string;
  stageId: StageId;
  type: ActivityType;
  titleEN: string;
  titleZH: string;
  questionEN: string;
  questionZH: string;
  maxUnits: number; // Pre-calculated maximum units for coordinate stability
  modelType: ModelVisualType;
  modelConfig: ModelConfig;
  steps: VisualStep[];
  interaction?: StudentInteraction;
  teacherGuide: TeacherGuide;
  assetSlots?: AssetSlot;
  strategyOptions?: StrategyOption[];
}

export interface CourseStage {
  id: StageId;
  levelNumber: number;
  titleEN: string;
  titleZH: string;
  approxGradeBand: string;
  superpowerEN: string;
  superpowerZH: string;
  endOfLevelInsightEN: string;
  endOfLevelInsightZH: string;
  unlockedBadgeEN: string;
  unlockedBadgeZH: string;
  unlockedLineEN: string;
  unlockedLineZH: string;
  conceptIntroEN: string;
  conceptIntroZH: string;
  summaryEN: string[];
  summaryZH: string[];
  nextStageId?: StageId;
  activities: Activity[];
}

export interface DiagnosticQuestion {
  id: number;
  questionEN: string;
  questionZH: string;
  options: { labelEN: string; labelZH: string; value: string }[];
  correctValue: string;
  testConceptEN: string;
  testConceptZH: string;
  gradeRef: string;
}

export interface AppState {
  currentView:
    | 'home'
    | 'diagnostic'
    | 'placement'
    | 'course'
    | 'review'
    | 'summary';
  language: Language;
  currentStageId: StageId;
  currentActivityIndex: number;
  currentStepIndex: number;
  completedActivityIds: string[];
  diagnosticAnswers: Record<number, string>;
  interactionCompleted: boolean;
  interactionFeedback: { show: boolean; isCorrect: boolean; message: string };
  isTeacherGuideOpen: boolean;
  isCourseMenuOpen: boolean;
  selectedUnits: number[];
}
