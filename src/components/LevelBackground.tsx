import React from 'react';
import { getAgeBand } from '../utils/visualTheme';

interface LevelBackgroundProps {
  levelNumber?: number;
  mode?: 'home' | 'lesson' | 'complete';
}

export const LevelBackground: React.FC<LevelBackgroundProps> = ({
  levelNumber = 4,
  mode = 'lesson'
}) => {
  const band = getAgeBand(levelNumber);
  const showPlayfulStars = band === 'playful';
  const showStructuredNodes = band !== 'playful';
  const denseLogic = band === 'mastery';

  return (
    <div
      className={`vm-level-bg vm-level-bg--${band} vm-level-bg--${mode}`}
      aria-hidden="true"
    >
      <svg className="vm-bg-svg vm-bg-svg--top-left" viewBox="0 0 360 240">
        <path className="vm-bg-line vm-line-draw" d="M24 92 C88 18 162 30 208 82 S304 142 342 62" />
        <path className="vm-bg-line vm-bg-line--quiet" d="M18 158 C86 126 142 176 196 136 S294 92 340 152" />
        <circle className="vm-bg-node vm-node-activate" cx="78" cy="58" r="5" />
        <circle className="vm-bg-node vm-node-activate vm-delay-2" cx="220" cy="88" r="4" />
        <circle className="vm-bg-dot" cx="312" cy="42" r="3" />
        {showPlayfulStars && (
          <>
            <path className="vm-bg-star vm-soft-pop" d="M122 122 l5 10 11 2 -8 8 2 11 -10 -5 -10 5 2 -11 -8 -8 11 -2z" />
            <rect className="vm-bg-block vm-float-playful" x="260" y="154" width="28" height="18" rx="6" />
          </>
        )}
        {showStructuredNodes && (
          <>
            <path className="vm-bg-dash" d="M92 196 H188 Q214 196 214 170 V138" />
            <circle className="vm-bg-focus" cx="214" cy="138" r="7" />
          </>
        )}
      </svg>

      <svg className="vm-bg-svg vm-bg-svg--bottom-right" viewBox="0 0 420 280">
        <path className="vm-bg-line vm-line-draw vm-delay-1" d="M58 214 C124 148 188 152 238 184 S344 232 388 146" />
        <path className="vm-bg-line vm-bg-line--quiet" d="M80 88 H154 Q188 88 188 122 V182" />
        <circle className="vm-bg-node vm-node-activate" cx="80" cy="88" r="5" />
        <circle className="vm-bg-node vm-node-activate vm-delay-2" cx="188" cy="182" r="5" />
        <circle className="vm-bg-dot" cx="342" cy="96" r="3" />
        {!denseLogic && <rect className="vm-bg-block" x="298" y="174" width="42" height="14" rx="7" />}
        {denseLogic && (
          <>
            <path className="vm-bg-dash" d="M246 72 L306 114 L366 78" />
            <circle className="vm-bg-focus" cx="306" cy="114" r="6" />
          </>
        )}
      </svg>
    </div>
  );
};
