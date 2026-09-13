import React from 'react';
import { Language, StageId } from '../../types';

interface ReviewVisualRecapProps {
  stageId: StageId;
  language: Language;
}

export const ReviewVisualRecap: React.FC<ReviewVisualRecapProps> = ({ stageId, language }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 space-y-6">
      <div className="text-xs font-bold uppercase tracking-wider text-[#666666] flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#26B7FF]" />
        <span>{language === 'ZH' ? '模型动态复习' : 'Visual Concept Recap'}</span>
      </div>

      {/* Level 1: Build the Quantity */}
      {(stageId === 'level-1-build-quantity' || stageId === 'number-builder') && (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-1.5 p-3 bg-[#F6F6F6] rounded-2xl border border-gray-200 shadow-xs">
            <div className="w-11 h-11 rounded-xl bg-[#26B7FF] text-white flex items-center justify-center font-bold text-sm shadow-xs">1</div>
            <div className="w-11 h-11 rounded-xl bg-[#26B7FF] text-white flex items-center justify-center font-bold text-sm shadow-xs">1</div>
            <div className="w-11 h-11 rounded-xl bg-[#26B7FF] text-white flex items-center justify-center font-bold text-sm shadow-xs">1</div>
            <div className="w-11 h-11 rounded-xl bg-[#FDE700] text-[#333333] flex items-center justify-center font-bold text-sm border-2 border-amber-300 shadow-xs animate-pulse">1</div>
            <div className="w-11 h-11 rounded-xl bg-[#FDE700] text-[#333333] flex items-center justify-center font-bold text-sm border-2 border-amber-300 shadow-xs animate-pulse">1</div>
          </div>
          <div className="text-center space-y-1">
            <span className="text-xs font-extrabold text-[#333333] block">
              {language === 'ZH' ? '整体 = 已知部分 + 新增部分' : 'Whole = Base Units + Added Units'}
            </span>
            <span className="text-[11px] text-[#666666]">
              {language === 'ZH' ? '方块向右生长表示加法，移出表示减法' : 'Blocks grow rightward for (+) and exit for (-)'}
            </span>
          </div>
        </div>
      )}

      {/* Level 2: See the Difference */}
      {(stageId === 'level-2-see-difference' || stageId === 'compare-connect') && (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col gap-2 p-3 bg-[#F6F6F6] rounded-2xl border border-gray-200 shadow-xs w-64">
            <div className="flex items-center gap-1.5">
              <span className="w-5 text-[11px] font-bold text-[#666666]">A</span>
              <div className="w-9 h-9 rounded-lg bg-[#26B7FF]" />
              <div className="w-9 h-9 rounded-lg bg-[#26B7FF]" />
              <div className="w-9 h-9 rounded-lg bg-[#26B7FF]" />
              <div className="w-9 h-9 rounded-lg bg-[#FDE700] border border-amber-300 animate-pulse" />
              <div className="w-9 h-9 rounded-lg bg-[#FDE700] border border-amber-300 animate-pulse" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-5 text-[11px] font-bold text-[#666666]">B</span>
              <div className="w-9 h-9 rounded-lg bg-[#26B7FF]" />
              <div className="w-9 h-9 rounded-lg bg-[#26B7FF]" />
              <div className="w-9 h-9 rounded-lg bg-[#26B7FF]" />
              <div className="w-9 h-9 rounded-lg border border-dashed border-gray-300 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400">-</div>
              <div className="w-9 h-9 rounded-lg border border-dashed border-gray-300 bg-gray-100 flex items-center justify-center text-[10px] text-gray-400">-</div>
            </div>
          </div>
          <div className="text-center space-y-1">
            <span className="text-xs font-extrabold text-[#333333] block">
              {language === 'ZH' ? '基线对齐，多出来的就是差量' : 'Baseline Aligned: Overhang is the Difference'}
            </span>
            <span className="text-[11px] text-[#666666]">
              {language === 'ZH' ? '黄色方块即为 A 比 B 多的部分' : 'Yellow blocks indicate the exact difference'}
            </span>
          </div>
        </div>
      )}

      {/* Level 3: Find the Missing Part */}
      {stageId === 'level-3-find-missing-part' && (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-1.5 p-3 bg-[#F6F6F6] rounded-2xl border border-gray-200 shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-[#26B7FF] text-white flex items-center justify-center text-xs font-bold">1</div>
            <div className="w-9 h-9 rounded-lg bg-[#26B7FF] text-white flex items-center justify-center text-xs font-bold">1</div>
            <div className="w-9 h-9 rounded-lg bg-[#26B7FF] text-white flex items-center justify-center text-xs font-bold">1</div>
            <div className="w-9 h-9 rounded-lg border-2 border-dashed border-amber-400 bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-bold">?</div>
            <div className="w-9 h-9 rounded-lg border-2 border-dashed border-amber-400 bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-bold">?</div>
          </div>
          <div className="text-center space-y-1">
            <span className="text-xs font-extrabold text-[#333333] block">
              {language === 'ZH' ? '未知部分 = 整体 - 已知部分' : 'Missing Part = Whole - Known Part'}
            </span>
            <span className="text-[11px] text-[#666666]">
              {language === 'ZH' ? '扣减已知实心方块，解出虚线问号部分' : 'Subtract known solids to uncover the dashed mystery'}
            </span>
          </div>
        </div>
      )}

      {/* Level 4: Find One Unit */}
      {(stageId === 'level-4-find-one-unit' || stageId === 'find-one-first') && (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-1.5 p-3 bg-[#F6F6F6] rounded-2xl border border-gray-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-[#26B7FF] text-white flex flex-col items-center justify-center font-bold text-xs shadow-xs ring-2 ring-[#26B7FF]/40">
              <span>$5</span>
              <span className="text-[9px] opacity-80">1 unit</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#26B7FF]/80 text-white flex flex-col items-center justify-center font-bold text-xs">
              <span>$5</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#26B7FF]/80 text-white flex flex-col items-center justify-center font-bold text-xs">
              <span>$5</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#26B7FF]/80 text-white flex flex-col items-center justify-center font-bold text-xs">
              <span>$5</span>
            </div>
          </div>
          <div className="text-center space-y-1">
            <span className="text-xs font-extrabold text-[#333333] block">
              {language === 'ZH' ? '总数 ÷ 份数 = 1份的值' : 'Total ÷ Units = Value of 1 Unit'}
            </span>
            <span className="text-[11px] text-[#666666]">
              {language === 'ZH' ? '先求出1份（归一），就能推算任意多份' : 'Find 1 unit first, then scale to any quantity'}
            </span>
          </div>
        </div>
      )}

      {/* Level 5: The Hidden Unit */}
      {(stageId === 'level-5-hidden-unit' || stageId === 'hidden-unit-explorer') && (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col gap-2 p-3 bg-[#F6F6F6] rounded-2xl border border-gray-200 shadow-xs w-64">
            <div className="flex items-center gap-1.5">
              <span className="w-5 text-[11px] font-bold text-[#666666]">3</span>
              <div className="w-10 h-10 rounded-lg bg-[#26B7FF]" />
              <div className="w-10 h-10 rounded-lg bg-[#26B7FF]" />
              <div className="w-10 h-10 rounded-lg bg-[#26B7FF]" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-5 text-[11px] font-bold text-[#666666]">5</span>
              <div className="w-10 h-10 rounded-lg bg-[#26B7FF]" />
              <div className="w-10 h-10 rounded-lg bg-[#26B7FF]" />
              <div className="w-10 h-10 rounded-lg bg-[#26B7FF]" />
              <div className="w-10 h-10 rounded-lg bg-[#FDE700] border border-amber-300 animate-pulse text-xs font-bold flex items-center justify-center">8</div>
              <div className="w-10 h-10 rounded-lg bg-[#FDE700] border border-amber-300 animate-pulse text-xs font-bold flex items-center justify-center">8</div>
            </div>
          </div>
          <div className="text-center space-y-1">
            <span className="text-xs font-extrabold text-[#333333] block">
              {language === 'ZH' ? '数值差 ÷ 份数差 = 隐藏的1份' : 'Value Difference ÷ Unit Difference = 1 Unit'}
            </span>
            <span className="text-[11px] text-[#666666]">
              {language === 'ZH' ? '多出的2份对应16支笔，1份即为8支' : '2 extra units = 16 pens -> 1 unit = 8 pens'}
            </span>
          </div>
        </div>
      )}

      {/* Level 6: Scale Up and Down */}
      {(stageId === 'level-6-scale-up-down' || stageId === 'level-6-same-and-different') && (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col gap-2 p-3 bg-[#F6F6F6] rounded-2xl border border-gray-200 shadow-xs w-72">
            <div className="flex items-center gap-1.5">
              <span className="w-10 text-[10px] font-bold text-[#666666]">1 Batch</span>
              <div className="w-8 h-8 rounded-lg bg-[#26B7FF] text-white flex items-center justify-center text-[10px] font-bold">3</div>
              <span className="text-[10px] text-gray-500 font-medium">12 cookies</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-10 text-[10px] font-bold text-[#666666]">3× Scale</span>
              <div className="w-8 h-8 rounded-lg bg-[#26B7FF] text-white flex items-center justify-center text-[10px] font-bold">3</div>
              <div className="w-8 h-8 rounded-lg bg-[#26B7FF] text-white flex items-center justify-center text-[10px] font-bold">3</div>
              <div className="w-8 h-8 rounded-lg bg-[#26B7FF] text-white flex items-center justify-center text-[10px] font-bold">3</div>
              <span className="text-[10px] text-gray-500 font-medium">36 cookies</span>
            </div>
          </div>
          <div className="text-center space-y-1">
            <span className="text-xs font-extrabold text-[#333333] block">
              {language === 'ZH' ? '基准组倍数缩放' : 'Proportional Batch Scaling'}
            </span>
            <span className="text-[11px] text-[#666666]">
              {language === 'ZH' ? '1份对应12块 -> 放大3倍对应36块 (3×3 = 9杯)' : '1 batch = 12 cookies -> 3× scale = 36 cookies (3×3 = 9 cups)'}
            </span>
          </div>
        </div>
      )}

      {/* Level 7: Cancel the Same Part */}
      {(stageId === 'level-7-cancel-same-part' || stageId === 'relationship-solver') && (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex flex-col gap-2 p-3 bg-[#F6F6F6] rounded-2xl border border-gray-200 shadow-xs w-72">
            <div className="flex items-center gap-1.5">
              <span className="w-4 text-[10px] font-bold text-[#666666]">1</span>
              <div className="w-8 h-8 rounded-lg bg-gray-200 border border-gray-300 opacity-40 line-through text-gray-400 flex items-center justify-center text-[10px] font-bold">A</div>
              <div className="w-8 h-8 rounded-lg bg-gray-200 border border-gray-300 opacity-40 line-through text-gray-400 flex items-center justify-center text-[10px] font-bold">A</div>
              <div className="w-8 h-8 rounded-lg bg-[#26B7FF] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">C</div>
              <div className="w-8 h-8 rounded-lg bg-[#26B7FF] text-white flex items-center justify-center text-[10px] font-bold shadow-xs">C</div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 text-[10px] font-bold text-[#666666]">2</span>
              <div className="w-8 h-8 rounded-lg bg-gray-200 border border-gray-300 opacity-40 line-through text-gray-400 flex items-center justify-center text-[10px] font-bold">A</div>
              <div className="w-8 h-8 rounded-lg bg-gray-200 border border-gray-300 opacity-40 line-through text-gray-400 flex items-center justify-center text-[10px] font-bold">A</div>
              <div className="w-8 h-8 rounded-lg border border-dashed border-gray-300 bg-gray-100" />
              <div className="w-8 h-8 rounded-lg border border-dashed border-gray-300 bg-gray-100" />
            </div>
          </div>
          <div className="text-center space-y-1">
            <span className="text-xs font-extrabold text-[#333333] block">
              {language === 'ZH' ? '消去相同部分 → 解出未知单量' : 'Cancel Matching Items → Solve Unknown'}
            </span>
            <span className="text-[11px] text-[#666666]">
              {language === 'ZH' ? '几何消元法：两式相减，直击核心单价' : 'Eliminate identical terms visually'}
            </span>
          </div>
        </div>
      )}

      {/* Level 8: Rebuild the Whole */}
      {stageId === 'level-8-rebuild-whole' && (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-1.5 p-3 bg-[#F6F6F6] rounded-2xl border border-gray-200 shadow-xs">
            <div className="w-12 h-12 rounded-xl border border-dashed border-gray-400 bg-gray-100 text-gray-400 flex items-center justify-center text-xs font-bold line-through">1/3</div>
            <div className="w-12 h-12 rounded-xl bg-[#26B7FF] text-white flex flex-col items-center justify-center text-xs font-bold shadow-xs">
              <span>$12</span>
              <span className="text-[9px] opacity-75">1/3</span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#26B7FF] text-white flex flex-col items-center justify-center text-xs font-bold shadow-xs">
              <span>$12</span>
              <span className="text-[9px] opacity-75">1/3</span>
            </div>
          </div>
          <div className="text-center space-y-1">
            <span className="text-xs font-extrabold text-[#333333] block">
              {language === 'ZH' ? '余量求单量 → 逆向还原总数' : 'Remainder Unit → Rebuild Original Whole'}
            </span>
            <span className="text-[11px] text-[#666666]">
              {language === 'ZH' ? '已知剩余2/3为$24，求得1份$12，重构最初整体$36' : 'Remaining 2/3 = $24 -> 1 unit = $12 -> Whole = $36'}
            </span>
          </div>
        </div>
      )}

      {/* Level 9: Master Challenge */}
      {stageId === 'level-9-master-challenge' && (
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center gap-2 p-3 bg-[#F6F6F6] rounded-2xl border border-gray-200 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center text-xs font-black shadow-xs">M1</div>
            <span className="text-gray-400 font-black">→</span>
            <div className="w-10 h-10 rounded-xl bg-[#26B7FF] text-white flex items-center justify-center text-xs font-black shadow-xs">M2</div>
            <span className="text-gray-400 font-black">→</span>
            <div className="w-10 h-10 rounded-xl bg-[#FDE700] text-[#333333] flex items-center justify-center text-xs font-black border border-amber-400 shadow-xs">★</div>
          </div>
          <div className="text-center space-y-1">
            <span className="text-xs font-extrabold text-[#333333] block">
              {language === 'ZH' ? '策略诊断选择与多步复合链式推理' : 'Strategic Model Selection & Multi-Step Synthesis'}
            </span>
            <span className="text-[11px] text-[#666666]">
              {language === 'ZH' ? '识别深层结构，组合基础模型，攻克竞赛难题' : 'Diagnose hidden structure to unravel complex problems'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
