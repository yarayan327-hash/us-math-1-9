import React from 'react';
import { Activity, CourseStage, Language, VisualStep } from '../types';
import {
  getAmbientMotionClass,
  getContextAssets,
  getLevelIdentity,
  getProblemContextTheme,
  getTeachingVisualState
} from '../utils/visualTheme';

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
  const assets = getContextAssets(stage, activity);
  const formula = language === 'ZH' ? currentStep.formulaZH || currentStep.formulaEN : currentStep.formulaEN;
  const status = language === 'ZH' ? currentStep.statusNoteZH || currentStep.statusNoteEN : currentStep.statusNoteEN;

  return (
    <div className={`vm-step-layer vm-step-layer--${visualState} vm-theme--${theme} ${identity.motifClass}`}>
      <div className="vm-context-badge" aria-hidden="true">
        <img
          src={assets.primary}
          alt=""
          className={`vm-context-badge__asset ${getAmbientMotionClass(stage.levelNumber)}`}
          draggable={false}
        />
        {assets.secondary && (
          <img
            src={assets.secondary}
            alt=""
            className="vm-context-badge__accent"
            draggable={false}
          />
        )}
      </div>

      <div className="vm-focus-rail" aria-hidden="true">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <span
            key={index}
            className={`vm-focus-rail__node ${
              index < stepIndex ? 'is-complete' : index === stepIndex ? 'is-current' : ''
            }`}
          />
        ))}
      </div>

      <div className="vm-state-chip" aria-hidden="true">
        <span className="vm-state-chip__dot" />
      </div>

      <div className="vm-annotation-lines" aria-hidden="true">
        <span className="vm-annotation-lines__line vm-annotation-lines__line--a" />
        <span className="vm-annotation-lines__line vm-annotation-lines__line--b" />
      </div>

      {(formula || status) && (
        <div className="vm-equation-strip" aria-live="polite">
          {formula && <span className="vm-equation-strip__formula">{formula}</span>}
          {status && <span className="vm-equation-strip__status">{status}</span>}
        </div>
      )}
    </div>
  );
};
