import React from 'react';
import { Activity, CourseStage } from '../types';
import { getLevelIdentity } from '../utils/visualTheme';

interface ModelPreviewProps {
  stage: CourseStage;
  activity: Activity;
}

const Unit = ({ x, y, active = false, ghost = false }: { x: number; y: number; active?: boolean; ghost?: boolean; key?: React.Key }) => (
  <rect
    x={x}
    y={y}
    width="36"
    height="22"
    rx="6"
    className={ghost ? 'vm-preview-unit vm-preview-unit--ghost' : active ? 'vm-preview-unit vm-preview-unit--active' : 'vm-preview-unit'}
  />
);

export const ModelPreview: React.FC<ModelPreviewProps> = ({ stage, activity }) => {
  const identity = getLevelIdentity(stage.levelNumber);
  const type = activity.modelType;

  return (
    <div className={`vm-model-preview ${identity.motifClass}`} aria-hidden="true">
      <svg viewBox="0 0 320 190" className="vm-model-preview__svg">
        <defs>
          <marker id={`preview-arrow-${activity.id}`} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M 0 0 L 6 3 L 0 6 z" className="vm-preview-arrow-head" />
          </marker>
        </defs>

        {(type === 'single_row_add_sub' || stage.levelNumber === 1) && (
          <g className="vm-preview-group vm-preview-build">
            {[0, 1, 2, 3].map((i) => <Unit key={i} x={42 + i * 41} y={82} active={i >= 2} />)}
            <path d="M42 122 H201" className="vm-preview-bracket" />
            <path d="M216 94 H264" className="vm-preview-connector" markerEnd={`url(#preview-arrow-${activity.id})`} />
          </g>
        )}

        {(type === 'comparison_two_rows' || type === 'ratio_rows' || type === 'same_and_different') && (
          <g className="vm-preview-group vm-preview-compare">
            {[0, 1, 2, 3].map((i) => <Unit key={`a-${i}`} x={46 + i * 41} y={58} />)}
            {[0, 1, 2, 3, 4, 5].map((i) => <Unit key={`b-${i}`} x={46 + i * 41} y={106} active={i >= 4} />)}
            <path d="M46 42 V145" className="vm-preview-baseline" />
            <path d="M210 138 H292" className="vm-preview-bracket vm-preview-bracket--difference" />
          </g>
        )}

        {(type === 'single_row_partition' || type === 'missing_part_row') && (
          <g className="vm-preview-group vm-preview-whole">
            {[0, 1, 2, 3, 4, 5].map((i) => <Unit key={i} x={36 + i * 41} y={82} active={i > 2} ghost={i === 5} />)}
            <rect x="32" y="76" width="254" height="34" rx="9" className="vm-preview-whole-frame" />
            <path d="M36 122 H286" className="vm-preview-bracket" />
          </g>
        )}

        {(type === 'unit_scale' || type === 'scale_unit_rate') && (
          <g className="vm-preview-group vm-preview-unit-rate">
            {[0, 1, 2, 3].map((i) => <Unit key={`known-${i}`} x={42 + i * 41} y={54} />)}
            <Unit x={104} y={104} active />
            {[0, 1, 2, 3, 4].map((i) => <Unit key={`target-${i}`} x={62 + i * 41} y={142} ghost={i > 2} />)}
            <path d="M124 78 V101" className="vm-preview-connector" markerEnd={`url(#preview-arrow-${activity.id})`} />
            <path d="M142 116 C182 112 200 126 224 140" className="vm-preview-connector" markerEnd={`url(#preview-arrow-${activity.id})`} />
          </g>
        )}

        {(type === 'recipe_scale' || type === 'proportional_pairs' || type === 'sticker_pack_scale') && (
          <g className="vm-preview-group vm-preview-scale">
            {[0, 1, 2].map((i) => <Unit key={`base-${i}`} x={46 + i * 41} y={70} />)}
            {[0, 1, 2, 3, 4, 5].map((i) => <Unit key={`scale-${i}`} x={46 + i * 41} y={122} active={i > 2} />)}
            <path d="M178 82 C214 80 230 88 252 112" className="vm-preview-connector" markerEnd={`url(#preview-arrow-${activity.id})`} />
          </g>
        )}

        {type === 'system_elimination' && (
          <g className="vm-preview-group vm-preview-cancel">
            {[0, 1, 2, 3, 4].map((i) => <Unit key={`r1-${i}`} x={42 + i * 41} y={58} active={i > 2} />)}
            {[0, 1, 2].map((i) => <Unit key={`r2-${i}`} x={42 + i * 41} y={112} />)}
            <path d="M38 50 H171 M38 104 H171" className="vm-preview-match-rail" />
            <path d="M50 50 L166 134 M166 50 L50 134" className="vm-preview-cancel-line" />
          </g>
        )}

        {(type === 'rebuild_whole' || type === 'mia_candy_reverse' || type === 'nested_fraction_remainder') && (
          <g className="vm-preview-group vm-preview-rebuild">
            {[0, 1, 2, 3].map((i) => <Unit key={i} x={62 + i * 41} y={82} ghost={i < 2} active={i >= 2} />)}
            <rect x="58" y="76" width="172" height="34" rx="9" className="vm-preview-whole-frame" />
            <path d="M214 120 C180 144 130 144 96 120" className="vm-preview-connector" markerEnd={`url(#preview-arrow-${activity.id})`} />
          </g>
        )}

        {(type === 'card_transfer_invariance' || type === 'sam_alex_card_transfer') && (
          <g className="vm-preview-group vm-preview-transfer">
            <rect x="52" y="56" width="88" height="54" rx="14" className="vm-preview-zone" />
            <rect x="184" y="56" width="88" height="54" rx="14" className="vm-preview-zone" />
            <path d="M146 84 C164 58 184 58 202 82" className="vm-preview-connector vm-preview-transfer-path" markerEnd={`url(#preview-arrow-${activity.id})`} />
            <path d="M52 132 H272" className="vm-preview-bracket" />
          </g>
        )}
      </svg>
    </div>
  );
};
