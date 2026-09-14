import React from 'react';
import { courseAssets } from '../data/courseAssets';

type IntroSceneConfig = {
  character?: string;
  object?: string;
  supportingObject?: string;
  variant: 'emma-crayon' | 'omar-cookie';
};

type TeachingObjectConfig = {
  object: string;
  variant: 'crayon';
};

const introScenes: Record<string, IntroSceneConfig> = {
  's1-challenge': {
    character: courseAssets.characters.girlThinking,
    object: courseAssets.objects.crayonBlue,
    supportingObject: courseAssets.objects.crayonYellow,
    variant: 'emma-crayon'
  },
  's3-challenge': {
    character: courseAssets.characters.boyThinking,
    object: courseAssets.objects.cookie,
    variant: 'omar-cookie'
  }
};

const teachingObjects: Record<string, TeachingObjectConfig> = {
  's1-challenge:0': {
    object: courseAssets.objects.crayonBlue,
    variant: 'crayon'
  }
};

export function getLowGradeIntroScene(levelNumber: number, activityId: string): IntroSceneConfig | null {
  if (levelNumber > 3) return null;
  return introScenes[activityId] ?? null;
}

export function getLowGradeTeachingObject(
  levelNumber: number,
  activityId: string,
  stepIndex: number
): TeachingObjectConfig | null {
  if (levelNumber > 3) return null;
  return teachingObjects[`${activityId}:${stepIndex}`] ?? null;
}

export const LowGradeIntroScene: React.FC<{ config: IntroSceneConfig }> = ({ config }) => (
  <div className={`vm-low-intro-scene vm-low-intro-scene--${config.variant}`} aria-hidden="true">
    <div className="vm-low-intro-scene__ground" />
    {config.character && (
      <img
        src={config.character}
        alt=""
        className="vm-low-intro-scene__character"
        draggable={false}
      />
    )}
    {config.object && (
      <img
        src={config.object}
        alt=""
        className="vm-low-intro-scene__object"
        draggable={false}
      />
    )}
    {config.supportingObject && (
      <img
        src={config.supportingObject}
        alt=""
        className="vm-low-intro-scene__support"
        draggable={false}
      />
    )}
  </div>
);

export const LowGradeTeachingObject: React.FC<{ config: TeachingObjectConfig }> = ({ config }) => (
  <div className={`vm-low-teaching-object vm-low-teaching-object--${config.variant}`} aria-hidden="true">
    <img src={config.object} alt="" draggable={false} />
  </div>
);
