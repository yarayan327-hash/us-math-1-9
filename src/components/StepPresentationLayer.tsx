import React from 'react';
import { Activity, CourseStage, Language, VisualStep } from '../types';
import {
  getLevelIdentity,
  getProblemContextTheme,
  getTeachingVisualState
} from '../utils/visualTheme';
import { getLowGradeTeachingObject, LowGradeTeachingObject } from './LowGradeScene';

interface StepPresentationLayerProps {
  stage: CourseStage;
  activity: Activity;
  currentStep: VisualStep;
  stepIndex: number;
  totalSteps: number;
  language: Language;
}

export const StepPresentationLayer: React.FC<StepPresentationLayerProps> = ({
  stage,
  activity,
  currentStep,
  stepIndex,
  totalSteps,
  language
}) => {
  const visualState = getTeachingVisualState(currentStep, stepIndex, totalSteps);
  const identity = getLevelIdentity(stage.levelNumber);
  const theme = getProblemContextTheme(activity);
  const formula = language === 'ZH' ? currentStep.formulaZH || currentStep.formulaEN : currentStep.formulaEN;
  const status = language === 'ZH' ? currentStep.statusNoteZH || currentStep.statusNoteEN : currentStep.statusNoteEN;
  const lowGradeTeachingObject = getLowGradeTeachingObject(stage.levelNumber, activity.id, stepIndex);

  return (
    <div className={`vm-step-layer vm-step-layer--${visualState} vm-theme--${theme} ${identity.motifClass}`}>
      {lowGradeTeachingObject && <LowGradeTeachingObject config={lowGradeTeachingObject} />}

      {(formula || status) && (
        <div className="vm-equation-strip" aria-live="polite">
          {formula && <span className="vm-equation-strip__formula">{formula}</span>}
          {status && <span className="vm-equation-strip__status">{status}</span>}
        </div>
      )}
    </div>
  );
};
