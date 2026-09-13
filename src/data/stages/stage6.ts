import { CourseStage } from '../../types';

export const stage6: CourseStage = {
  id: 'level-6-scale-up-down',
  levelNumber: 6,
  titleEN: 'Level 6 — Scale Up and Down',
  titleZH: '第6阶 — 倍数与份数缩放',
  approxGradeBand: 'Grades 4–6',
  superpowerEN: 'I can scale base unit groups up and down to solve proportional problems.',
  superpowerZH: '我能把基准单位组按倍数自由放大或缩小，轻松破解各种比例问题。',
  endOfLevelInsightEN: 'When you know the base group rate, multiply to scale up or divide to scale down.',
  endOfLevelInsightZH: '掌握了一个基准组的数量关系，乘法放大，除法缩小，任意目标量随心推算。',
  unlockedBadgeEN: 'Scale Master',
  unlockedBadgeZH: '倍数缩放大师',
  unlockedLineEN: 'You can now scale unit groups and ratios up and down to solve multi-step rate problems.',
  unlockedLineZH: '你掌握了单位组按比例扩大与缩小的视觉模型，能游刃有余地解决倍数与配方问题。',
  conceptIntroEN: 'Real-world situations often come in bundles or recipes: 1 batch uses 3 parts of item A and 2 parts of item B. By scaling the whole group up by a multiplier (or scaling down to 1 first), we can find any target amount effortlessly!',
  conceptIntroZH: '生活中的很多问题都是成套成组出现的：比如一份配方需要3份A和2份B。只要找出扩大了几倍（或者先缩减到1份基准量），就能轻松推导出任何目标总数！',
  summaryEN: [
    'A base group represents a fixed ratio bundle (e.g., 3 flour : 2 sugar).',
    'Scale factor = Target Total ÷ Base Total (e.g., 36 ÷ 12 = 3 batches).',
    'Multiply every component part by the same scale factor.',
    'Or scale down to 1 unit first (Divide), then scale up to the target (Multiply).'
  ],
  summaryZH: [
    '基准组代表一个固定的比例组合（如3份面粉 : 2份糖）。',
    '缩放倍数 = 目标数量 ÷ 基础数量（如 36 ÷ 12 = 3 倍）。',
    '把组合里的每一个部分同时乘以这个相同的倍数。',
    '或者先“向下缩减”求出1份（除法），再“向上放大”求出目标（乘法）。'
  ],
  nextStageId: 'level-7-cancel-same-part',
  activities: [
    {
      id: 's6-challenge',
      stageId: 'level-6-scale-up-down',
      type: 'concept_intro',
      titleEN: 'Challenge: Bakery Recipe Scaling',
      titleZH: '探索挑战：烘焙坊配方成倍缩放',
      questionEN: 'A bakery recipe batch uses 3 cups of flour and 2 cups of sugar to make 12 cookies. The bakery needs to bake 36 cookies for a party. How many cups of flour are needed?',
      questionZH: '烘焙坊制作一份标准面团需要3杯面粉和2杯糖，可以烤出12块饼干。派对需要36块饼干。一共需要多少杯面粉？',
      maxUnits: 12,
      modelType: 'recipe_scale',
      modelConfig: {
        baseYield: 12,
        targetYield: 36,
        ingredients: [
          { nameEN: 'Flour', nameZH: '面粉', amount: 3, unitEN: 'cups', unitZH: '杯', icon: '🌾' },
          { nameEN: 'Sugar', nameZH: '白糖', amount: 2, unitEN: 'cups', unitZH: '杯', icon: '🧂' }
        ]
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Start with 1 standard batch: 3 cups flour + 2 cups sugar yields 12 cookies.',
          instructionZH: '先呈现1份标准配方：3杯面粉 + 2杯白糖，烘烤产出12块饼干。',
          statusNoteEN: '1 Standard batch: 12 cookies',
          statusNoteZH: '1份基础标准配方：产出12块饼干'
        },
        {
          stepNumber: 2,
          instructionEN: 'The party requires 36 cookies. Display the target recipe card on the right.',
          instructionZH: '派对需要36块饼干。在右侧呈现目标配方卡片。',
          statusNoteEN: 'Target: 36 cookies needed',
          statusNoteZH: '目标需求：36块饼干'
        },
        {
          stepNumber: 3,
          instructionEN: 'Find the recipe scale factor: 36 ÷ 12 = 3 batches needed!',
          instructionZH: '计算扩大倍数：36 ÷ 12 = 3 倍！需要制作整整 3 份配方！',
          formulaEN: '36 ÷ 12 = 3 batches',
          formulaZH: '36 ÷ 12 = 3 份配方',
          statusNoteEN: 'Scale multiplier = ×3 batches',
          statusNoteZH: '配方成倍放大：扩大3倍'
        },
        {
          stepNumber: 4,
          instructionEN: 'Scale up the target recipe: Every ingredient multiplies by 3.',
          instructionZH: '向上放大目标配方：配方里的所有原料均乘以 3。',
          formulaEN: 'Scale factor = ×3',
          formulaZH: '成倍缩放因子 = ×3',
          statusNoteEN: 'Every ingredient scales by 3',
          statusNoteZH: '各项原料均乘以3'
        },
        {
          stepNumber: 5,
          instructionEN: 'Focus on FLOUR: 1 batch uses 3 cups flour. So 3 batches use 3 cups × 3.',
          instructionZH: '聚焦目标原料【面粉】：1份用3杯，3份就需要 3 杯 × 3。',
          formulaEN: '3 cups × 3',
          formulaZH: '3 杯 × 3',
          statusNoteEN: 'Focusing on flour: 3 × 3',
          statusNoteZH: '锁定面粉对应关系：3 × 3'
        },
        {
          stepNumber: 6,
          instructionEN: 'Calculate total flour: 3 cups × 3 = 9 cups of flour needed for 36 cookies!',
          instructionZH: '完成计算：3 杯 × 3 = 9 杯面粉！即可烤出36块饼干！',
          formulaEN: '3 × 3 = 9 cups',
          formulaZH: '3 × 3 = 9 杯面粉',
          statusNoteEN: 'Answer: 9 cups of flour',
          statusNoteZH: '答：需要9杯面粉'
        }
      ],
      interaction: {
        type: 'quick_choice',
        promptEN: 'If 1 batch makes 12 cookies, how many batches make 36 cookies?',
        promptZH: '如果1份配方烤12块饼干，那么烤36块需要几份配方？',
        triggerAtStep: 2,
        options: [
          { id: 'b3', labelEN: '3 batches (36 ÷ 12 = 3)', labelZH: '3 份配方 (36 ÷ 12 = 3)', isCorrect: true },
          { id: 'b2', labelEN: '2 batches', labelZH: '2 份配方', isCorrect: false },
          { id: 'b4', labelEN: '4 batches', labelZH: '4 份配方', isCorrect: false }
        ],
        feedbackCorrectEN: 'Exactly! 36 is 3 times 12, so all ingredients must scale up by 3×.',
        feedbackCorrectZH: '太准确了！36是12的3倍，所以所有原料都要同步放大3倍。'
      },
      teacherGuide: {
        goalEN: 'Help students see batch/recipe scaling as multiplying the whole unit group by a scale factor.',
        goalZH: '引导学生理解配方成倍缩放的本质：将基本单位组按固定倍率整体放大。',
        askEN: 'How many cups of sugar would be needed for 36 cookies?',
        askZH: '那制作36块饼干需要多少杯糖呢？',
        listenForEN: '1 batch has 2 cups sugar. 3 batches need 2 × 3 = 6 cups sugar!',
        listenForZH: '1份配方需2杯糖，3份就需要 2 × 3 = 6杯糖！',
        commonMistakeEN: 'Adding 24 instead of multiplying by 3.',
        commonMistakeZH: '误把差量24直接加到原料上，而非按倍数缩放。',
        followUpEN: 'What is total cups of flour + sugar? 9 + 6 = 15 cups!',
        followUpZH: '面粉加糖一共多少杯？9 + 6 = 15杯！',
        gradeRef: 'Grades 4–6'
      },
      assetSlots: { character: 'Chef', object: 'cookie', category: 'middle' }
    },
    {
      id: 's6-smoothie',
      stageId: 'level-6-scale-up-down',
      type: 'example',
      titleEN: 'Guided Example: Fruit Smoothie Scaling',
      titleZH: '教学范例：水果果昔配方缩放',
      questionEN: 'A smoothie blender bottle uses 4 strawberries for 2 smoothies. To prepare 10 smoothies for a team, how many strawberries are needed?',
      questionZH: '果昔吧制作2杯果昔需要4颗草莓。要为运动队制作10杯果昔，一共需要多少颗草莓？',
      maxUnits: 10,
      modelType: 'proportional_pairs',
      modelConfig: {
        pairUnitsA: 2,
        pairUnitsB: 4,
        targetUnitsA: 10,
        pairNameEN_A: 'Smoothies',
        pairNameZH_A: '杯果昔',
        pairNameEN_B: 'Strawberries',
        pairNameZH_B: '颗草莓',
        pairIconA: '🥤',
        pairIconB: '🍓'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Draw the given rate: 2 smoothies ↔ 4 strawberries.',
          instructionZH: '呈现已知配比关系：2杯果昔对应4颗草莓。',
          statusNoteEN: 'Given: 2 smoothies ↔ 4 strawberries',
          statusNoteZH: '已知关系：2杯果昔 ↔ 4颗草莓'
        },
        {
          stepNumber: 2,
          instructionEN: 'Scale down to 1 smoothie: 4 ÷ 2 = 2 strawberries per smoothie.',
          instructionZH: '向下缩减求出1杯的基准配对：4 ÷ 2 = 2 颗草莓/杯。',
          formulaEN: '4 ÷ 2 = 2 strawberries',
          formulaZH: '4 ÷ 2 = 2 颗草莓/杯',
          statusNoteEN: 'Base unit rate: 2 strawberries/smoothie',
          statusNoteZH: '单一基准率：每杯2颗草莓'
        },
        {
          stepNumber: 3,
          instructionEN: 'Now display the target: The team ordered 10 smoothies.',
          instructionZH: '呈现目标任务：球队一共订购了 10 杯果昔。',
          statusNoteEN: 'Target: 10 smoothies',
          statusNoteZH: '目标：10杯果昔'
        },
        {
          stepNumber: 4,
          instructionEN: 'Each smoothie requires 2 strawberries. Pair 2 strawberries to each smoothie.',
          instructionZH: '每1杯都需要2颗草莓。将基准率分配至全部10杯果昔。',
          statusNoteEN: 'Assign 2 strawberries to each of the 10',
          statusNoteZH: '10杯每杯各分2颗草莓'
        },
        {
          stepNumber: 5,
          instructionEN: 'Calculate total: 10 smoothies × 2 strawberries = 20 strawberries needed!',
          instructionZH: '计算目标总数：10 杯 × 2 颗草莓 = 20 颗草莓！',
          formulaEN: '10 × 2 = 20',
          formulaZH: '10 × 2 = 20',
          statusNoteEN: 'Total: 20 strawberries needed',
          statusNoteZH: '总共需要20颗草莓'
        }
      ],
      teacherGuide: {
        goalEN: 'Practice the classic Scale Down (divide to 1) then Scale Up (multiply to target) strategy.',
        goalZH: '练习经典的“先向下缩减求单一量，再向上放大求目标量”的双向缩放策略。',
        askEN: 'Could we also solve this by noticing 10 is 5 times 2?',
        askZH: '我们能直接观察出10是2的5倍来求解吗？',
        listenForEN: 'Yes! 5 times as many smoothies means 5 × 4 = 20 strawberries!',
        listenForZH: '可以！果昔杯数是5倍，草莓数量也就是 5 × 4 = 20颗！',
        commonMistakeEN: 'Multiplying 10 × 4 directly.',
        commonMistakeZH: '直接用10乘以4得到40颗。',
        followUpEN: 'How many strawberries for 15 smoothies? 15 × 2 = 30!',
        followUpZH: '做15杯需要多少颗？15 × 2 = 30颗！',
        gradeRef: 'Grades 4–6'
      },
      assetSlots: { character: 'Coach', object: 'apple', category: 'middle' }
    },
    {
      id: 's6-stickers',
      stageId: 'level-6-scale-up-down',
      type: 'guided_practice',
      titleEN: 'Practice 1: Sticker Sheet Scaling',
      titleZH: '巩固练习1：手作贴纸包按比例缩放',
      questionEN: 'Each craft sheet contains 3 glitter stickers and 5 neon stickers. Zoe bought several sheets and has 25 neon stickers. How many glitter stickers did she get?',
      questionZH: '每张手作贴纸包包含3张闪光贴纸和5张荧光贴纸。Zoe买了若干包，一共得到了25张荧光贴纸。她得到了多少张闪光贴纸？',
      maxUnits: 15,
      modelType: 'sticker_pack_scale',
      modelConfig: {
        item1LabelEN: 'Glow Stickers',
        item1LabelZH: '荧光贴纸 (张)',
        item1CountRow1: 5,
        totalValueRow1: 25,
        item1CountRow2: 3,
        unitNameEN: 'sticker',
        unitNameZH: '张贴纸'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Draw ONE PACK: 5 glow stickers (blue) and 3 glitter stickers (yellow). Bracket: "1 Pack".',
          instructionZH: '先画出 1 包基础配置：5张荧光贴纸（蓝色）和 3张闪光贴纸（黄色）。大括号标出：“1包”。',
          bracketLabelEN: '1 Pack: 5 Glow + 3 Glitter',
          bracketLabelZH: '1包内含：5张荧光 + 3张闪光',
          statusNoteEN: '1 Pack = 5 Glow : 3 Glitter',
          statusNoteZH: '1包 = 5张荧光 : 3张闪光'
        },
        {
          stepNumber: 2,
          instructionEN: 'There are 25 glow stickers in total. Find the number of packs: 25 ÷ 5 = 5 packs! Show all 5 packs.',
          instructionZH: '题目说明一共有 25 张荧光贴纸。求出包数：25 ÷ 5 = 5 包！在画布上展开全部 5 包。',
          formulaEN: '25 ÷ 5 = 5 packs',
          formulaZH: '25 ÷ 5 = 5 包',
          bracketLabelEN: '25 glow stickers ÷ 5 per pack = 5 packs',
          bracketLabelZH: '25张荧光贴纸 ÷ 每包5张 = 5包',
          statusNoteEN: 'Found: 5 packs in total',
          statusNoteZH: '确定包数：一共是5包贴纸'
        },
        {
          stepNumber: 3,
          instructionEN: 'Scale the glitter stickers: Each of the 5 packs also contains 3 glitter stickers. 5 packs × 3 = 15 glitter stickers!',
          instructionZH: '同步放大闪光贴纸：每包同样包含 3 张闪光贴纸。5 包 × 3 张 = 15 张闪光贴纸！在每包中点亮闪光贴纸。',
          formulaEN: '5 × 3 = 15 glitter stickers',
          formulaZH: '5 × 3 = 15 张闪光贴纸',
          bracketLabelEN: '5 packs × 3 glitter per pack = 15 glitter stickers',
          bracketLabelZH: '5包 × 每包3张 = 15张闪光贴纸',
          statusNoteEN: '5 packs × 3 = 15 glitter stickers',
          statusNoteZH: '5包 × 每包3张 = 15张闪光'
        },
        {
          stepNumber: 4,
          instructionEN: 'Final answer: Zoe received 15 glitter stickers!',
          instructionZH: '最终确认：Zoe 一共得到了 15 张闪光贴纸！',
          formulaEN: 'Answer: 15 glitter stickers',
          formulaZH: '答：15张闪光贴纸',
          statusNoteEN: 'Answer: 15 glitter stickers',
          statusNoteZH: '答：15张闪光贴纸'
        }
      ],
      teacherGuide: {
        goalEN: 'Use one component’s scale factor to find the target of the other component.',
        goalZH: '通过其中一种成分的实际数量求出缩放倍数，反推另一种成分的总量。',
        askEN: 'How did we know Zoe bought 5 sheets?',
        askZH: '我们是怎么知道Zoe买了5包的？',
        listenForEN: 'Because she has 25 neon stickers and each sheet has 5: 25 ÷ 5 = 5 sheets!',
        listenForZH: '因为她有25张荧光贴纸，每包有5张，25 ÷ 5 = 5包！',
        commonMistakeEN: 'Dividing 25 by 3.',
        commonMistakeZH: '错用25去除以3。',
        followUpEN: 'How many total stickers did she get in all? 25 + 15 = 40 stickers!',
        followUpZH: '她一共得到了多少张贴纸？25 + 15 = 40张！',
        gradeRef: 'Grades 4–6'
      },
      assetSlots: { character: 'Zoe', object: 'ticket', category: 'middle' }
    },
    {
      id: 's6-game-gems',
      stageId: 'level-6-scale-up-down',
      type: 'transfer',
      titleEN: 'Level Challenge: Energy Gem Scaling',
      titleZH: '高阶挑战：游戏能量宝石换算',
      questionEN: 'In a game, unlocking 4 mystery chests requires 28 energy gems. How many energy gems are required to unlock 7 mystery chests?',
      questionZH: '在游戏中，开启4个神秘宝箱需要消耗28颗能量宝石。开启7个神秘宝箱一共需要多少颗能量宝石？',
      maxUnits: 7,
      modelType: 'scale_unit_rate',
      modelConfig: {
        baseCount: 4,
        baseValue: 28,
        targetCount: 7,
        baseUnitNameEN: 'Chests',
        baseUnitNameZH: '个宝箱',
        targetUnitNameEN: 'Gems',
        targetUnitNameZH: '颗宝石'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Start with the given rate: 4 chests require 28 energy gems in total.',
          instructionZH: '先呈现已知对应关系：4个宝箱共需消耗28颗能量宝石。',
          statusNoteEN: 'Given: 4 chests = 28 gems',
          statusNoteZH: '已知关系：4个宝箱 ↔ 28颗宝石'
        },
        {
          stepNumber: 2,
          instructionEN: 'Divide by 4 to break the group down into 1 single chest.',
          instructionZH: '两边同时除以4，将整组宝箱细分为单个宝箱的对应关系。',
          formulaEN: '÷ 4',
          formulaZH: '÷ 4',
          statusNoteEN: 'Dividing into 1 unit',
          statusNoteZH: '细分为单一单位'
        },
        {
          stepNumber: 3,
          instructionEN: 'Find the unit rate: 1 chest requires 28 ÷ 4 = 7 energy gems!',
          instructionZH: '锁定核心突破口（基准率）：开启1个宝箱需要 28 ÷ 4 = 7 颗能量宝石！',
          formulaEN: '28 ÷ 4 = 7 gems / chest',
          formulaZH: '28 ÷ 4 = 7 颗宝石/箱',
          statusNoteEN: '1 chest = 7 gems (Key unit rate)',
          statusNoteZH: '1个宝箱 = 7颗宝石 (核心基准率)'
        },
        {
          stepNumber: 4,
          instructionEN: 'Now multiply by target count: Draw all 7 chest units, each needing 7 gems.',
          instructionZH: '向上乘以目标倍数：画出全部7个宝箱，每个宝箱均需7颗宝石。',
          formulaEN: '× 7 chests',
          formulaZH: '× 7 个宝箱',
          statusNoteEN: '7 equal units of 7 gems',
          statusNoteZH: '7个等长单位，每单位7颗宝石'
        },
        {
          stepNumber: 5,
          instructionEN: 'Calculate total gems: 7 chests × 7 gems = 49 energy gems needed!',
          instructionZH: '计算宝石总数：7 个宝箱 × 7 颗宝石 = 49 颗能量宝石！',
          formulaEN: '7 × 7 = 49 gems',
          formulaZH: '7 × 7 = 49 颗宝石',
          statusNoteEN: 'Answer: 49 energy gems needed',
          statusNoteZH: '答：一共需要49颗能量宝石'
        }
      ],
      interaction: {
        type: 'quick_choice',
        promptEN: 'If 4 chests cost 28 gems, how much does 1 chest cost?',
        promptZH: '如果4个宝箱需要28颗宝石，开启1个宝箱需要多少颗宝石？',
        triggerAtStep: 1,
        options: [
          { id: 'g7', labelEN: '7 gems (28 ÷ 4)', labelZH: '7 颗宝石 (28 ÷ 4)', isCorrect: true },
          { id: 'g6', labelEN: '6 gems', labelZH: '6 颗宝石', isCorrect: false },
          { id: 'g8', labelEN: '8 gems', labelZH: '8 颗宝石', isCorrect: false }
        ],
        feedbackCorrectEN: 'Masterful! 1 chest costs 7 gems, so 7 chests cost 7 × 7 = 49 gems.',
        feedbackCorrectZH: '太棒了！1个宝箱需要7颗宝石，7个宝箱就是 7 × 7 = 49颗宝石。'
      },
      teacherGuide: {
        goalEN: 'Consolidate unit rate division and scale-up multiplication.',
        goalZH: '巩固“先归一除法，再倍增乘法”的核心解题策略。',
        askEN: 'Could you find the cost for 8 chests easily?',
        askZH: '你能很容易算出8个宝箱需要多少颗宝石吗？',
        listenForEN: 'Yes! 8 is double 4, so 28 × 2 = 56 gems!',
        listenForZH: '能！8是4的2倍，所以就是 28 × 2 = 56颗！',
        commonMistakeEN: 'Adding 3 chests × 4.',
        commonMistakeZH: '算加法时把单价和数量搞混。',
        followUpEN: 'How many chests could you open with 70 gems? 70 ÷ 7 = 10 chests!',
        followUpZH: '如果有70颗宝石能开几个宝箱？70 ÷ 7 = 10个宝箱！',
        gradeRef: 'Grades 4–6'
      },
      assetSlots: { character: 'Leo', object: 'game', category: 'middle' }
    }
  ]
};
