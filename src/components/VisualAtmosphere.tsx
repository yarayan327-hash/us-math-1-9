import React from 'react';
import {
  characterFeedbackAssets,
  feedbackStarAsset,
  getLowAgeVisualConfig,
  shouldShowLowAgeVisuals,
  VisualFeedbackState
} from '../data/courseVisualConfig';

interface LowAgeDecorationProps {
  levelNumber: number;
  placement: 'intro' | 'teaching';
}

interface CharacterFeedbackProps {
  levelNumber: number;
  state: VisualFeedbackState;
  surface: 'intro' | 'teaching';
  showStars?: boolean;
}

export const LowAgeDecoration: React.FC<LowAgeDecorationProps> = ({ levelNumber, placement }) => {
  if (!shouldShowLowAgeVisuals(levelNumber)) return null;

  const config = getLowAgeVisualConfig(levelNumber);
  const asset = placement === 'intro' ? config?.introDecoration : config?.teachingDecoration;
  if (!asset) return null;

  return (
    <img
      src={asset}
      alt=""
      loading="lazy"
      draggable={false}
      className={`vm-low-age-decoration vm-low-age-decoration--${placement}`}
    />
  );
};

export const CharacterFeedback: React.FC<CharacterFeedbackProps> = ({
  levelNumber,
  state,
  surface,
  showStars = false
}) => {
  if (!shouldShowLowAgeVisuals(levelNumber)) return null;

  const asset = characterFeedbackAssets[state];

  return (
    <div className={`vm-character-feedback vm-character-feedback--${surface} vm-character-feedback--${state}`} aria-hidden="true">
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
