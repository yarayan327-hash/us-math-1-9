import React from 'react';
import { AssetSlot, Language } from '../../types';

interface AssetIllustrationProps {
  assetSlot?: AssetSlot;
  language?: Language;
}

export const AssetIllustration: React.FC<AssetIllustrationProps> = ({ assetSlot, language = 'EN' }) => {
  if (!assetSlot) return null;

  const { character, object, customLabelEN, customLabelZH } = assetSlot;

  if (customLabelEN || customLabelZH) {
    const label = language === 'ZH' ? (customLabelZH || customLabelEN) : (customLabelEN || customLabelZH);
    return (
      <div className="flex items-center gap-2 bg-[#F6F6F6] px-3.5 py-1.5 rounded-full border border-gray-200 shadow-xs">
        <span className="text-xs font-bold text-[#333333] tracking-wide">{label}</span>
      </div>
    );
  }

  if (!character && !object) return null;

  // Clean, age-appropriate vector illustrations with pure SVG and no distracting clutter
  return (
    <div className="flex items-center gap-3 bg-[#F6F6F6] px-3.5 py-1.5 rounded-full border border-gray-200 shadow-xs">
      {character && (
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#26B7FF]/15 flex items-center justify-center text-[#26B7FF] font-bold text-xs">
            {character[0]}
          </div>
          <span className="text-xs font-semibold text-[#333333] tracking-wide">{character}</span>
        </div>
      )}

      {character && object && <div className="h-4 w-[1px] bg-gray-300" />}

      {object && (
        <div className="flex items-center gap-1.5 text-xs text-[#666666] font-medium">
          {object === 'crayon' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#26B7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z" />
              <path d="m5 2 5 5" />
              <path d="M2 22h20" />
            </svg>
          )}
          {object === 'cookie' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 10 10 0 0 0-10-10" />
            </svg>
          )}
          {object === 'block' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#26B7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M9 3v18" />
              <path d="M15 3v18" />
              <path d="M3 9h18" />
              <path d="M3 15h18" />
            </svg>
          )}
          {object === 'sticker' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FDE700" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="#FDE700" fillOpacity="0.4" />
            </svg>
          )}
          {object === 'notebook' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#26B7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
              <path d="M6 6h10" />
              <path d="M6 10h10" />
            </svg>
          )}
          {object === 'pen' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#26B7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            </svg>
          )}
          {object === 'ticket' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="2" />
              <path d="M6 12h.01" />
              <path d="M18 12h.01" />
            </svg>
          )}
          {object === 'card' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#26B7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
          {object === 'water_bottle' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#26B7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="7" y="7" width="10" height="14" rx="3" />
              <path d="M10 2h4v5h-4z" />
            </svg>
          )}
          {object === 'game' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#26B7FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="6" width="20" height="12" rx="3" />
              <path d="M6 12h4" />
              <path d="M8 10v4" />
              <circle cx="17" cy="10" r="1" fill="#333333" />
              <circle cx="15" cy="13" r="1" fill="#333333" />
            </svg>
          )}
          {object === 'apple' && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" />
              <path d="M10 2c1 .5 2 2 2 5" />
            </svg>
          )}
          <span className="capitalize">{object.replace('_', ' ')}</span>
        </div>
      )}
    </div>
  );
};
