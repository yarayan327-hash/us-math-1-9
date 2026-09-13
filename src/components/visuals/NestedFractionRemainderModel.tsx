import React from 'react';
import { VisualStep, Language, ModelConfig } from '../../types';

interface NestedFractionRemainderModelProps {
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

export const NestedFractionRemainderModel: React.FC<NestedFractionRemainderModelProps> = ({
  currentStep,
  language,
  renderBracket,
}) => {
  const stepNumber = currentStep.stepNumber ?? 1;

  // Fixed coordinates across all steps
  const BAR_X = 120;
  const BAR_Y = 150;
  const TOTAL_W = 660;
  const BAR_H = 64;
  const GAP = 8;
  const Q_WIDTH = (TOTAL_W - 3 * GAP) / 4; // 159px each

  const bookSpent = stepNumber >= 2;
  const gameHighlighted = stepNumber === 3;
  const gameSpent = stepNumber >= 4;
  const remainderValueKnown = stepNumber >= 5;
  const unitValueCalculated = stepNumber >= 6;
  const wholeRebuilt = stepNumber >= 7;

  return (
    <g id="nested-fraction-remainder-canvas">
      {/* Title */}
      <text
        x={BAR_X}
        y={BAR_Y - 55}
        fill="#1E293B"
        fontSize="15"
        fontWeight="800"
      >
        {language === 'ZH' ? '两阶段分数模型 · 剩余量分步还原' : 'Nested Remainder Fraction Model'}
      </text>

      {/* 4 Equal Quarter Blocks */}
      {/* Q1: Books (1/4 of total) */}
      <g id="quarter-1-books" className="transition-all duration-300">
        <rect
          x={BAR_X}
          y={BAR_Y}
          width={Q_WIDTH}
          height={BAR_H}
          rx="10"
          fill={wholeRebuilt ? '#26B7FF' : bookSpent ? '#F3F4F6' : '#26B7FF'}
          stroke={wholeRebuilt ? '#0284C7' : bookSpent ? '#94A3B8' : '#0284C7'}
          strokeWidth={wholeRebuilt ? '2.5' : '2'}
          strokeDasharray={wholeRebuilt ? 'none' : bookSpent ? '4 4' : 'none'}
          opacity={bookSpent && !wholeRebuilt ? 0.6 : 1}
        />
        <text
          x={BAR_X + Q_WIDTH / 2}
          y={BAR_Y + BAR_H / 2 + 6}
          fill={wholeRebuilt ? '#FFFFFF' : bookSpent ? '#64748B' : '#FFFFFF'}
          fontSize={wholeRebuilt ? '17' : '13'}
          fontWeight="800"
          textAnchor="middle"
        >
          {wholeRebuilt
            ? '$20'
            : bookSpent
              ? (language === 'ZH' ? '买书 (1/4)' : 'Books (1/4)')
              : '1/4'}
        </text>
      </g>

      {/* Q2: Game (1/3 of remainder) */}
      <g id="quarter-2-game" className="transition-all duration-300">
        <rect
          x={BAR_X + Q_WIDTH + GAP}
          y={BAR_Y}
          width={Q_WIDTH}
          height={BAR_H}
          rx="10"
          fill={wholeRebuilt ? '#26B7FF' : gameSpent ? '#F3F4F6' : gameHighlighted ? '#FEF9C3' : '#26B7FF'}
          stroke={wholeRebuilt ? '#0284C7' : gameSpent ? '#94A3B8' : gameHighlighted ? '#EAB308' : '#0284C7'}
          strokeWidth={gameHighlighted || wholeRebuilt ? '2.5' : '2'}
          strokeDasharray={wholeRebuilt ? 'none' : gameSpent ? '4 4' : 'none'}
          opacity={gameSpent && !wholeRebuilt ? 0.6 : 1}
        />
        <text
          x={BAR_X + Q_WIDTH + GAP + Q_WIDTH / 2}
          y={BAR_Y + BAR_H / 2 + 6}
          fill={wholeRebuilt ? '#FFFFFF' : gameSpent ? '#64748B' : gameHighlighted ? '#854D0E' : '#FFFFFF'}
          fontSize={wholeRebuilt ? '17' : '13'}
          fontWeight="800"
          textAnchor="middle"
        >
          {wholeRebuilt
            ? '$20'
            : gameSpent
              ? (language === 'ZH' ? '游戏 (余下1/3)' : 'Game (1/3 rem)')
              : gameHighlighted
                ? (language === 'ZH' ? '余下3份之1' : '1/3 of remainder')
                : '1/4'}
        </text>
      </g>

      {/* Q3: Leftover block 1 */}
      <g id="quarter-3-left" className="transition-all duration-300">
        <rect
          x={BAR_X + 2 * (Q_WIDTH + GAP)}
          y={BAR_Y}
          width={Q_WIDTH}
          height={BAR_H}
          rx="10"
          fill={wholeRebuilt || remainderValueKnown ? '#26B7FF' : '#26B7FF'}
          stroke="#0284C7"
          strokeWidth="2"
        />
        <text
          x={BAR_X + 2 * (Q_WIDTH + GAP) + Q_WIDTH / 2}
          y={BAR_Y + BAR_H / 2 + 6}
          fill="#FFFFFF"
          fontSize={unitValueCalculated || wholeRebuilt ? '17' : '13'}
          fontWeight="800"
          textAnchor="middle"
        >
          {unitValueCalculated || wholeRebuilt ? '$20' : '1/4'}
        </text>
      </g>

      {/* Q4: Leftover block 2 */}
      <g id="quarter-4-left" className="transition-all duration-300">
        <rect
          x={BAR_X + 3 * (Q_WIDTH + GAP)}
          y={BAR_Y}
          width={Q_WIDTH}
          height={BAR_H}
          rx="10"
          fill={wholeRebuilt || remainderValueKnown ? '#26B7FF' : '#26B7FF'}
          stroke="#0284C7"
          strokeWidth="2"
        />
        <text
          x={BAR_X + 3 * (Q_WIDTH + GAP) + Q_WIDTH / 2}
          y={BAR_Y + BAR_H / 2 + 6}
          fill="#FFFFFF"
          fontSize={unitValueCalculated || wholeRebuilt ? '17' : '13'}
          fontWeight="800"
          textAnchor="middle"
        >
          {unitValueCalculated || wholeRebuilt ? '$20' : '1/4'}
        </text>
      </g>

      {/* BRACKETS */}
      {/* Step 1: Bottom bracket for unknown original */}
      {stepNumber === 1 && (
        renderBracket(
          BAR_X,
          BAR_X + TOTAL_W,
          BAR_Y + BAR_H + 16,
          language === 'ZH' ? '原有零用钱总额 (4 等份) = ?' : 'Original Money (4 equal quarters) = ?',
          'bottom',
          '#333333'
        )
      )}

      {/* Step 2 & 3: Top bracket over Q2, Q3, Q4 (Remaining 3 parts) */}
      {(stepNumber === 2 || stepNumber === 3) && (
        renderBracket(
          BAR_X + Q_WIDTH + GAP,
          BAR_X + TOTAL_W,
          BAR_Y - 14,
          language === 'ZH'
            ? '买书后剩余的钱：恰好包含 3 个等长部分 (原总数的 3/4)'
            : 'Remaining money: exactly 3 equal parts (3/4 of original)',
          'top',
          '#0284C7'
        )
      )}

      {/* Step 5: Bottom bracket under Q3 and Q4 ($40 left) */}
      {stepNumber === 5 && (
        renderBracket(
          BAR_X + 2 * (Q_WIDTH + GAP),
          BAR_X + TOTAL_W,
          BAR_Y + BAR_H + 16,
          language === 'ZH' ? '最后剩余 2 份 = $40' : '2 remaining quarters = $40',
          'bottom',
          '#0284C7'
        )
      )}

      {/* Step 6: Top bracket showing 1 unit rate ($40 / 2 = $20) */}
      {stepNumber === 6 && (
        renderBracket(
          BAR_X + 2 * (Q_WIDTH + GAP),
          BAR_X + 3 * (Q_WIDTH + GAP) - GAP,
          BAR_Y - 14,
          language === 'ZH' ? '每 1 份 = $40 ÷ 2 = $20' : '1 quarter = $40 ÷ 2 = $20',
          'top',
          '#0284C7'
        )
      )}

      {/* Step 7: Bottom bracket across all 4 units (Rebuilt whole = 4 * 20 = $80) */}
      {wholeRebuilt && (
        renderBracket(
          BAR_X,
          BAR_X + TOTAL_W,
          BAR_Y + BAR_H + 16,
          language === 'ZH'
            ? 'Sophia 原有总钱数 = 4 × $20 = $80！'
            : 'Sophia’s original money = 4 × $20 = $80!',
          'bottom',
          '#0284C7'
        )
      )}
    </g>
  );
};
