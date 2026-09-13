import React from 'react';
import { VisualStep, Language, ModelConfig } from '../../types';

interface ScaleUnitRateModelProps {
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

export const ScaleUnitRateModel: React.FC<ScaleUnitRateModelProps> = ({
  currentStep,
  modelConfig,
  language,
  renderBracket,
}) => {
  const baseCount = modelConfig.baseCount ?? 4;
  const baseValue = modelConfig.baseValue ?? 12;
  const targetCount = modelConfig.targetCount ?? 9;
  const unitVal = Math.round(baseValue / baseCount);
  const targetTotal = targetCount * unitVal;

  const baseUnitLabel = language === 'ZH' ? modelConfig.baseUnitNameZH || '任务' : modelConfig.baseUnitNameEN || 'Levels';
  const targetUnitLabel = language === 'ZH' ? modelConfig.targetUnitNameZH || '星星' : modelConfig.targetUnitNameEN || 'Stars';

  const stepNumber = currentStep.stepNumber ?? 1;

  // Visual layout coordinates
  const CARD_LEFT_X = 60;
  const GIVEN_Y = 65;
  const GIVEN_W = 280;
  const GIVEN_H = 105;

  const UNIT_Y = 225;
  const UNIT_W = 280;
  const UNIT_H = 110;

  const TARGET_X = 400;
  const TARGET_Y = 110;
  const TARGET_BLOCK_W = 43;
  const TARGET_BLOCK_H = 55;
  const TARGET_GAP = 5;

  return (
    <g id="scale-unit-rate-canvas">
      {/* 1. GIVEN RELATIONSHIP CARD (Permanent) */}
      <g id="given-relationship-card" className="transition-all duration-300">
        <rect
          x={CARD_LEFT_X}
          y={GIVEN_Y}
          width={GIVEN_W}
          height={GIVEN_H}
          rx="14"
          fill="#F8FAFC"
          stroke="#CBD5E1"
          strokeWidth="2"
        />
        <text
          x={CARD_LEFT_X + 16}
          y={GIVEN_Y + 24}
          fill="#64748B"
          fontSize="11"
          fontWeight="800"
          letterSpacing="0.05em"
        >
          {language === 'ZH' ? '已知对应关系 (GIVEN)' : 'GIVEN RELATIONSHIP'}
        </text>

        {/* 4 Base Blocks */}
        <g id="given-base-blocks">
          {Array.from({ length: baseCount }).map((_, i) => (
            <rect
              key={`given-unit-${i}`}
              x={CARD_LEFT_X + 16 + i * 36}
              y={GIVEN_Y + 38}
              width={30}
              height={34}
              rx="6"
              fill="#26B7FF"
              stroke="#0284C7"
              strokeWidth="1.5"
            />
          ))}
          <text
            x={CARD_LEFT_X + 16 + (baseCount * 36) / 2}
            y={GIVEN_Y + 92}
            fill="#0369A1"
            fontSize="12"
            fontWeight="700"
            textAnchor="middle"
          >
            {baseCount} {baseUnitLabel}
          </text>
        </g>

        {/* Arrow to stars */}
        <text
          x={CARD_LEFT_X + 175}
          y={GIVEN_Y + 60}
          fill="#64748B"
          fontSize="18"
          fontWeight="900"
          textAnchor="middle"
        >
          →
        </text>

        {/* Total stars tag */}
        <rect
          x={CARD_LEFT_X + 195}
          y={GIVEN_Y + 38}
          width={70}
          height={38}
          rx="8"
          fill="#FEF3C7"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />
        <text
          x={CARD_LEFT_X + 230}
          y={GIVEN_Y + 62}
          fill="#B45309"
          fontSize="14"
          fontWeight="800"
          textAnchor="middle"
        >
          {baseValue} ⭐
        </text>
      </g>

      {/* 2. DIVISION TO 1 UNIT (Revealed step 2+) */}
      {stepNumber >= 2 && (
        <g id="division-arrows" className="transition-all duration-300">
          <line
            x1={CARD_LEFT_X + 140}
            y1={GIVEN_Y + GIVEN_H + 4}
            x2={CARD_LEFT_X + 140}
            y2={UNIT_Y - 8}
            stroke="#94A3B8"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          <polygon
            points={`${CARD_LEFT_X + 140},${UNIT_Y - 3} ${CARD_LEFT_X + 134},${UNIT_Y - 12} ${CARD_LEFT_X + 146},${UNIT_Y - 12}`}
            fill="#94A3B8"
          />
          <rect
            x={CARD_LEFT_X + 105}
            y={GIVEN_Y + GIVEN_H + 14}
            width={70}
            height={24}
            rx="12"
            fill="#FFFFFF"
            stroke="#26B7FF"
            strokeWidth="2"
          />
          <text
            x={CARD_LEFT_X + 140}
            y={GIVEN_Y + GIVEN_H + 30}
            fill="#0284C7"
            fontSize="12"
            fontWeight="800"
            textAnchor="middle"
          >
            ÷ {baseCount}
          </text>
        </g>
      )}

      {/* 3. UNIT RATE CARD (Revealed step 3+) */}
      {stepNumber >= 3 && (
        <g id="unit-rate-card" className="transition-all duration-300">
          <rect
            x={CARD_LEFT_X}
            y={UNIT_Y}
            width={UNIT_W}
            height={UNIT_H}
            rx="14"
            fill="#FEFCE8"
            stroke="#EAB308"
            strokeWidth="2.5"
          />
          <text
            x={CARD_LEFT_X + 16}
            y={UNIT_Y + 24}
            fill="#B45309"
            fontSize="11"
            fontWeight="800"
            letterSpacing="0.05em"
          >
            {language === 'ZH' ? '★ 核心突破口：每份基准率' : '★ KEY UNIT RATE'}
          </text>

          {/* 1 Base Unit Block */}
          <rect
            x={CARD_LEFT_X + 24}
            y={UNIT_Y + 40}
            width={44}
            height={44}
            rx="8"
            fill="#26B7FF"
            stroke="#0284C7"
            strokeWidth="2"
          />
          <text
            x={CARD_LEFT_X + 46}
            y={UNIT_Y + 68}
            fill="#FFFFFF"
            fontSize="15"
            fontWeight="800"
            textAnchor="middle"
          >
            1
          </text>
          <text
            x={CARD_LEFT_X + 46}
            y={UNIT_Y + 100}
            fill="#0369A1"
            fontSize="11"
            fontWeight="700"
            textAnchor="middle"
          >
            1 {baseUnitLabel}
          </text>

          <text
            x={CARD_LEFT_X + 95}
            y={UNIT_Y + 68}
            fill="#64748B"
            fontSize="18"
            fontWeight="900"
            textAnchor="middle"
          >
            =
          </text>

          {/* Stars for 1 unit */}
          <rect
            x={CARD_LEFT_X + 125}
            y={UNIT_Y + 40}
            width={125}
            height={44}
            rx="10"
            fill="#FDE700"
            stroke="#CA8A04"
            strokeWidth="2"
          />
          <text
            x={CARD_LEFT_X + 187}
            y={UNIT_Y + 68}
            fill="#78350F"
            fontSize="15"
            fontWeight="800"
            textAnchor="middle"
          >
            {unitVal} {targetUnitLabel} ⭐
          </text>
        </g>
      )}

      {/* 4. TARGET 9 UNITS EXPANSION (Revealed step 4+) */}
      {stepNumber >= 4 && (
        <g id="target-expansion-group" className="transition-all duration-300">
          {/* Transition arrow from Unit Rate to Target */}
          <line
            x1={CARD_LEFT_X + UNIT_W + 8}
            y1={UNIT_Y + 55}
            x2={TARGET_X - 18}
            y2={UNIT_Y - 20}
            stroke="#26B7FF"
            strokeWidth="2.5"
            strokeDasharray="4 4"
          />
          <polygon
            points={`${TARGET_X - 12},${UNIT_Y - 20} ${TARGET_X - 22},${UNIT_Y - 26} ${TARGET_X - 22},${UNIT_Y - 14}`}
            fill="#26B7FF"
          />
          <rect
            x={CARD_LEFT_X + UNIT_W + 12}
            y={UNIT_Y + 10}
            width={58}
            height={24}
            rx="12"
            fill="#E0F2FE"
            stroke="#0284C7"
            strokeWidth="1.5"
          />
          <text
            x={CARD_LEFT_X + UNIT_W + 41}
            y={UNIT_Y + 26}
            fill="#0369A1"
            fontSize="11"
            fontWeight="800"
            textAnchor="middle"
          >
            × {targetCount}
          </text>

          {/* Target Section Title */}
          <text
            x={TARGET_X}
            y={TARGET_Y - 28}
            fill="#1E293B"
            fontSize="15"
            fontWeight="800"
          >
            {language === 'ZH' ? `目标：${targetCount} 个${baseUnitLabel}` : `Target: ${targetCount} ${baseUnitLabel}`}
          </text>

          {/* 9 Blocks Bar */}
          {Array.from({ length: targetCount }).map((_, i) => {
            const bx = TARGET_X + i * (TARGET_BLOCK_W + TARGET_GAP);
            return (
              <g key={`target-block-${i}`}>
                <rect
                  x={bx}
                  y={TARGET_Y}
                  width={TARGET_BLOCK_W}
                  height={TARGET_BLOCK_H}
                  rx="8"
                  fill="#26B7FF"
                  stroke="#0284C7"
                  strokeWidth="2"
                />
                <text
                  x={bx + TARGET_BLOCK_W / 2}
                  y={TARGET_Y + 34}
                  fill="#FFFFFF"
                  fontSize="15"
                  fontWeight="800"
                  textAnchor="middle"
                >
                  {unitVal}
                </text>
              </g>
            );
          })}

          {/* Top Bracket for 9 Units */}
          {renderBracket(
            TARGET_X,
            TARGET_X + targetCount * (TARGET_BLOCK_W + TARGET_GAP) - TARGET_GAP,
            TARGET_Y - 12,
            language === 'ZH' ? `${targetCount} 份等长单位` : `${targetCount} equal units`,
            'top',
            '#0284C7'
          )}

          {/* Step 5: Bottom Bracket for Final Result */}
          {stepNumber >= 5 && (
            renderBracket(
              TARGET_X,
              TARGET_X + targetCount * (TARGET_BLOCK_W + TARGET_GAP) - TARGET_GAP,
              TARGET_Y + TARGET_BLOCK_H + 16,
              language === 'ZH'
                ? `总数 = ${targetCount} × ${unitVal} = ${targetTotal} 颗星星 ⭐`
                : `Total = ${targetCount} × ${unitVal} = ${targetTotal} Stars ⭐`,
              'bottom',
              '#333333'
            )
          )}
        </g>
      )}
    </g>
  );
};
