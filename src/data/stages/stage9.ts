import { CourseStage } from '../../types';

export const stage9: CourseStage = {
  id: 'level-9-master-challenge',
  levelNumber: 9,
  titleEN: 'Level 9 — Master Challenge',
  titleZH: '第9阶 — 综合建模大师',
  approxGradeBand: 'Grades 7–9',
  superpowerEN: 'I can choose the right visual model to solve complex multi-step problems.',
  superpowerZH: '我能一眼识破题型本质，挑选最适合的视觉模型破解高难度复合应用题。',
  endOfLevelInsightEN: 'Hard problems are not made of new math. They are made of simpler models connected together.',
  endOfLevelInsightZH: '难题并没有高深莫测的新数学。所有难题都只是若干简单基础模型的有机组合。',
  unlockedBadgeEN: 'Visual Math Grandmaster',
  unlockedBadgeZH: '可视化数学大宗师',
  unlockedLineEN: 'You have mastered all 8 visual thinking models and can dissect any complex problem into clear visual steps.',
  unlockedLineZH: '你已通关全部8种视觉几何思维模型，拥有把任何奥数复合应用题拆解为清晰视觉步骤的能力。',
  conceptIntroEN: 'You now possess all the visual superpowers! At this master tier, the challenge is not just solving—it is choosing the right model. When faced with a complex competition problem, identify its hidden structure, deploy the matching model, and watch the complexity collapse!',
  conceptIntroZH: '你现在已经集齐了全部的视觉数学超能力！在这一大师阶，挑战不仅是计算，更在于“建模策略的选择”。面对复杂的竞赛压轴题，先诊断其隐藏结构，呼叫对应的几何模型，难题便会迎刃而解！',
  summaryEN: [
    'Strategy Diagnosis: Read the words, identify the hidden relation (Ratio, Cancellation, or Remainder).',
    'Hard problems are chains of simpler models connected sequentially.',
    'Model Selection: Ratio -> Hidden Unit; Two Receipts -> Cancellation; Fractions -> Remainder Whole.',
    'Verify visually: When all unit blocks lock into place, the solution is undeniable.'
  ],
  summaryZH: [
    '策略诊断：先读题意，辨识隐藏关系是比例差、消元还是余量倒推。',
    '难题不过是简单基础模型的一环扣一环。',
    '模型匹配：遇到比例 -> 隐藏单位法；遇到双账单 -> 消元法；遇到分数 -> 逆向重构。',
    '几何验算：当所有方块严丝合缝对齐时，解法必定真实无误。'
  ],
  activities: [
    {
      id: 's9-challenge',
      stageId: 'level-9-master-challenge',
      type: 'concept_intro',
      titleEN: 'Master Strategy: Craft Beads & Bracelets',
      titleZH: '大师策略选择：手链串珠比例与瓶颈短板',
      questionEN: 'A craft kit has yellow beads and blue beads in the ratio 4 : 7. There are 24 more blue beads than yellow beads. If each friendship bracelet requires 1 yellow bead and 1 blue bead, how many complete bracelets can be assembled with the beads in the kit?',
      questionZH: '一套手作盒里装有黄色珠子与蓝色珠子，数量比是 4 : 7。蓝色珠子比黄色珠子整整多出24颗。如果每条友谊手链都需要1颗黄珠和1颗蓝珠组装，那么盒里的珠子最多能串出多少条完整手链？',
      maxUnits: 11,
      modelType: 'ratio_rows',
      modelConfig: {
        row1LabelEN: 'Yellow (4 units)',
        row1LabelZH: '黄珠 (4份)',
        row2LabelEN: 'Blue (7 units)',
        row2LabelZH: '蓝珠 (7份)',
        totalUnitsRow1: 4,
        totalUnitsRow2: 7,
        differenceUnits: 3,
        row1Color: '#FDE700',
        row2Color: '#26B7FF',
        unitNameEN: 'bead',
        unitNameZH: '颗珠子'
      },
      strategyOptions: [
        {
          id: 'ratio-model',
          labelEN: 'Hidden Unit Ratio Model (Difference = 3 units = 24 beads)',
          labelZH: '隐藏单位比例模型 (差量3份 = 24颗珠子)',
          isCorrect: true,
          explanationEN: 'Correct! The ratio gives unit blocks, and the difference of 24 unlocks the value of 1 unit.',
          explanationZH: '完全正确！比例提供等量方块，差量24正好解锁1份的独立数值。'
        },
        {
          id: 'elimination-model',
          labelEN: 'System Elimination Model',
          labelZH: '二元消元模型',
          isCorrect: false,
          explanationEN: 'There are not two separate receipts here with mixed packages.',
          explanationZH: '这里并没有两张包含不同物品组合的账单。'
        },
        {
          id: 'single-row',
          labelEN: 'Single-Row Addition Model',
          labelZH: '单行简单加法模型',
          isCorrect: false,
          explanationEN: 'A single addition row cannot capture the 4:7 ratio relationship.',
          explanationZH: '单行简单加法无法刻画4:7的倍比结构。'
        }
      ],
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Draw the ratio blocks: Yellow beads have 4 units and Blue beads have 7 units. No numbers yet!',
          instructionZH: '画出比例方块：黄珠4份，蓝珠7份。暂时不写具体数量！',
          row1Units: 4,
          row2Units: 7,
          highlightDifference: false,
          statusNoteEN: 'Yellow: 4 units | Blue: 7 units',
          statusNoteZH: '黄珠: 4份 | 蓝珠: 7份'
        },
        {
          stepNumber: 2,
          instructionEN: 'Align both rows to see the unit difference: Blue has 7 - 4 = 3 extra units beyond Yellow.',
          instructionZH: '上下对齐看清份数差：蓝珠比黄珠多出 7 - 4 = 3 份。',
          row1Units: 4,
          row2Units: 7,
          highlightDifference: true,
          bracketLabelEN: 'Difference: 7 - 4 = 3 units',
          bracketLabelZH: '差量: 7 - 4 = 3 份',
          statusNoteEN: 'Difference = 3 units',
          statusNoteZH: '差量 = 3个单位'
        },
        {
          stepNumber: 3,
          instructionEN: 'Connect with given value: There are 24 more blue beads, so 3 extra units = 24 beads!',
          instructionZH: '联系已知数值：蓝珠多出24颗，所以这3份对应多出的24颗珠子！',
          row1Units: 4,
          row2Units: 7,
          highlightDifference: true,
          bracketLabelEN: '3 extra units = 24 beads',
          bracketLabelZH: '3 份 = 24 颗珠子',
          formulaEN: '3 units = 24 beads',
          formulaZH: '3 份 = 24 颗',
          statusNoteEN: '3 units = 24 beads',
          statusNoteZH: '3份 = 24颗珠子'
        },
        {
          stepNumber: 4,
          instructionEN: 'Find 1 unit: 24 ÷ 3 = 8 beads per block!',
          instructionZH: '求出1份的值：24 ÷ 3 = 8 颗珠子/份！每个方块代表8颗！',
          row1Units: 4,
          row2Units: 7,
          highlightDifference: true,
          row1UnitValue: 8,
          row2UnitValue: 8,
          bracketLabelEN: '1 unit = 24 ÷ 3 = 8 beads',
          bracketLabelZH: '1 份 = 24 ÷ 3 = 8 颗珠子',
          formulaEN: '24 ÷ 3 = 8',
          formulaZH: '24 ÷ 3 = 8',
          statusNoteEN: '1 unit = 8 beads unlocked',
          statusNoteZH: '解锁1份 = 8颗珠子'
        },
        {
          stepNumber: 5,
          instructionEN: 'Yellow beads: 4 × 8 = 32. Blue beads: 7 × 8 = 56. Each bracelet takes 1 yellow + 1 blue. We are limited by 32 yellow beads: Exactly 32 bracelets can be made!',
          instructionZH: '黄珠：4 × 8 = 32 颗。蓝珠：7 × 8 = 56 颗。每条手链需1黄1蓝，受限于数量较少的32颗黄珠：最多只能串出 32 条完整手链！',
          row1Units: 4,
          row2Units: 7,
          row1UnitValue: 8,
          row2UnitValue: 8,
          bracketLabelEN: 'Limited by yellow: 32 complete bracelets',
          bracketLabelZH: '受黄珠限制: 最多串出32条完整手链',
          formulaEN: 'Yellow = 4 × 8 = 32 bracelets',
          formulaZH: '黄珠 = 4 × 8 = 32 条手链',
          statusNoteEN: 'Master challenge solved: 32 bracelets',
          statusNoteZH: '大师挑战拿下：最多串出32条手链'
        }
      ],
      interaction: {
        type: 'quick_choice',
        promptEN: 'Why are only 32 bracelets possible if there are 56 blue beads?',
        promptZH: '既然有56颗蓝珠，为什么最终只能串出32条手链？',
        triggerAtStep: 3,
        options: [
          { id: 'limit', labelEN: 'Because each bracelet needs 1 yellow bead, and yellow beads run out after 32!', labelZH: '因为每条手链都需要1颗黄珠，黄珠在32条时就用光了！', isCorrect: true },
          { id: 'math', labelEN: 'Because 56 ÷ 2 = 28', labelZH: '因为56除以2等于28', isCorrect: false }
        ],
        feedbackCorrectEN: 'Grandmaster reasoning! The limiting resource (the shorter bar) dictates the maximum output.',
        feedbackCorrectZH: '宗师级的系统思维！短板（较短的方块条）决定了最终的最大产出。'
      },
      teacherGuide: {
        goalEN: 'Demonstrate strategy selection and limiting constraint logic using visual models.',
        goalZH: '展示策略诊断选择与短板约束逻辑的几何图解。',
        askEN: 'How many extra blue beads are left over?',
        askZH: '串完后还剩下多少颗多余的蓝珠？',
        listenForEN: '56 - 32 = 24 blue beads left over (which is exactly the given difference!).',
        listenForZH: '56 - 32 = 24颗多余蓝珠（正好就是题目给出的差量24！）。',
        commonMistakeEN: 'Adding (32 + 56) ÷ 2 = 44 bracelets.',
        commonMistakeZH: '错把总数相加除以2算成44条。',
        followUpEN: 'How many more yellow beads would be needed to use all blue beads? 24 more!',
        followUpZH: '还需要多少颗黄珠才能把所有蓝珠用完？正好再需要24颗！',
        gradeRef: 'Grades 7–9'
      },
      assetSlots: { character: 'Noah', object: 'block', category: 'middle' }
    },
    {
      id: 's9-two-stage-fraction',
      stageId: 'level-9-master-challenge',
      type: 'example',
      titleEN: 'Guided Example: Two-Step Spending Chain',
      titleZH: '教学范例：两阶段连续分数消费链',
      questionEN: 'Sophia has some money. She spends 1/4 of it on books. Then she spends 1/3 of the REMAINDER on games. She has $40 left. How much did she have at first?',
      questionZH: 'Sophia有一笔钱。她先拿出其中的 1/4 买书，接着又用【剩下的钱】的 1/3 买游戏。最后她还剩下40美元。她最初一共有多少钱？',
      maxUnits: 4,
      modelType: 'nested_fraction_remainder',
      modelConfig: {
        wholeCount: 4,
        unitNameEN: 'dollar',
        unitNameZH: '美元'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Draw Sophia’s original money divided into 4 equal quarters (1/4 each). Total is unknown (?).',
          instructionZH: '画出代表Sophia初始金额的4等份模型（每份1/4）。总金额未知（?）。',
          statusNoteEN: 'Original money = 4 equal parts (?)',
          statusNoteZH: '最初总金额 = 4个等长部分 (?)'
        },
        {
          stepNumber: 2,
          instructionEN: 'Sophia spends 1/4 on books. The first quarter fades away. Notice: exactly 3 parts remain!',
          instructionZH: 'Sophia拿出 1/4 买书。第1份褪色。注意看：余下的钱正好剩下 3 个等份！',
          statusNoteEN: 'Books spent (1/4); 3 parts remain',
          statusNoteZH: '买书花去1/4；恰好剩余3份'
        },
        {
          stepNumber: 3,
          instructionEN: 'She spends 1/3 of the REMAINDER on games. 1/3 of the 3 remaining parts is exactly ONE block!',
          instructionZH: '接着花去【余下钱数】的 1/3 买游戏。3份里的 1/3 恰恰就是整整 1 个方块！',
          statusNoteEN: '1/3 of remainder = exactly 1 block',
          statusNoteZH: '余下3份中的1/3 = 恰好是1个方块'
        },
        {
          stepNumber: 4,
          instructionEN: 'The game block is spent and fades out. Exactly 2 solid blocks remain.',
          instructionZH: '买游戏的方块也花出去了。现在只剩下 2 个实心方块。',
          statusNoteEN: '2 equal quarters remain',
          statusNoteZH: '最后剩余2个等长方块'
        },
        {
          stepNumber: 5,
          instructionEN: 'Sophia has $40 left at the end. Those 2 remaining blocks represent exactly $40!',
          instructionZH: 'Sophia最终手里还剩 40 美元。这意味着剩下的这 2 个方块一共代表 40 美元！',
          statusNoteEN: '2 remaining blocks = $40',
          statusNoteZH: '最后2个方块 = 40美元'
        },
        {
          stepNumber: 6,
          instructionEN: 'Find the value of 1 unit: $40 ÷ 2 = $20 per quarter block.',
          instructionZH: '计算每 1 份的基准价值：40 ÷ 2 = 20 美元/份。',
          formulaEN: '$40 ÷ 2 = $20 per unit',
          formulaZH: '40 ÷ 2 = 20 美元/份',
          statusNoteEN: '1 unit = $20',
          statusNoteZH: '每1份 = 20美元'
        },
        {
          stepNumber: 7,
          instructionEN: 'Rebuild the whole: All 4 quarters = 4 × $20 = $80 originally!',
          instructionZH: '逆向重构最初总钱数：全部 4 份 = 4 × 20 = 80 美元！',
          formulaEN: '4 × $20 = $80 total',
          formulaZH: '4 × 20 = 80 美元',
          statusNoteEN: 'Answer: Sophia had $80 originally',
          statusNoteZH: '答：Sophia最初一共有80美元'
        }
      ],
      teacherGuide: {
        goalEN: 'Teach students to unravel nested remainder fractions one tier at a time.',
        goalZH: '引导学生逐层剥离嵌套的“剩余量中的分数”难题。',
        askEN: 'Why couldn’t we just add 1/4 + 1/3?',
        askZH: '为什么不能直接把 1/4 和 1/3 加起来？',
        listenForEN: 'Because 1/3 was NOT of the total! It was 1/3 of the remaining money!',
        listenForZH: '因为那 1/3 不是全部总钱数的 1/3，而是【剩下的钱】的 1/3！基准量不同不能直接相加！',
        commonMistakeEN: 'Adding 1/4 + 1/3 = 7/12.',
        commonMistakeZH: '错把基准量不同的两个分数直接相加。',
        followUpEN: 'Check forward: 80 - 20 (books) = 60. 60 - 20 (games) = 40 left. Matches perfectly!',
        followUpZH: '正向验算：80 - 20(书) = 60。60 - 20(游戏) = 40。严丝合缝！',
        gradeRef: 'Grades 7–9'
      },
      assetSlots: { character: 'Emma', object: 'game', category: 'middle' }
    },
    {
      id: 's9-transfer-final',
      stageId: 'level-9-master-challenge',
      type: 'transfer',
      titleEN: 'Grandmaster Finale: Trading Card Decks Transfer',
      titleZH: '宗师终极试炼：集换卡组内部转移与和守恒',
      questionEN: 'Deck A and Deck B contain 90 trading cards in total. After 15 cards are transferred from Deck B to Deck A, Deck A has twice as many cards as Deck B. How many trading cards were in Deck A originally?',
      questionZH: '卡组A与卡组B一共有90张集换卡牌。当从卡组B拿出15张放入卡组A后，卡组A的卡牌数恰好是卡组B的2倍。卡组A最初有多少张卡牌？',
      maxUnits: 6,
      modelType: 'card_transfer_invariance',
      modelConfig: {
        totalCards: 90,
        transferredCount: 15,
        ratioMultiplier: 2,
        unitNameEN: 'card',
        unitNameZH: '张卡牌'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Draw initial Deck A and Deck B. Key Law: Internal transfer between decks DOES NOT change the sum. Total is 90 cards!',
          instructionZH: '呈现初始卡组A与卡组B。核心守恒定律：两组之间的内部流动绝不改变总和，两组总卡牌数恒等于 90 张！',
          statusNoteEN: 'Total = 90 cards (Sum Invariance)',
          statusNoteZH: '总和恒等于90张（和守恒）'
        },
        {
          stepNumber: 2,
          instructionEN: '15 cards are taken from Deck B to give to Deck A. Highlight the 15 cards on Deck B.',
          instructionZH: '从卡组B拿出15张准备转移给A。在卡组B末端标出黄色转移块（15张）。',
          statusNoteEN: 'Partition 15 cards on Deck B',
          statusNoteZH: '在B组标出待转移的15张'
        },
        {
          stepNumber: 3,
          instructionEN: 'Transfer the 15 cards across from Deck B into Deck A.',
          instructionZH: '将15张卡牌从卡组B转移送入卡组A。',
          statusNoteEN: 'Transferring 15 cards from B to A',
          statusNoteZH: '15张卡牌由B组转移至A组'
        },
        {
          stepNumber: 4,
          instructionEN: 'After transfer: Deck A has TWICE as many cards as Deck B. A has 2 units, B has 1 unit.',
          instructionZH: '转移完成后：卡组A是卡组B的2倍。此时A组为2个相等单位，B组为1个相等单位。',
          statusNoteEN: 'Deck A = 2 units | Deck B = 1 unit',
          statusNoteZH: '转移后：A组2份，B组1份'
        },
        {
          stepNumber: 5,
          instructionEN: 'Connect units to the invariant total: 2 units + 1 unit = 3 units = 90 cards in total!',
          instructionZH: '对接恒定总和：2份 + 1份 = 3份 = 90张卡牌！',
          formulaEN: '2 + 1 = 3 units = 90 cards',
          formulaZH: '2 + 1 = 3 份 = 90 张',
          statusNoteEN: '3 units = 90 cards',
          statusNoteZH: '3个单位 = 90张卡牌'
        },
        {
          stepNumber: 6,
          instructionEN: 'Solve 1 unit: 90 ÷ 3 = 30 cards. Deck B now has 30 cards. Deck A now has 2 × 30 = 60 cards.',
          instructionZH: '求出1份基准值：90 ÷ 3 = 30张。此时B组有30张，A组有 2 × 30 = 60张。',
          formulaEN: '90 ÷ 3 = 30 cards/unit',
          formulaZH: '90 ÷ 3 = 30 张/份',
          statusNoteEN: 'Deck A now = 60 | Deck B now = 30',
          statusNoteZH: '此时A组60张，B组30张'
        },
        {
          stepNumber: 7,
          instructionEN: 'Work backward! Deck A reached 60 cards ONLY after receiving 15 from B. Reverse the transfer!',
          instructionZH: '逆向退回最初！卡组A现在的60张是收到了15张之后的结果。执行逆向操作：退回这15张！',
          formulaEN: 'Reverse: Return 15 cards',
          formulaZH: '逆推：退还收到的15张',
          statusNoteEN: 'Subtracting the transferred 15 cards',
          statusNoteZH: '逆向减去转移来的15张'
        },
        {
          stepNumber: 8,
          instructionEN: 'Calculate original Deck A: 60 - 15 = 45 cards originally in Deck A! (Deck B was 30 + 15 = 45).',
          instructionZH: '计算卡组A最初数量：60 - 15 = 45 张卡牌！（此时B组原本也是 30 + 15 = 45张，45+45=90！）。',
          formulaEN: '60 - 15 = 45 cards',
          formulaZH: '60 - 15 = 45 张',
          statusNoteEN: 'Answer: Deck A originally had 45 cards',
          statusNoteZH: '答：卡组A最初拥有45张卡牌'
        }
      ],
      interaction: {
        type: 'quick_choice',
        promptEN: 'Why did the total number of cards stay 90 throughout the problem?',
        promptZH: '为什么整道题中，两个卡组的卡牌总数始终是90张？',
        triggerAtStep: 0,
        options: [
          { id: 'sum', labelEN: 'Because moving cards between decks is inside the system (Sum Invariance)', labelZH: '因为卡牌只是在两组之间内部转移，没有离开系统（和守恒）', isCorrect: true },
          { id: 'luck', labelEN: 'It was just a coincidence', labelZH: '只是巧合', isCorrect: false }
        ],
        feedbackCorrectEN: 'Congratulations Grandmaster! You combined Sum Invariance, Ratio Units, and Backward Reversal!',
        feedbackCorrectZH: '恭喜可视化数学大宗师！你成功融汇了“和守恒定律”、“倍比份数法”与“逆向还原法”三大神技！'
      },
      teacherGuide: {
        goalEN: 'Synthesize Sum Invariance, Unit Ratio Division, and Backward Transfer.',
        goalZH: '集大成：和守恒 + 倍数比例均分 + 逆向还原。',
        askEN: 'What was Deck B originally?',
        askZH: 'B组最初有多少张？',
        listenForEN: 'Deck B had 30 + 15 = 45 cards! Both had 45 at first!',
        listenForZH: 'B组最初有 30 + 15 = 45 张！两组一开始各占一半！',
        commonMistakeEN: 'Adding 15 to 60 to get 75.',
        commonMistakeZH: '错把60加上15算成75。',
        followUpEN: 'Check: 45 + 45 = 90. 45 + 15 = 60, 45 - 15 = 30. 60 is twice 30! Masterful check!',
        followUpZH: '验算：45+45=90。转移后60与30，60是30的2倍！万无一失！',
        gradeRef: 'Grades 7–9'
      },
      assetSlots: { character: 'Noah', object: 'game', category: 'middle' }
    }
  ]
};
