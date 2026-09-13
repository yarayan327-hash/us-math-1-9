import { StageId } from '../types';

export interface StageReviewData {
  stageId: StageId;
  coreIdeasEN: string[];
  coreIdeasZH: string[];
  retrievalQuestions: {
    id: number;
    promptEN: string;
    promptZH: string;
    type: 'choice' | 'missing_number' | 'tap_relation';
    options: {
      labelEN: string;
      labelZH: string;
      isCorrect: boolean;
    }[];
  }[];
  visualRecap: {
    type: string;
    labelEN: string;
    labelZH: string;
  };
  skillReport: {
    skillsEN: string[];
    skillsZH: string[];
    gradeBand: string;
  };
}

export const STAGE_REVIEWS: Record<StageId, StageReviewData> = {
  // LEVEL 1: BUILD THE QUANTITY
  'level-1-build-quantity': {
    stageId: 'level-1-build-quantity',
    coreIdeasEN: [
      '1. Numbers can be constructed from equal unit blocks.',
      '2. Adding extends the row to the right (+).',
      '3. Subtracting takes away units from the whole (-).',
      '4. The whole is equal to all of its parts combined.'
    ],
    coreIdeasZH: [
      '1. 任何数字都可以用相同大小的单位方块构建。',
      '2. 加法让方块条向右生长延伸 (+)。',
      '3. 减法是从整体中移走一部分方块 (-)。',
      '4. 整体等于所有组成部分的合集。'
    ],
    retrievalQuestions: [
      {
        id: 1,
        promptEN: 'When we add items to a quantity, what happens to the visual bar?',
        promptZH: '当我们给一个数量增加物品时，方块条在视觉上发生了什么？',
        type: 'choice',
        options: [
          { labelEN: 'New units join on the right, making it longer', labelZH: '新方块接在右侧，让方块条变长', isCorrect: true },
          { labelEN: 'Units disappear from the left', labelZH: '左侧的方块消失了', isCorrect: false }
        ]
      },
      {
        id: 2,
        promptEN: 'If a whole row has 9 blocks and 3 are taken away, how many remain?',
        promptZH: '如果一条方块条原本有9块，拿走了3块，还剩下几块？',
        type: 'missing_number',
        options: [
          { labelEN: '6 blocks (9 - 3 = 6)', labelZH: '6块 (9 - 3 = 6)', isCorrect: true },
          { labelEN: '12 blocks (9 + 3 = 12)', labelZH: '12块 (9 + 3 = 12)', isCorrect: false }
        ]
      }
    ],
    visualRecap: {
      type: 'level_1',
      labelEN: '5 Base Units + 4 Added Units = 9 Total',
      labelZH: '5个基础单位 + 4个新增单位 = 整体9'
    },
    skillReport: {
      skillsEN: ['Build numbers from parts', 'Visualize addition as rightward growth', 'Visualize subtraction as physical removal'],
      skillsZH: ['从部分构建数量实体', '直观展现加法向右生长', '直观展现减法物理移出'],
      gradeBand: 'Grades 1–2'
    }
  },

  // LEVEL 2: SEE THE DIFFERENCE
  'level-2-see-difference': {
    stageId: 'level-2-see-difference',
    coreIdeasEN: [
      '1. Always align quantities against the same starting baseline.',
      '2. The overlapping part is the shared equal amount.',
      '3. The overhang is the exact difference (“more” or “fewer”).',
      '4. Difference = Longer Bar - Shorter Bar.'
    ],
    coreIdeasZH: [
      '1. 永远把两个数量对齐在同一条起点基准线上。',
      '2. 重叠的部分是双方完全相同的公共量。',
      '3. 突出的部分就是精确的差量（“多多少”或“少多少”）。',
      '4. 差量 = 较长的一条 - 较短的一条。'
    ],
    retrievalQuestions: [
      {
        id: 1,
        promptEN: 'What does the dotted vertical alignment line show us in a comparison?',
        promptZH: '在上下对比图中，虚线垂直对齐线向我们展示了什么？',
        type: 'choice',
        options: [
          { labelEN: 'The boundary where both quantities are identical', labelZH: '两行数量完全相同的分界线', isCorrect: true },
          { labelEN: 'The end of the longer row', labelZH: '较长一行的末尾', isCorrect: false }
        ]
      },
      {
        id: 2,
        promptEN: 'Ava has 7 cards and Ben has 10 cards. What is the difference?',
        promptZH: 'Ava有7张卡片，Ben有10张卡片。两人的差量是多少？',
        type: 'missing_number',
        options: [
          { labelEN: '3 cards (10 - 7 = 3)', labelZH: '3张 (10 - 7 = 3)', isCorrect: true },
          { labelEN: '17 cards (10 + 7 = 17)', labelZH: '17张 (10 + 7 = 17)', isCorrect: false }
        ]
      }
    ],
    visualRecap: {
      type: 'level_2',
      labelEN: 'Row A (7) vs Row B (7 + 3) -> Difference is 3',
      labelZH: '行A(7) 对比 行B(7+3) -> 差量为3'
    },
    skillReport: {
      skillsEN: ['Align rows on a shared baseline', 'Identify identical common parts', 'Read differences directly without guessing'],
      skillsZH: ['基线严格对齐', '辨识相同的公共基准', '直观读取差量而非猜测'],
      gradeBand: 'Grades 1–3'
    }
  },

  // LEVEL 3: FIND THE MISSING PART
  'level-3-find-missing-part': {
    stageId: 'level-3-find-missing-part',
    coreIdeasEN: [
      '1. WHOLE = KNOWN PART + UNKNOWN PART.',
      '2. When looking for a missing piece, subtract the known part from the whole.',
      '3. Outlined blocks with “?” keep the missing quantity visible.',
      '4. Partition is different from comparison: it breaks ONE whole into components.'
    ],
    coreIdeasZH: [
      '1. 整体 = 已知部分 + 未知部分。',
      '2. 当寻找隐藏缺失的部分时，用整体减去已知部分。',
      '3. 用带“?”的空心方块标出未知量，保持目标清晰。',
      '4. 拆分不同于对比：拆分是把同一个整体分成若干块。'
    ],
    retrievalQuestions: [
      {
        id: 1,
        promptEN: 'There are 15 cookies in total. 9 are chocolate. How do we find the vanilla cookies?',
        promptZH: '一共有15块饼干，其中9块是巧克力。如何求香草饼干的数量？',
        type: 'choice',
        options: [
          { labelEN: 'Whole - Known Part: 15 - 9 = 6', labelZH: '整体 - 已知部分: 15 - 9 = 6', isCorrect: true },
          { labelEN: 'Whole + Known Part: 15 + 9 = 24', labelZH: '整体 + 已知部分: 15 + 9 = 24', isCorrect: false }
        ]
      }
    ],
    visualRecap: {
      type: 'level_3',
      labelEN: 'Whole: 15 = 9 Solid + 6 Missing (?)',
      labelZH: '整体: 15 = 9实心 + 6缺失(?)'
    },
    skillReport: {
      skillsEN: ['Decompose totals into components', 'Isolate unknown parts', 'Verify with addition check'],
      skillsZH: ['整体拆解为组成部分', '分离未知部分', '利用加法逆运算验算'],
      gradeBand: 'Grades 2–4'
    }
  },

  // LEVEL 4: FIND ONE UNIT
  'level-4-find-one-unit': {
    stageId: 'level-4-find-one-unit',
    coreIdeasEN: [
      '1. If multiple units are equal, Total ÷ Number of Units = Value of ONE Unit.',
      '2. Isolate 1 block to see its independent worth.',
      '3. Once 1 unit is known, scale it to find any target number of units.',
      '4. The 3-Step Rhythm: Many Units → 1 Unit → Target Units.'
    ],
    coreIdeasZH: [
      '1. 若多个单位等长，总值 ÷ 份数 = 1份的基准价值。',
      '2. 单独隔离出1个方块，看清单价。',
      '3. 掌握1份后，自由乘法缩放以求得任意目标份数。',
      '4. 经典三步韵律：多份总和 → 独立1份 → 目标多份。'
    ],
    retrievalQuestions: [
      {
        id: 1,
        promptEN: '4 identical notebooks cost $20. What is the value of ONE notebook?',
        promptZH: '4本相同的笔记本一共20美元。1本笔记本是多少美元？',
        type: 'choice',
        options: [
          { labelEN: '$20 ÷ 4 = $5', labelZH: '20 ÷ 4 = 5美元', isCorrect: true },
          { labelEN: '$20 × 4 = $80', labelZH: '20 × 4 = 80美元', isCorrect: false }
        ]
      }
    ],
    visualRecap: {
      type: 'level_4',
      labelEN: '4 units ($20) -> 1 unit ($5) -> 7 units ($35)',
      labelZH: '4份(20美元) -> 1份(5美元) -> 7份(35美元)'
    },
    skillReport: {
      skillsEN: ['Isolate unit values', 'Apply the unitary method', 'Scale quantities proportionally'],
      skillsZH: ['求出基准单量', '运用归一法破局', '按比例自由缩放'],
      gradeBand: 'Grades 3–5'
    }
  },

  // LEVEL 5: THE HIDDEN UNIT
  'level-5-hidden-unit': {
    stageId: 'level-5-hidden-unit',
    coreIdeasEN: [
      '1. Ratio numbers (e.g. 3 : 5) indicate unit blocks, not literal counts.',
      '2. Extra units in the drawing hold the value of the difference.',
      '3. Difference in Value ÷ Difference in Units = Value of 1 Hidden Unit.',
      '4. Multiply 1 unit by the total units to find the grand total.'
    ],
    coreIdeasZH: [
      '1. 比例数字（如 3 : 5）代表份数方块，并非实际数量。',
      '2. 画图中突出的多余方块，正好承载着具体的差量数值。',
      '3. 数值差 ÷ 份数差 = 隐藏的1份真实价值。',
      '4. 用1份的价值乘以总份数，求得全部总和。'
    ],
    retrievalQuestions: [
      {
        id: 1,
        promptEN: 'In a 3 : 5 ratio, the second row has 2 extra units. If the second has 16 more items, what is 1 unit?',
        promptZH: '在 3 : 5 的比例中，第二行多了2份。如果第二行多16个物品，1份是多少？',
        type: 'choice',
        options: [
          { labelEN: '16 ÷ 2 = 8', labelZH: '16 ÷ 2 = 8', isCorrect: true },
          { labelEN: '16 ÷ 5 = 3.2', labelZH: '16 ÷ 5 = 3.2', isCorrect: false }
        ]
      }
    ],
    visualRecap: {
      type: 'level_5',
      labelEN: '2 Extra Units = 16 -> 1 Unit = 8 -> 8 Total Units = 64',
      labelZH: '多出2份 = 16 -> 1份 = 8 -> 8份总数 = 64'
    },
    skillReport: {
      skillsEN: ['Translate ratios to visual blocks', 'Map differences to unit gaps', 'Unlock hidden variables in word problems'],
      skillsZH: ['将比例转化为方块', '将实际差量映射为份数差', '解锁应用题中的隐藏变量'],
      gradeBand: 'Grades 4–6'
    }
  },

  // LEVEL 6: SCALE UP AND DOWN
  'level-6-scale-up-down': {
    stageId: 'level-6-scale-up-down',
    coreIdeasEN: [
      '1. A base group represents a fixed ratio bundle (e.g., 3 flour : 2 sugar).',
      '2. Scale factor = Target Total ÷ Base Total (e.g., 36 ÷ 12 = 3 batches).',
      '3. Multiply every component in the group by the same scale factor.',
      '4. Or scale down to 1 unit first (divide), then scale up to the target (multiply).'
    ],
    coreIdeasZH: [
      '1. 基准组代表一个固定的比例组合（如3份面粉 : 2份糖）。',
      '2. 缩放倍数 = 目标数量 ÷ 基础数量（如 36 ÷ 12 = 3 倍）。',
      '3. 把组合里的每一个部分同时乘以这个相同的倍数。',
      '4. 或者先“向下缩减”求出1份（除法），再“向上放大”求出目标（乘法）。'
    ],
    retrievalQuestions: [
      {
        id: 1,
        promptEN: 'If 1 recipe batch makes 12 cookies with 3 cups of flour, how many cups of flour for 36 cookies?',
        promptZH: '如果1份配方用3杯面粉能烤12块饼干，那么烤36块饼干需要多少杯面粉？',
        type: 'choice',
        options: [
          { labelEN: '9 cups (3 batches × 3 cups = 9)', labelZH: '9 杯 (扩大3倍: 3 × 3 = 9)', isCorrect: true },
          { labelEN: '6 cups', labelZH: '6 杯', isCorrect: false },
          { labelEN: '12 cups', labelZH: '12 杯', isCorrect: false }
        ]
      }
    ],
    visualRecap: {
      type: 'level_6',
      labelEN: '1 Batch (3 units) scaled up 3× -> 3 Batches (9 units)',
      labelZH: '1份基础配方(3单位) 扩大3倍 -> 3份配方(9单位)'
    },
    skillReport: {
      skillsEN: ['Proportional batch scaling', 'Identify scale factors', 'Scale down to unit rate then scale up'],
      skillsZH: ['配方成倍缩放建模', '计算比例缩放系数', '双向缩放：先归一再倍乘'],
      gradeBand: 'Grades 4–6'
    }
  },
  'level-6-same-and-different': {
    stageId: 'level-6-scale-up-down',
    coreIdeasEN: [
      '1. A base group represents a fixed ratio bundle (e.g., 3 flour : 2 sugar).',
      '2. Scale factor = Target Total ÷ Base Total (e.g., 36 ÷ 12 = 3 batches).',
      '3. Multiply every component in the group by the same scale factor.',
      '4. Or scale down to 1 unit first (divide), then scale up to the target (multiply).'
    ],
    coreIdeasZH: [
      '1. 基准组代表一个固定的比例组合（如3份面粉 : 2份糖）。',
      '2. 缩放倍数 = 目标数量 ÷ 基础数量（如 36 ÷ 12 = 3 倍）。',
      '3. 把组合里的每一个部分同时乘以这个相同的倍数。',
      '4. 或者先“向下缩减”求出1份（除法），再“向上放大”求出目标（乘法）。'
    ],
    retrievalQuestions: [
      {
        id: 1,
        promptEN: 'If 1 recipe batch makes 12 cookies with 3 cups of flour, how many cups of flour for 36 cookies?',
        promptZH: '如果1份配方用3杯面粉能烤12块饼干，那么烤36块饼干需要多少杯面粉？',
        type: 'choice',
        options: [
          { labelEN: '9 cups (3 batches × 3 cups = 9)', labelZH: '9 杯 (扩大3倍: 3 × 3 = 9)', isCorrect: true },
          { labelEN: '6 cups', labelZH: '6 杯', isCorrect: false }
        ]
      }
    ],
    visualRecap: {
      type: 'level_6',
      labelEN: '1 Batch (3 units) scaled up 3× -> 3 Batches (9 units)',
      labelZH: '1份基础配方(3单位) 扩大3倍 -> 3份配方(9单位)'
    },
    skillReport: {
      skillsEN: ['Proportional batch scaling', 'Identify scale factors', 'Scale down to unit rate then scale up'],
      skillsZH: ['配方成倍缩放建模', '计算比例缩放系数', '双向缩放：先归一再倍乘'],
      gradeBand: 'Grades 4–6'
    }
  },

  // LEVEL 7: CANCEL THE SAME PART
  'level-7-cancel-same-part': {
    stageId: 'level-7-cancel-same-part',
    coreIdeasEN: [
      '1. When two receipts share identical items, cancel the matching items from both.',
      '2. The cost difference equals the price of the remaining un-canceled items.',
      '3. Cost Difference ÷ Remaining Item Count = Price of 1 Item.',
      '4. Substitute that price back into either receipt to find the other item.'
    ],
    coreIdeasZH: [
      '1. 当两张账单包含相同的物品时，从两边同时消去共有项。',
      '2. 总价之差等于剩下未被消去物品的金额。',
      '3. 价格差 ÷ 剩余物品数量 = 1件物品的单价。',
      '4. 回代到任意一张账单中，即可求出另一种物品的单价。'
    ],
    retrievalQuestions: [
      {
        id: 1,
        promptEN: '2 Adult + 3 Child = $72, and 2 Adult + 1 Child = $48. What is left after canceling?',
        promptZH: '2成人+3儿童=72美元，2成人+1儿童=48美元。消去相同部分后剩下什么？',
        type: 'choice',
        options: [
          { labelEN: '2 Child tickets = $72 - $48 = $24', labelZH: '2张儿童票 = 72 - 48 = 24美元', isCorrect: true },
          { labelEN: '1 Adult ticket', labelZH: '1张成人票', isCorrect: false }
        ]
      }
    ],
    visualRecap: {
      type: 'level_7',
      labelEN: '2 Adult canceled -> 2 Child = $24 -> 1 Child = $12',
      labelZH: '消去2成人 -> 2儿童 = 24美元 -> 1儿童 = 12美元'
    },
    skillReport: {
      skillsEN: ['Visual linear system cancellation', 'Isolate single unknown variables', 'Substitute back to complete systems'],
      skillsZH: ['几何消元法求解方程组', '分离单一未知量', '回代解出全部多元未知数'],
      gradeBand: 'Grades 5–8'
    }
  },

  // LEVEL 8: REBUILD THE WHOLE
  'level-8-rebuild-whole': {
    stageId: 'level-8-rebuild-whole',
    coreIdeasEN: [
      '1. Fraction remaining = 1 - Fraction spent.',
      '2. Match the remaining actual value to the remaining fraction units.',
      '3. Remaining Value ÷ Remaining Units = Value of 1 Unit.',
      '4. Reconstruct the original whole: Total Units × Value of 1 Unit.'
    ],
    coreIdeasZH: [
      '1. 剩余分数 = 1 - 花去的分数。',
      '2. 将实际剩余的数值与剩余的分数份数精准对应。',
      '3. 剩余数值 ÷ 剩余份数 = 1份的真实价值。',
      '4. 逆向重构最初整体：总份数 × 1份的价值。'
    ],
    retrievalQuestions: [
      {
        id: 1,
        promptEN: 'Leo spends 1/3 of his money and has $24 left. How many units does $24 represent?',
        promptZH: 'Leo花掉了 1/3 的钱，还剩24美元。这24美元代表几份？',
        type: 'choice',
        options: [
          { labelEN: '2 units (3 - 1 = 2)', labelZH: '2 份 (3 - 1 = 2)', isCorrect: true },
          { labelEN: '1 unit', labelZH: '1 份', isCorrect: false }
        ]
      }
    ],
    visualRecap: {
      type: 'level_8',
      labelEN: 'Spent 1/3 -> 2/3 remains = $24 -> 1/3 = $12 -> Whole = $36',
      labelZH: '花去1/3 -> 剩余2/3 = 24美元 -> 1份 = 12美元 -> 最初整体 = 36美元'
    },
    skillReport: {
      skillsEN: ['Reverse fraction operations', 'Rebuild whole from partial remainder', 'Execute multi-step backward deduction'],
      skillsZH: ['逆向分数推理', '从部分余量重构总体', '执行多步严格倒推演绎'],
      gradeBand: 'Grades 6–8'
    }
  },

  // LEVEL 9: MASTER CHALLENGE
  'level-9-master-challenge': {
    stageId: 'level-9-master-challenge',
    coreIdeasEN: [
      '1. Strategy Selection: Read the problem and diagnose its hidden geometric structure.',
      '2. Complex problems are chains of simpler visual models connected together.',
      '3. Use Invariance (Sum, Difference) to anchor multi-step transitions.',
      '4. When all unit blocks align, the solution is undeniable.'
    ],
    coreIdeasZH: [
      '1. 策略选择：先读清题意，诊断其隐藏的几何思维模型。',
      '2. 复杂的压轴题是由若干基础视觉模型环环相扣组成的思维链。',
      '3. 善用守恒律（和守恒、差守恒）作为多步推演的锚点。',
      '4. 当所有单位方块严丝合缝对齐时，解法必定真实无误。'
    ],
    retrievalQuestions: [
      {
        id: 1,
        promptEN: 'What is the secret to solving competition-level word problems?',
        promptZH: '解决竞赛级高难度文字题的最高秘诀是什么？',
        type: 'choice',
        options: [
          { labelEN: 'Break them down into simpler visual models connected together', labelZH: '把难题拆解为前后相连的基础视觉模型组合', isCorrect: true },
          { labelEN: 'Memorize endless formulas without understanding', labelZH: '死记硬背无数不理解的公式', isCorrect: false }
        ]
      }
    ],
    visualRecap: {
      type: 'level_9',
      labelEN: 'Diagnose Structure -> Deploy Visual Model -> Step-by-Step Mastery',
      labelZH: '诊断题型结构 -> 呼叫视觉模型 -> 步步精准通关'
    },
    skillReport: {
      skillsEN: ['Meta-strategy model diagnosis', 'Multi-step visual chain synthesis', 'Competition-level problem decomposition'],
      skillsZH: ['元策略建模诊断选择', '多步几何推演链综合运用', '竞赛压轴难题模块化拆解'],
      gradeBand: 'Grades 7–9'
    }
  },

  // Aliases for backward compatibility
  'number-builder': {
    stageId: 'number-builder',
    coreIdeasEN: ['1. Numbers can be built from equal unit blocks.'],
    coreIdeasZH: ['1. 任何数字都可以用相同大小的单位方块构建。'],
    retrievalQuestions: [],
    visualRecap: { type: 'level_1', labelEN: 'Build Quantity', labelZH: '数量构建' },
    skillReport: { skillsEN: ['Build numbers'], skillsZH: ['数量构建'], gradeBand: 'Grades 1–2' }
  },
  'compare-connect': {
    stageId: 'compare-connect',
    coreIdeasEN: ['1. Align baseline to see differences.'],
    coreIdeasZH: ['1. 基线对齐看清差量。'],
    retrievalQuestions: [],
    visualRecap: { type: 'level_2', labelEN: 'See Difference', labelZH: '差量对比' },
    skillReport: { skillsEN: ['Compare rows'], skillsZH: ['对比分析'], gradeBand: 'Grades 1–3' }
  },
  'find-one-first': {
    stageId: 'find-one-first',
    coreIdeasEN: ['1. Find one unit first.'],
    coreIdeasZH: ['1. 先求出1个单位。'],
    retrievalQuestions: [],
    visualRecap: { type: 'level_4', labelEN: 'Unit Scale', labelZH: '归一缩放' },
    skillReport: { skillsEN: ['Find 1 unit'], skillsZH: ['归一法'], gradeBand: 'Grades 3–5' }
  },
  'hidden-unit-explorer': {
    stageId: 'hidden-unit-explorer',
    coreIdeasEN: ['1. Difference reveals the hidden unit.'],
    coreIdeasZH: ['1. 差量揭示隐藏单位。'],
    retrievalQuestions: [],
    visualRecap: { type: 'level_5', labelEN: 'Hidden Unit', labelZH: '隐藏单位' },
    skillReport: { skillsEN: ['Unlock hidden units'], skillsZH: ['隐藏单位'], gradeBand: 'Grades 4–6' }
  },
  'relationship-solver': {
    stageId: 'relationship-solver',
    coreIdeasEN: ['1. Cancel matching parts.'],
    coreIdeasZH: ['1. 消去相同部分。'],
    retrievalQuestions: [],
    visualRecap: { type: 'level_7', labelEN: 'Elimination', labelZH: '图形消元' },
    skillReport: { skillsEN: ['Cancel same part'], skillsZH: ['消元术'], gradeBand: 'Grades 5–8' }
  }
};

export function getStageReview(stageId: StageId): StageReviewData {
  return STAGE_REVIEWS[stageId] || STAGE_REVIEWS['level-1-build-quantity'];
}
