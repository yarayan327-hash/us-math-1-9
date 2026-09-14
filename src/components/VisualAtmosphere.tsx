import React from 'react';
import {
  feedbackStarAsset,
  getCharacterAsset,
  getFeedbackCharacterAsset,
  getProblemVisualConfig,
  VisualFeedbackState
} from '../data/courseVisualConfig';

interface ContextSceneProps {
  levelNumber: number;
  problemId: string;
  placement: 'intro' | 'teaching';
}

interface CharacterFeedbackProps {
  levelNumber: number;
  problemId: string;
  state: VisualFeedbackState;
  showStars?: boolean;
}

export const ContextScene: React.FC<ContextSceneProps> = ({ levelNumber, problemId, placement }) => {
  const config = getProblemVisualConfig(problemId);
  if (!config) return null;

  const isLowAge = levelNumber <= 3;
  const shouldShowCharacter = placement === 'intro' && isLowAge && config.character;
  const objects = placement === 'intro'
    ? config.introObjects
    : config.teachingWatermark
      ? [config.teachingWatermark]
      : [];

  if (!shouldShowCharacter && objects.length === 0 && placement !== 'intro') return null;

  return (
    <div
      className={`vm-context-scene vm-context-scene--${placement} vm-context-scene--level-${levelNumber} vm-context-scene--${config.ambientMotif}`}
      aria-hidden="true"
    >
      <div className="vm-context-scene__motif" />
      {placement === 'intro' && <div className="vm-context-scene__ground" />}
      {objects.map((asset, index) => (
        <img
          key={`${asset}-${index}`}
          src={asset}
          alt=""
          loading="lazy"
          draggable={false}
          className={`vm-context-scene__object vm-context-scene__object--${index + 1}`}
        />
      ))}
      {shouldShowCharacter && config.character && (
        <img
          src={getCharacterAsset(config.character, config.character.introPose)}
          alt=""
          loading="lazy"
          draggable={false}
          className="vm-context-scene__character"
        />
      )}
    </div>
  );
};

export const CharacterFeedback: React.FC<CharacterFeedbackProps> = ({
  levelNumber,
  problemId,
  state,
  showStars = false
}) => {
  if (levelNumber > 3) return null;

  const asset = getFeedbackCharacterAsset(problemId, state);
  if (!asset) return null;

  return (
    <div className={`vm-character-feedback vm-character-feedback--teaching vm-character-feedback--${state}`} aria-hidden="true">
      {showStars && (
        <div className="vm-character-feedback__stars">
          {[0, 1, 2].map((index) => (
            <img
              key={index}
              src={feedbackStarAsset}
              alt=""
              loading="lazy"
              draggable={false}
              className={`vm-character-feedback__star vm-character-feedback__star--${index + 1}`}
            />
          ))}
        </div>
      )}
      <img
        src={asset}
        alt=""
        loading="lazy"
        draggable={false}
        className="vm-character-feedback__asset"
      />
    </div>
  );
};
