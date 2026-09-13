import React from 'react';
import { VisualStep, Language, ModelConfig } from '../../types';

interface CardTransferInvarianceModelProps {
  currentStep: VisualStep;
  modelConfig: ModelConfig;
  language: Language;
  renderBracket: (
    startX: number,
    endX: number,
    y: number,
    label: string,
    position: 'top' | 'bottom',
    color?: string
  ) => React.ReactNode;
}

export const CardTransferInvarianceModel: React.FC<CardTransferInvarianceModelProps> = ({
  currentStep,
  language,
  renderBracket,
}) => {
  const stepNumber = currentStep.stepNumber ?? 1;

  // 3-Column Structured Layout
  // Column 1: Label Column (x: 20 to 135)
  // Column 2: Model Area (x: 145 to 505)
  // Column 3: Relation & Invariance Info Area (x: 525 to 795)
  const LABEL_X = 135;
  const MODEL_X = 145;
  const ROW_A_Y = 100;
  const ROW_B_Y = 220;
  const ROW_H = 50;

  // Unit width for the 1-unit block (Deck A = 2 units, Deck B = 1 unit)
  const UNIT_W = 165;
  const GAP = 6;

  const transferHighlighted = stepNumber >= 2;
  const transferMoved = stepNumber >= 3;
  const ratioUnitsShown = stepNumber >= 4;
  const sumConnected = stepNumber >= 5;
  const unitsSolved = stepNumber >= 6;
  const transferReversed = stepNumber >= 7;
  const finalAnswer = stepNumber >= 8;

  return (
    <g id="card-transfer-invariance-canvas">
      {/* Title */}
      <text
        x={24}
        y={48}
        fill="#1E293B"
        fontSize="15"
        fontWeight="800"
      >
        {language === 'ZH' ? '卡牌转移问题 · 和不变与逆向还原' : 'Card Transfer · Invariance & Reversal Model'}
      </text>

      {/* COLUMN 1: FIXED LEFT LABEL SAFE ZONE */}
      <g id="card-transfer-labels">
        {/* Deck A Row Label */}
        <text
          x={LABEL_X}
          y={ROW_A_Y + ROW_H / 2 + 5}
          fill="#0369A1"
          fontSize="14"
          fontWeight="800"
          textAnchor="end"
        >
          {language === 'ZH' ? '牌组 A' : 'Deck A'}
        </text>

        {/* Deck B Row Label */}
        <text
          x={LABEL_X}
          y={ROW_B_Y + ROW_H / 2 + 5}
          fill="#B45309"
          fontSize="14"
          fontWeight="800"
          textAnchor="end"
        >
          {language === 'ZH' ? '牌组 B' : 'Deck B'}
        </text>
      </g>

      {/* COLUMN 2: MODEL AREA */}
      {/* ROW A: DECK A */}
      <g id="deck-a-row" className="transition-all duration-300">
        {ratioUnitsShown ? (
          // After transfer: 2 equal units (each 165px)
          <g>
            {/* Unit 1 */}
            <rect
              x={MODEL_X}
              y={ROW_A_Y}
              width={UNIT_W}
              height={ROW_H}
              rx="8"
              fill="#26B7FF"
              stroke="#0284C7"
              strokeWidth="2"
            />
            <text
              x={MODEL_X + UNIT_W / 2}
              y={ROW_A_Y + ROW_H / 2 + 6}
              fill="#FFFFFF"
              fontSize={unitsSolved ? '16' : '13'}
              fontWeight="800"
              textAnchor="middle"
            >
              {unitsSolved ? '30' : (language === 'ZH' ? '1 份' : '1 unit')}
            </text>

            {/* Unit 2 */}
            <rect
              x={MODEL_X + UNIT_W + GAP}
              y={ROW_A_Y}
              width={UNIT_W}
              height={ROW_H}
              rx="8"
              fill={transferReversed ? '#BAE6FD' : '#26B7FF'}
              stroke="#0284C7"
              strokeWidth="2"
            />
            <text
              x={MODEL_X + UNIT_W + GAP + UNIT_W / 2}
              y={ROW_A_Y + ROW_H / 2 + 6}
              fill={transferReversed ? '#0369A1' : '#FFFFFF'}
              fontSize={unitsSolved ? '16' : '13'}
              fontWeight="800"
              textAnchor="middle"
            >
              {unitsSolved ? '30' : (language === 'ZH' ? '1 份' : '1 unit')}
            </text>

            {/* Top Bracket for Deck A now */}
            {unitsSolved && (
              renderBracket(
                MODEL_X,
                MODEL_X + 2 * UNIT_W + GAP,
                ROW_A_Y - 14,
                language === 'ZH' ? '转移后 A: 2 × 30 = 60 张' : 'Deck A now: 2 × 30 = 60 cards',
                'top',
                '#0284C7'
              )
            )}
          </g>
        ) : (
          // Initial Deck A (250px)
          <g>
            <rect
              x={MODEL_X}
              y={ROW_A_Y}
              width={250}
              height={ROW_H}
              rx="8"
              fill="#26B7FF"
              stroke="#0284C7"
              strokeWidth="2"
            />
            <text
              x={MODEL_X + 125}
              y={ROW_A_Y + ROW_H / 2 + 6}
              fill="#FFFFFF"
              fontSize="14"
              fontWeight="800"
              textAnchor="middle"
            >
              {language === 'ZH' ? '原有张数 = ?' : 'Original Deck A = ?'}
            </text>

            {/* Incoming +15 transfer block from B */}
            {transferMoved && (
              <g>
                <rect
                  x={MODEL_X + 250 + GAP}
                  y={ROW_A_Y}
                  width={65}
                  height={ROW_H}
                  rx="8"
                  fill="#FEF08A"
                  stroke="#EAB308"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <text
                  x={MODEL_X + 250 + GAP + 32}
                  y={ROW_A_Y + ROW_H / 2 + 6}
                  fill="#854D0E"
                  fontSize="13"
                  fontWeight="800"
                  textAnchor="middle"
                >
                  +15
                </text>
              </g>
            )}
          </g>
        )}
      </g>

      {/* ROW B: DECK B */}
      <g id="deck-b-row" className="transition-all duration-300">
        {ratioUnitsShown ? (
          // After transfer: 1 unit (165px)
          <g>
            <rect
              x={MODEL_X}
              y={ROW_B_Y}
              width={UNIT_W}
              height={ROW_H}
              rx="8"
              fill="#FEF08A"
              stroke="#EAB308"
              strokeWidth="2"
            />
            <text
              x={MODEL_X + UNIT_W / 2}
              y={ROW_B_Y + ROW_H / 2 + 6}
              fill="#854D0E"
              fontSize={unitsSolved ? '16' : '13'}
              fontWeight="800"
              textAnchor="middle"
            >
              {unitsSolved ? '30' : (language === 'ZH' ? '1 份' : '1 unit')}
            </text>

            {/* Bottom Bracket for Deck B */}
            {unitsSolved && (
              renderBracket(
                MODEL_X,
                MODEL_X + UNIT_W,
                ROW_B_Y + ROW_H + 14,
                language === 'ZH' ? '转移后 B: 1 × 30 = 30 张' : 'Deck B now: 30 cards',
                'bottom',
                '#B45309'
              )
            )}
          </g>
        ) : (
          // Initial Deck B
          <g>
            <rect
              x={MODEL_X}
              y={ROW_B_Y}
              width={transferHighlighted ? 180 : 250}
              height={ROW_H}
              rx="8"
              fill="#FDE700"
              stroke="#CA8A04"
              strokeWidth="2"
            />
            <text
              x={MODEL_X + (transferHighlighted ? 90 : 125)}
              y={ROW_B_Y + ROW_H / 2 + 6}
              fill="#78350F"
              fontSize="14"
              fontWeight="800"
              textAnchor="middle"
            >
              {language === 'ZH' ? '原有张数 = ?' : 'Original Deck B = ?'}
            </text>

            {/* Transfer block on B (-15) */}
            {transferHighlighted && !transferMoved && (
              <g>
                <rect
                  x={MODEL_X + 180 + GAP}
                  y={ROW_B_Y}
                  width={64}
                  height={ROW_H}
                  rx="8"
                  fill="#FEF08A"
                  stroke="#EAB308"
                  strokeWidth="2.5"
                />
                <text
                  x={MODEL_X + 180 + GAP + 32}
                  y={ROW_B_Y + ROW_H / 2 + 6}
                  fill="#854D0E"
                  fontSize="13"
                  fontWeight="800"
                  textAnchor="middle"
                >
                  -15
                </text>
              </g>
            )}
          </g>
        )}
      </g>

      {/* TRANSFER MOVEMENT: ARROW AND SAFE LABEL (Step 3) */}
      {transferMoved && !ratioUnitsShown && (
        <g id="transfer-movement-group" className="transition-all duration-300">
          {/* Curved Transfer Arrow from Deck B transfer block to Deck A incoming block */}
          <path
            d={`M ${MODEL_X + 215} ${ROW_B_Y - 4} C ${MODEL_X + 215} ${(ROW_A_Y + ROW_B_Y + ROW_H) / 2}, ${MODEL_X + 288} ${(ROW_A_Y + ROW_B_Y + ROW_H) / 2}, ${MODEL_X + 288} ${ROW_A_Y + ROW_H + 8}`}
            fill="none"
            stroke="#EAB308"
            strokeWidth="3"
            strokeDasharray="4 4"
          />
          <polygon
            points={`${MODEL_X + 288},${ROW_A_Y + ROW_H + 4} ${MODEL_X + 283},${ROW_A_Y + ROW_H + 14} ${MODEL_X + 293},${ROW_A_Y + ROW_H + 14}`}
            fill="#EAB308"
          />

          {/* SAFE TRANSFER BADGE: Sits in open gap at x: 210..320, safely separated from arrow and bars */}
          <rect
            x={MODEL_X + 60}
            y={(ROW_A_Y + ROW_B_Y) / 2 + 5}
            width={110}
            height={28}
            rx="14"
            fill="#FEFCE8"
            stroke="#EAB308"
            strokeWidth="1.5"
          />
          <text
            x={MODEL_X + 115}
            y={(ROW_A_Y + ROW_B_Y) / 2 + 24}
            fill="#854D0E"
            fontSize="12"
            fontWeight="800"
            textAnchor="middle"
          >
            {language === 'ZH' ? '转移 15 张' : 'Transfer 15'}
          </text>
        </g>
      )}

      {/* COLUMN 3: RELATION & INVARIANCE AREA */}
      {/* Vertical Invariance Bracket Line */}
      <g id="invariant-bracket-group">
        <line
          x1={525}
          y1={ROW_A_Y}
          x2={525}
          y2={ROW_B_Y + ROW_H}
          stroke="#0F172A"
          strokeWidth="3"
        />
        <line
          x1={519}
          y1={ROW_A_Y}
          x2={525}
          y2={ROW_A_Y}
          stroke="#0F172A"
          strokeWidth="3"
        />
        <line
          x1={519}
          y1={(ROW_A_Y + ROW_B_Y + ROW_H) / 2}
          x2={525}
          y2={(ROW_A_Y + ROW_B_Y + ROW_H) / 2}
          stroke="#0F172A"
          strokeWidth="3"
        />
        <line
          x1={519}
          y1={ROW_B_Y + ROW_H}
          x2={525}
          y2={ROW_B_Y + ROW_H}
          stroke="#0F172A"
          strokeWidth="3"
        />

        {/* Card 1: Invariant Total Card (Always visible) */}
        <rect
          x={545}
          y={100}
          width={240}
          height={76}
          rx="12"
          fill="#F8FAFC"
          stroke="#0F172A"
          strokeWidth="2"
        />
        <text
          x={665}
          y={126}
          fill="#64748B"
          fontSize="11"
          fontWeight="800"
          letterSpacing="0.05em"
          textAnchor="middle"
        >
          {language === 'ZH' ? '两组总和保持不变' : 'TOTAL IS INVARIANT'}
        </text>
        <text
          x={665}
          y={156}
          fill="#0F172A"
          fontSize="17"
          fontWeight="900"
          textAnchor="middle"
        >
          {sumConnected
            ? (language === 'ZH' ? '3 份 = 90 张' : '3 units = 90 cards')
            : (language === 'ZH' ? '共 90 张' : '90 cards total')}
        </text>

        {/* Card 2: Unit Value Card (Step 6) */}
        {unitsSolved && !transferReversed && (
          <g id="unit-solved-card" className="animate-in fade-in duration-300">
            <rect
              x={545}
              y={190}
              width={240}
              height={76}
              rx="12"
              fill="#F0FDF4"
              stroke="#22C55E"
              strokeWidth="2"
            />
            <text
              x={665}
              y={216}
              fill="#166534"
              fontSize="11"
              fontWeight="800"
              letterSpacing="0.05em"
              textAnchor="middle"
            >
              {language === 'ZH' ? '1 份基准值' : '1 UNIT VALUE'}
            </text>
            <text
              x={665}
              y={246}
              fill="#15803D"
              fontSize="16"
              fontWeight="900"
              textAnchor="middle"
            >
              {language === 'ZH' ? '90 ÷ 3 = 30 张' : '90 ÷ 3 = 30 cards'}
            </text>
          </g>
        )}

        {/* Card 2 (Reversal): Reversal Card (Step 7+) */}
        {transferReversed && (
          <g id="reversal-card" className="animate-in fade-in duration-300">
            <rect
              x={545}
              y={190}
              width={240}
              height={76}
              rx="12"
              fill="#FEFCE8"
              stroke="#EAB308"
              strokeWidth="2"
            />
            <text
              x={665}
              y={216}
              fill="#854D0E"
              fontSize="11"
              fontWeight="800"
              letterSpacing="0.05em"
              textAnchor="middle"
            >
              {language === 'ZH' ? '← 逆向退还 15 张' : '← REVERSE: RETURN 15 CARDS'}
            </text>
            <text
              x={665}
              y={246}
              fill="#B45309"
              fontSize="15"
              fontWeight="900"
              textAnchor="middle"
            >
              {finalAnswer
                ? (language === 'ZH' ? '60 - 15 = 45 张 (最初A)' : '60 - 15 = 45 cards (Original A)')
                : '60 - 15 = ?'}
            </text>
          </g>
        )}
      </g>
    </g>
  );
};
