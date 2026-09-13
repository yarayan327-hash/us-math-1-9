import { CourseStage } from '../../types';

export const stage8: CourseStage = {
  id: 'level-8-rebuild-whole',
  levelNumber: 8,
  titleEN: 'Level 8 — Rebuild the Whole',
  titleZH: '第8阶 — 逆向整体重构',
  approxGradeBand: 'Grades 6–8',
  superpowerEN: 'I can reconstruct the original whole from a fraction or remainder.',
  superpowerZH: '我能从剩余的分数或余量反向推导出原本完整的整体。',
  endOfLevelInsightEN: 'If you know what fraction of the whole remains, you can rebuild the whole.',
  endOfLevelInsightZH: '只要知道剩余部分占总体的几分之几，就能通过单份反推出最初的整体。',
  unlockedBadgeEN: 'Rebuild the Whole',
  unlockedBadgeZH: '逆向整体重构',
  unlockedLineEN: 'You can work backward through fractions to reconstruct original amounts with confidence.',
  unlockedLineZH: '你掌握了分数逆向推理，能从部分余量准确重构最初的完整总量。',
  conceptIntroEN: 'When someone spends or gives away a fraction of their money, do not look at what was spent—look at what REMAINS! The remaining money matches the remaining fraction parts. Find one part, and rebuild the entire original whole!',
  conceptIntroZH: '当某人花掉或送出了整体的几分之几时，不要被花掉的部分迷惑，先把目光投向“剩余的”！剩下的钱对应剩下几分之几的份数。求出1份，就能顺藤摸瓜重构出最初的完整总量！',
  summaryEN: [
    'The whole represents 100% or 1 (all denominator units).',
    'Fraction remaining = 1 - Fraction spent (e.g. 1 - 1/3 = 2/3).',
    'Remaining Value ÷ Remaining Units = Value of 1 Unit.',
    'Total Original Amount = Total Units × Value of 1 Unit.',
    'Working backwards reverses the story with precision.'
  ],
  summaryZH: [
    '最初的完整整体代表“1”（由分母数量的相同单位组成）。',
    '剩余的分数 = 1 - 花去的分数（例如 1 - 1/3 = 2/3）。',
    '剩余的金额 ÷ 剩余的份数 = 1份的价值。',
    '最初的总金额 = 总份数 × 1份的价值。',
    '倒推法通过严密的几何逆向复原最初的故事全貌。'
  ],
  nextStageId: 'level-9-master-challenge',
  activities: [
    {
      id: 's8-challenge',
      stageId: 'level-8-rebuild-whole',
      type: 'concept_intro',
      titleEN: 'Challenge: Leo’s Book Purchase',
      titleZH: '探索挑战：Leo买书与逆向重构',
      questionEN: 'Leo spent 1/3 of his pocket money on a science book. He has $24 left. How much money did he have at first?',
      questionZH: 'Leo把自己零花钱的 1/3 买了一本科普书。他还剩下24美元。他最初一共有多少钱？',
      maxUnits: 3,
      modelType: 'rebuild_whole',
      modelConfig: {
        wholeCount: 3,
        knownPartCount: 2,
        unknownPartCount: 1,
        itemUnitValue: 12,
        unitNameEN: 'dollar',
        unitNameZH: '美元'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Because he spent 1/3, the whole pocket money is divided into 3 equal parts (denominator = 3).',
          instructionZH: '因为他花了 1/3，所以最初的零花钱整体被均分成 3 个相等的部分（分母为3）。',
          visibleUnitsCount: 3,
          row1BlueCount: 3,
          missingPartCount: 0,
          bracketLabelEN: 'Original Whole: 3 equal parts',
          bracketLabelZH: '最初整体: 3个相等部分',
          statusNoteEN: 'Whole = 3 equal units',
          statusNoteZH: '整体 = 3个相等单位'
        },
        {
          stepNumber: 2,
          instructionEN: '1/3 was spent on the book (dashed out). The remaining 2 units are what he still has!',
          instructionZH: '其中的 1/3 用来买了书（虚线扣除）。剩下的 2 份就是他手里还持有的钱！',
          visibleUnitsCount: 3,
          row1BlueCount: 2,
          missingPartCount: 1,
          bracketLabelEN: 'Spent: 1/3 | Remaining: 2/3 = 2 units',
          bracketLabelZH: '花去: 1/3 | 剩余: 2/3 = 2份',
          statusNoteEN: '2 units remain intact',
          statusNoteZH: '留下2个完整单位'
        },
        {
          stepNumber: 3,
          instructionEN: 'The problem says he has $24 left. That means 2 remaining units = $24!',
          instructionZH: '题目说他还剩下24美元。这意味着这剩下的 2 份正好等于 24 美元！',
          visibleUnitsCount: 3,
          row1BlueCount: 2,
          missingPartCount: 1,
          bracketLabelEN: '2 remaining units = $24',
          bracketLabelZH: '剩余的2份 = 24美元',
          formulaEN: '2 units = $24',
          formulaZH: '2 份 = 24 美元',
          statusNoteEN: '2 units = $24 linked',
          statusNoteZH: '建立关联：2份 = 24美元'
        },
        {
          stepNumber: 4,
          instructionEN: 'Find the value of ONE unit: $24 ÷ 2 = $12 per unit.',
          instructionZH: '求出每 1 份的价值：24 ÷ 2 = 12 美元/份。',
          visibleUnitsCount: 3,
          row1BlueCount: 2,
          missingPartCount: 1,
          row1UnitValue: 12,
          bracketLabelEN: '1 unit = $24 ÷ 2 = $12',
          bracketLabelZH: '1 份 = 24 ÷ 2 = 12 美元',
          formulaEN: '24 ÷ 2 = 12',
          formulaZH: '24 ÷ 2 = 12',
          statusNoteEN: '1 unit = $12 revealed',
          statusNoteZH: '解出1份 = 12美元'
        },
        {
          stepNumber: 5,
          instructionEN: 'Rebuild the original whole: 3 units in total! 3 × $12 = $36 at first!',
          instructionZH: '逆向重构最初的完整整体：一共是 3 份！3 × 12 = 36 美元！最初有36美元！',
          visibleUnitsCount: 3,
          row1BlueCount: 3,
          missingPartCount: 0,
          row1UnitValue: 12,
          bracketLabelEN: 'Original Whole: 3 × $12 = $36',
          bracketLabelZH: '最初整体: 3 × 12 = 36 美元',
          formulaEN: '3 × 12 = 36',
          formulaZH: '3 × 12 = 36',
          statusNoteEN: 'Original whole reconstructed: $36',
          statusNoteZH: '最初总量重构完成：36美元'
        }
      ],
      interaction: {
        type: 'quick_choice',
        promptEN: 'If 1/3 was spent, what fraction of the money is the $24 that remains?',
        promptZH: '如果花掉了 1/3，那么剩下的24美元占总钱数的几分之几？',
        triggerAtStep: 1,
        options: [
          { id: 'twoThirds', labelEN: '2/3 of the money (3 - 1 = 2 units)', labelZH: '总钱数的 2/3 (3 - 1 = 2 份)', isCorrect: true },
          { id: 'oneThird', labelEN: '1/3 of the money', labelZH: '总钱数的 1/3', isCorrect: false },
          { id: 'half', labelEN: '1/2 of the money', labelZH: '总钱数的 1/2', isCorrect: false }
        ],
        feedbackCorrectEN: 'Exact! 1 - 1/3 = 2/3. So 2 units = $24, which means 1 unit = $12.',
        feedbackCorrectZH: '太精准了！1 - 1/3 = 2/3。所以2份=24美元，每份就是12美元。'
      },
      teacherGuide: {
        goalEN: 'Help students see fraction problems as unit blocks where the remainder leads to the whole.',
        goalZH: '引导学生把分数应用题转化为方块模型，通过“余量求单量，单量复原总量”。',
        askEN: 'Why did we multiply by 3 at the very end?',
        askZH: '为什么最后一步要乘以 3？',
        listenForEN: 'Because the original amount had 3 equal parts!',
        listenForZH: '因为最初的全部零花钱一共有3份！',
        commonMistakeEN: 'Dividing 24 by 3 instead of 2.',
        commonMistakeZH: '错把24除以3，忽略了24只是剩下的2份。',
        followUpEN: 'How much did the book cost? 1 unit = $12. Check: 36 - 12 = 24!',
        followUpZH: '买书花了多少钱？1份=12美元。验算：36 - 12 = 24美元，完全吻合！',
        gradeRef: 'Grades 6–8'
      },
      assetSlots: { character: 'Leo', object: 'notebook', category: 'middle' }
    },
    {
      id: 's8-stickers',
      stageId: 'level-8-rebuild-whole',
      type: 'example',
      titleEN: 'Guided Example: Sticker Pack Remainder',
      titleZH: '教学范例：贴纸包余量逆推',
      questionEN: 'Ava uses 2/5 of her craft stickers on greeting cards. She has 18 stickers left in her pack. How many stickers did she have at first?',
      questionZH: 'Ava用自己贴纸包中 2/5 的贴纸制作了贺卡。包里还剩下18张贴纸。最初一共有多少张贴纸？',
      maxUnits: 5,
      modelType: 'rebuild_whole',
      modelConfig: {
        wholeCount: 5,
        knownPartCount: 3,
        unknownPartCount: 2,
        itemUnitValue: 6,
        unitNameEN: 'sticker',
        unitNameZH: '张贴纸'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'The full sticker pack is divided into 5 equal parts (denominator = 5).',
          instructionZH: '整包贴纸被均分为 5 个相等的部分（分母为5）。',
          visibleUnitsCount: 5,
          row1BlueCount: 5,
          missingPartCount: 0,
          bracketLabelEN: 'Original Pack: 5 equal units',
          bracketLabelZH: '最初贴纸包: 5个相等单位',
          statusNoteEN: 'Whole pack = 5 equal units',
          statusNoteZH: '整包 = 5个相等单位'
        },
        {
          stepNumber: 2,
          instructionEN: '2/5 of the stickers were used (dashed out). The remaining 3 units are what she has left!',
          instructionZH: '其中的 2/5 被制作贺卡花掉（虚线扣除）。剩下的 3 份就是手里还保留的！',
          visibleUnitsCount: 5,
          row1BlueCount: 3,
          missingPartCount: 2,
          bracketLabelEN: 'Used: 2/5 | Remaining: 5 - 2 = 3 units',
          bracketLabelZH: '用去: 2/5 | 剩余: 5 - 2 = 3份',
          statusNoteEN: '3 units remain in the pack',
          statusNoteZH: '包中剩余3份'
        },
        {
          stepNumber: 3,
          instructionEN: '18 stickers remain: That means the 3 remaining units = 18 stickers!',
          instructionZH: '题目说明还剩下18张贴纸：这意味着剩下的 3 份正好对应 18 张贴纸！',
          visibleUnitsCount: 5,
          row1BlueCount: 3,
          missingPartCount: 2,
          bracketLabelEN: '3 remaining units = 18 stickers',
          bracketLabelZH: '剩余3份 = 18张贴纸',
          formulaEN: '3 units = 18',
          formulaZH: '3份 = 18张',
          statusNoteEN: '3 units = 18 stickers linked',
          statusNoteZH: '建立关联：3份 = 18张贴纸'
        },
        {
          stepNumber: 4,
          instructionEN: 'Find ONE unit: 18 ÷ 3 = 6 stickers per unit.',
          instructionZH: '求出每 1 份代表多少：18 ÷ 3 = 6 张/份。',
          visibleUnitsCount: 5,
          row1BlueCount: 3,
          missingPartCount: 2,
          row1UnitValue: 6,
          bracketLabelEN: '1 unit = 18 ÷ 3 = 6 stickers',
          bracketLabelZH: '1份 = 18 ÷ 3 = 6张贴纸',
          formulaEN: '18 ÷ 3 = 6',
          formulaZH: '18 ÷ 3 = 6',
          statusNoteEN: '1 unit = 6 stickers discovered',
          statusNoteZH: '求得1份 = 6张贴纸'
        },
        {
          stepNumber: 5,
          instructionEN: 'Reconstruct the original whole: 5 units in total! 5 × 6 = 30 stickers at first!',
          instructionZH: '逆向重构最初的总量：一共是 5 份！5 × 6 = 30 张贴纸！最初一共有30张贴纸！',
          visibleUnitsCount: 5,
          row1BlueCount: 5,
          missingPartCount: 0,
          row1UnitValue: 6,
          bracketLabelEN: 'Original Pack: 5 × 6 = 30 stickers',
          bracketLabelZH: '最初总计: 5 × 6 = 30张贴纸',
          formulaEN: '5 × 6 = 30',
          formulaZH: '5 × 6 = 30',
          statusNoteEN: '30 stickers originally in the pack',
          statusNoteZH: '最初一共有30张贴纸'
        }
      ],
      teacherGuide: {
        goalEN: 'Practice 2/5 used -> 3/5 remaining -> find 1 unit -> reconstruct whole.',
        goalZH: '熟练掌握 用去2/5 -> 剩余3/5 -> 求1份 -> 重构总数。',
        askEN: 'Why is 18 divided by 3, not 2 or 5?',
        askZH: '为什么18是除以3而不是除以2或5？',
        listenForEN: 'Because 18 is what is left, and 5 - 2 = 3 units left!',
        listenForZH: '因为18是剩下的贴纸，而5份用去2份后剩下的是3份！',
        commonMistakeEN: 'Dividing 18 by 2 or by 5.',
        commonMistakeZH: '错用18除以2或5。',
        followUpEN: 'How many stickers were used on greeting cards? 2 × 6 = 12. 12 + 18 = 30.',
        followUpZH: '做贺卡用去了多少张？2 × 6 = 12张。12 + 18 = 30张。',
        gradeRef: 'Grades 6–8'
      },
      assetSlots: { character: 'Ava', object: 'sticker', category: 'middle' }
    },
    {
      id: 's8-route',
      stageId: 'level-8-rebuild-whole',
      type: 'guided_practice',
      titleEN: 'Practice 1: Hiking Trail Journey',
      titleZH: '巩固练习1：登山徒步路程',
      questionEN: 'A hiker completes 3/7 of a mountain trail and still has 16 km left to walk. What is the total length of the trail?',
      questionZH: '一名徒步者走完了山道全程的 3/7，还剩下16千米没走。这条山道全长多少千米？',
      maxUnits: 7,
      modelType: 'rebuild_whole',
      modelConfig: {
        wholeCount: 7,
        knownPartCount: 4,
        unknownPartCount: 3,
        itemUnitValue: 4,
        unitNameEN: 'km',
        unitNameZH: '千米'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'The entire trail is divided into 7 equal units (denominator = 7).',
          instructionZH: '山道全长由 7 个相等的单位组成（分母为7）。',
          visibleUnitsCount: 7,
          row1BlueCount: 7,
          missingPartCount: 0,
          bracketLabelEN: 'Total Trail: 7 equal units',
          bracketLabelZH: '山道全长: 7个相等单位',
          statusNoteEN: 'Whole trail = 7 units',
          statusNoteZH: '山道全长 = 7个单位'
        },
        {
          stepNumber: 2,
          instructionEN: '3/7 was completed (dashed out). The remaining 4 units are what is left to walk!',
          instructionZH: '走完了 3/7（虚线扣除）。剩下的 4 份就是还没走的路程！',
          visibleUnitsCount: 7,
          row1BlueCount: 4,
          missingPartCount: 3,
          bracketLabelEN: 'Completed: 3/7 | Remaining: 7 - 3 = 4 units',
          bracketLabelZH: '已走: 3/7 | 剩余: 7 - 3 = 4份',
          statusNoteEN: '4 units remain to walk',
          statusNoteZH: '还剩4份未走'
        },
        {
          stepNumber: 3,
          instructionEN: '16 km remain to walk: 4 remaining units = 16 km!',
          instructionZH: '还剩下16千米没走：这意味着剩下的 4 份正好对应 16 千米！',
          visibleUnitsCount: 7,
          row1BlueCount: 4,
          missingPartCount: 3,
          bracketLabelEN: '4 remaining units = 16 km',
          bracketLabelZH: '剩余4份 = 16千米',
          formulaEN: '4 units = 16 km',
          formulaZH: '4份 = 16千米',
          statusNoteEN: '4 units = 16 km linked',
          statusNoteZH: '建立关联：4份 = 16千米'
        },
        {
          stepNumber: 4,
          instructionEN: 'Find ONE unit: 16 ÷ 4 = 4 km per unit.',
          instructionZH: '求出每 1 份代表多少：16 ÷ 4 = 4 千米/份。',
          visibleUnitsCount: 7,
          row1BlueCount: 4,
          missingPartCount: 3,
          row1UnitValue: 4,
          bracketLabelEN: '1 unit = 16 ÷ 4 = 4 km',
          bracketLabelZH: '1份 = 16 ÷ 4 = 4千米',
          formulaEN: '16 ÷ 4 = 4',
          formulaZH: '16 ÷ 4 = 4',
          statusNoteEN: '1 unit = 4 km discovered',
          statusNoteZH: '求得1份 = 4千米'
        },
        {
          stepNumber: 5,
          instructionEN: 'Reconstruct the entire trail: 7 units × 4 km = 28 km in total!',
          instructionZH: '逆向重构山道全长：7 份 × 4 千米 = 28 千米！整条山道全长28千米！',
          visibleUnitsCount: 7,
          row1BlueCount: 7,
          missingPartCount: 0,
          row1UnitValue: 4,
          bracketLabelEN: 'Total Trail: 7 × 4 = 28 km',
          bracketLabelZH: '山道全长: 7 × 4 = 28千米',
          formulaEN: '7 × 4 = 28',
          formulaZH: '7 × 4 = 28',
          statusNoteEN: 'Total length: 28 km',
          statusNoteZH: '全长28千米'
        }
      ],
      teacherGuide: {
        goalEN: 'Extend to 7-part fractions with strict 5-step reverse rhythm.',
        goalZH: '拓展到7等份分数问题，严格遵循5步逆向重构节奏。',
        askEN: 'How many units make up the whole trail?',
        askZH: '山道全长由几份组成？',
        listenForEN: '7 equal units.',
        listenForZH: '7个相等的单位。',
        commonMistakeEN: 'Dividing 16 by 3.',
        commonMistakeZH: '错用16除以3。',
        followUpEN: 'How far has the hiker already walked? 3 × 4 = 12 km.',
        followUpZH: '已经走了多远？3 × 4 = 12千米。',
        gradeRef: 'Grades 6–8'
      },
      assetSlots: { character: 'Noah', object: 'ticket', category: 'middle' }
    },
    {
      id: 's8-transfer',
      stageId: 'level-8-rebuild-whole',
      type: 'transfer',
      titleEN: 'Level Challenge: Two-Step Remainder',
      titleZH: '高阶挑战：两段式连续剩余逆推',
      questionEN: 'Mia has a bag of candies. She gives 1/2 of them to her sister, and then gives 4 candies to her brother. She has 6 candies left. How many candies did she have at first?',
      questionZH: 'Mia有一袋糖果。她把其中的 1/2 送给了妹妹，接着又送给弟弟4颗。最后她自己还剩下6颗糖果。最初袋子里一共有多少颗糖果？',
      maxUnits: 4,
      modelType: 'mia_candy_reverse',
      modelConfig: {
        wholeCount: 2,
        unitNameEN: 'candy',
        unitNameZH: '颗糖果'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Draw a single whole bar representing Mia’s bag of candies. Total count is unknown (?).',
          instructionZH: '画出一条代表Mia整袋糖果的完整方块条。最初总数未知（?）。',
          statusNoteEN: 'Whole bag of candies = ?',
          statusNoteZH: '整袋糖果原有总数 = ?'
        },
        {
          stepNumber: 2,
          instructionEN: 'Mia gives 1/2 of her candies to her sister. The left half fades (given away).',
          instructionZH: 'Mia把其中的 1/2 送给了妹妹。左侧半袋褪色虚线化（已送出）。',
          statusNoteEN: 'Left half: 1/2 given to sister',
          statusNoteZH: '左半边：1/2送给妹妹'
        },
        {
          stepNumber: 3,
          instructionEN: 'From the remaining half, Mia gives 4 candies to her brother. Partition 4 in yellow.',
          instructionZH: '从剩下的半袋中，Mia拿出4颗送给弟弟。在右侧分出黄色的4颗糖。',
          statusNoteEN: '4 candies partitioned for brother',
          statusNoteZH: '右半边划出4颗送给弟弟'
        },
        {
          stepNumber: 4,
          instructionEN: 'Mia has 6 candies left. The remaining part is known: 6 candies.',
          instructionZH: 'Mia自己最后剩下6颗糖。右侧最后一段已知：6颗。',
          statusNoteEN: 'Mia has 6 candies remaining',
          statusNoteZH: 'Mia自留最后6颗'
        },
        {
          stepNumber: 5,
          instructionEN: 'The remaining half consists of 4 (brother) + 6 (Mia) = 10 candies! Half of bag = 10.',
          instructionZH: '关键突破：整个右半边正好由 4 (弟弟) + 6 (自留) = 10 颗糖组成！半袋 = 10颗。',
          formulaEN: '4 + 6 = 10 candies (1/2 of bag)',
          formulaZH: '4 + 6 = 10 颗糖 (半袋)',
          statusNoteEN: '1/2 of bag = 10 candies',
          statusNoteZH: '半袋糖果 = 10颗糖'
        },
        {
          stepNumber: 6,
          instructionEN: 'Rebuild the whole! Sister’s 1/2 = 10, remaining 1/2 = 10. Original whole = 10 × 2 = 20 candies!',
          instructionZH: '逆向还原整体！姐姐的1/2是10颗，剩下也是10颗。最初整袋 = 10 × 2 = 20 颗糖果！',
          formulaEN: '10 × 2 = 20 candies',
          formulaZH: '10 × 2 = 20 颗糖果',
          statusNoteEN: 'Answer: 20 candies originally',
          statusNoteZH: '答：最初整袋共有20颗糖果'
        }
      ],
      interaction: {
        type: 'quick_choice',
        promptEN: 'Why did we ADD 4 to 6 before dealing with the 1/2 fraction?',
        promptZH: '为什么我们在处理 1/2 分数之前，先用 6 加 4？',
        triggerAtStep: 0,
        options: [
          { id: 'rev', labelEN: 'Because working backwards undoes the giving away of 4 first!', labelZH: '因为逆向推理要先撤销最后一步送出的4颗！', isCorrect: true },
          { id: 'math', labelEN: 'Because 6 + 4 is easy to compute', labelZH: '因为6+4好算', isCorrect: false }
        ],
        feedbackCorrectEN: 'Master-level backward reasoning! Reversing actions in exact reverse chronological order.',
        feedbackCorrectZH: '大师级的逆向倒推推理！严格按照时间倒序逆转每一步操作。'
      },
      teacherGuide: {
        goalEN: 'Combine integer addition reversal with fraction whole reconstruction.',
        goalZH: '将整数加减逆推与分数求整体完美融合。',
        askEN: 'How can you forward-check this answer?',
        askZH: '怎么从头正向验算？',
        listenForEN: 'Start with 20. Half is 10. Give 4 to brother: 10 - 4 = 6 left. Matches perfectly!',
        listenForZH: '从20开始，一半是10，送弟弟4颗剩6颗，完全吻合！',
        commonMistakeEN: 'Multiplying 6 × 2 first, then adding 4.',
        commonMistakeZH: '错把 6 乘 2 算成 12，再加上 4。',
        followUpEN: 'Why does order of operations matter when reversing?',
        followUpZH: '为什么逆推时操作顺序至关重要？',
        gradeRef: 'Grades 6–8'
      },
      assetSlots: { character: 'Mia', object: 'cookie', category: 'middle' }
    },
    {
      id: 's8-sam-alex-transfer',
      stageId: 'level-8-rebuild-whole',
      type: 'challenge',
      titleEN: 'Master Practice: Sam & Alex Card Transfer',
      titleZH: '高手实践：Sam与Alex的卡牌平分转移',
      questionEN: 'Sam has 14 cards, and Alex has 6 cards. How many cards must Sam give to Alex so they have equal amounts?',
      questionZH: 'Sam有14张卡牌，Alex有6张卡牌。Sam必须送给Alex多少张卡牌，两人的卡牌数量才会正好相等？',
      maxUnits: 14,
      modelType: 'sam_alex_card_transfer',
      modelConfig: {
        item1CountRow1: 14,
        item1CountRow2: 6,
        transferAmount: 4,
        unitNameEN: 'card',
        unitNameZH: '张卡牌'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Draw the initial cards: Sam has 14 cards, Alex has 6 cards. The difference is 14 - 6 = 8 cards.',
          instructionZH: '画出两人的初始卡牌：Sam有14张，Alex有6张。两人相差 14 - 6 = 8 张卡牌。',
          formulaEN: '14 - 6 = 8 cards difference',
          formulaZH: '14 - 6 = 8 张差量',
          bracketLabelEN: 'Difference: 14 - 6 = 8 cards',
          bracketLabelZH: '多出的差量: 14 - 6 = 8 张',
          statusNoteEN: 'Difference = 8 cards',
          statusNoteZH: '相差 8 张卡牌'
        },
        {
          stepNumber: 2,
          instructionEN: 'Split the 8-card difference in half: 8 ÷ 2 = 4 cards. Highlight the 4 transfer cards in yellow!',
          instructionZH: '将这 8 张差量一分为二：8 ÷ 2 = 4 张。黄色高亮显示这 4 张即将转移的卡牌！',
          formulaEN: '8 ÷ 2 = 4 cards to give',
          formulaZH: '8 ÷ 2 = 4 张转移量',
          bracketLabelEN: 'Transfer units: 8 ÷ 2 = 4 cards',
          bracketLabelZH: '转移部分: 8 ÷ 2 = 4 张',
          statusNoteEN: 'Transfer amount: 4 cards',
          statusNoteZH: '需要转移 4 张卡牌'
        },
        {
          stepNumber: 3,
          instructionEN: 'Move the 4 cards from Sam’s row down to Alex’s row! Sam: 14 - 4 = 10. Alex: 6 + 4 = 10.',
          instructionZH: '将这 4 张卡牌从 Sam 那行移入 Alex 那行！Sam: 14 - 4 = 10张。Alex: 6 + 4 = 10张。',
          formulaEN: 'Sam: 14 - 4 = 10 | Alex: 6 + 4 = 10',
          formulaZH: 'Sam: 14 - 4 = 10 | Alex: 6 + 4 = 10',
          statusNoteEN: 'Transferring 4 cards from Sam to Alex',
          statusNoteZH: '4张卡牌由Sam转移给Alex'
        },
        {
          stepNumber: 4,
          instructionEN: 'Both rows now have equal amounts: 10 cards each!',
          instructionZH: '两行现在卡牌数量完全均等：每人各持 10 张！',
          formulaEN: 'Equal: 10 cards each',
          formulaZH: '均等：每人 10 张',
          bracketLabelEN: 'Equal: 10 each',
          bracketLabelZH: '均等: 各 10 张',
          statusNoteEN: 'Equal: 10 cards each',
          statusNoteZH: '两人均有 10 张'
        },
        {
          stepNumber: 5,
          instructionEN: 'Total remains invariant: 14 + 6 = 20; 10 + 10 = 20. Moving cards between them never changes the total!',
          instructionZH: '总数保持不变：14 + 6 = 20；10 + 10 = 20。内部移动卡牌绝不会改变两人拥有的总卡牌数！',
          formulaEN: 'Total: 14 + 6 = 20 (Invariant)',
          formulaZH: '总和: 14 + 6 = 20 (保持恒定)',
          statusNoteEN: 'Total remains invariant: 20 cards',
          statusNoteZH: '总数恒等于 20 张'
        }
      ],
      interaction: {
        type: 'quick_choice',
        promptEN: 'Why does Sam only need to give HALF of the difference (4 cards), not all 8?',
        promptZH: '为什么Sam只需要送出差量的一半（4张），而不是把8张全送给Alex？',
        triggerAtStep: 1,
        options: [
          { id: 'half', labelEN: 'Because giving 4 reduces Sam by 4 and increases Alex by 4, closing the 8-gap!', labelZH: '因为送出4张使Sam减少4、Alex增加4，一增一减正好抹平8张的差距！', isCorrect: true },
          { id: 'random', labelEN: 'Because 4 is an even number', labelZH: '因为4是偶数', isCorrect: false }
        ],
        feedbackCorrectEN: 'Brilliant mathematical intuition! Giving 1 shifts the gap by 2.',
        feedbackCorrectZH: '精湛的数学直觉！一人减少1同时另一人增加1，相对差距缩减了2。'
      },
      teacherGuide: {
        goalEN: 'Help students see why the transfer amount is always Difference ÷ 2, and total remains invariant.',
        goalZH: '引导学生理解为什么平分转移量永远是“差量 ÷ 2”，且内部流转总和始终不变。',
        askEN: 'What would happen if Sam gave all 8 cards to Alex?',
        askZH: '如果Sam把这8张全给了Alex，会发生什么？',
        listenForEN: 'Then Alex would have 14 and Sam would have 6—the difference just flipped!',
        listenForZH: '那么Alex变成14张，Sam变成6张，两人差距只是反过来了！',
        commonMistakeEN: 'Thinking Sam should give all 8 cards.',
        commonMistakeZH: '误以为要把8张全给Alex。',
        followUpEN: 'Did the total of 20 cards change when they were handed over?',
        followUpZH: '在移交卡牌的过程中，20张的总数改变过吗？',
        gradeRef: 'Grades 6–8'
      },
      assetSlots: { character: 'Sam', object: 'ticket', category: 'middle' }
    }
  ]
};
