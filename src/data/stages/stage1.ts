import { CourseStage } from '../../types';

export const stage1: CourseStage = {
  id: 'level-1-build-quantity',
  levelNumber: 1,
  titleEN: 'Level 1 — Build the Quantity',
  titleZH: '第1阶 — 数量实体构建',
  approxGradeBand: 'Grades 1–2',
  superpowerEN: 'I can turn numbers into visible units.',
  superpowerZH: '我能把抽象数字变成看得见的单位方块。',
  endOfLevelInsightEN: 'Numbers are not just symbols. A number can be built from equal units.',
  endOfLevelInsightZH: '数字不仅是符号，任何数量都可以由相同大小的单位方块构建而成。',
  unlockedBadgeEN: 'Build the Quantity',
  unlockedBadgeZH: '数量实体构建',
  unlockedLineEN: 'You can now turn any number into visible building blocks to see addition and subtraction clearly.',
  unlockedLineZH: '你现在可以用看得见的方块直观展现数量的增多与减少。',
  conceptIntroEN: 'Numbers are not just symbols. We turn numbers into rows of equal unit blocks. Adding makes the whole grow; subtracting removes units from the whole.',
  conceptIntroZH: '数字不仅仅是抽象符号。我们用相同大小的方块来构建数量。加法让整体向右延伸，减法从整体中拿走方块。',
  summaryEN: [
    'Numbers can be built from equal units.',
    'Adding makes the whole grow to the right (+).',
    'Taking away removes part of the whole (-).',
    'The whole equals all of its parts combined.'
  ],
  summaryZH: [
    '任何数字都可以用等长的单位方块构建。',
    '加法让整体向右生长延伸 (+)。',
    '减法是从整体中移走一部分 (-)。',
    '整体等于所有组成部分的合集。'
  ],
  nextStageId: 'level-2-see-difference',
  activities: [
    {
      id: 's1-challenge',
      stageId: 'level-1-build-quantity',
      type: 'concept_intro',
      titleEN: 'Challenge: Emma’s Crayons',
      titleZH: '探索挑战：Emma的蜡笔',
      questionEN: 'Emma has 5 crayons. She gets 4 more crayons. How many crayons does she have now?',
      questionZH: 'Emma一开始有5支蜡笔，她又得到了4支蜡笔。现在她一共有多少支蜡笔？',
      maxUnits: 9,
      modelType: 'single_row_add_sub',
      modelConfig: {
        baseCount: 5,
        deltaCount: 4,
        unitNameEN: 'crayon',
        unitNameZH: '蜡笔'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Emma starts with 5 crayons. Each unit block represents 1 crayon.',
          instructionZH: 'Emma一开始有5支蜡笔。每个单位方块代表1支蜡笔。',
          visibleUnitsCount: 5,
          statusNoteEN: 'What do we know? Emma has 5 crayons',
          statusNoteZH: '我们知道了什么？Emma有5支蜡笔'
        },
        {
          stepNumber: 2,
          instructionEN: 'Emma gets 4 more crayons. Watch the row grow to the right with 4 new yellow units.',
          instructionZH: 'Emma又得到了4支蜡笔。观察方块条向右生长，接上4块新的黄色方块。',
          visibleUnitsCount: 5,
          addedUnitsCount: 4,
          statusNoteEN: 'What happened? The whole grew by 4 units',
          statusNoteZH: '发生了什么？整体增加了4个单位'
        },
        {
          stepNumber: 3,
          instructionEN: 'Combine both parts into a single total: Count on from 5: 5 + 4 = 9 crayons.',
          instructionZH: '将两个部分合并为总数：从5接着数：5 + 4 = 9 支蜡笔。',
          visibleUnitsCount: 5,
          addedUnitsCount: 4,
          bracketLabelEN: 'Total: 5 + 4 = 9 crayons',
          bracketLabelZH: '总计: 5 + 4 = 9 支蜡笔',
          formulaEN: '5 + 4 = 9',
          formulaZH: '5 + 4 = 9',
          statusNoteEN: 'Calculate: 5 + 4 = 9 crayons in total',
          statusNoteZH: '计算：一共有 5 + 4 = 9 支蜡笔'
        },
        {
          stepNumber: 4,
          instructionEN: 'Return to the question: Emma now has 9 crayons in total!',
          instructionZH: '回到题目问题：Emma现在一共有 9 支蜡笔！',
          visibleUnitsCount: 5,
          addedUnitsCount: 4,
          bracketLabelEN: 'Answer: 9 crayons',
          bracketLabelZH: '答: 9 支蜡笔',
          formulaEN: '5 + 4 = 9',
          formulaZH: '5 + 4 = 9',
          statusNoteEN: 'Answer: Emma has 9 crayons',
          statusNoteZH: '答：Emma现在有9支蜡笔'
        }
      ],
      interaction: {
        type: 'quick_choice',
        promptEN: 'What happened to Emma’s total quantity when she got 4 more crayons?',
        promptZH: '当Emma又得到4支蜡笔时，她的总量发生了什么变化？',
        triggerAtStep: 0,
        options: [
          { id: 'grow', labelEN: 'It grew larger (5 + 4)', labelZH: '整体变大了 (5 + 4)', isCorrect: true },
          { id: 'shrink', labelEN: 'It became smaller', labelZH: '数量变少了', isCorrect: false },
          { id: 'same', labelEN: 'It stayed the same', labelZH: '数量保持不变', isCorrect: false }
        ],
        feedbackCorrectEN: 'Exactly! Getting more adds new units to the right side of the row.',
        feedbackCorrectZH: '太棒了！得到更多就是在现有方块条右侧加入新单位。'
      },
      teacherGuide: {
        goalEN: 'Help students see that addition physically extends the existing quantity.',
        goalZH: '引导学生直观理解：加法就是在原数量基础上向右延伸加长。',
        askEN: 'How many blocks did Emma have first? Where do the new ones go?',
        askZH: 'Emma一开始有几块？新来的蜡笔排在哪里？',
        listenForEN: 'She had 5, and the 4 new blocks join right on the end.',
        listenForZH: '原本有5块，新来的4块直接接在末尾。',
        commonMistakeEN: 'Re-counting from 1 instead of counting on from 5.',
        commonMistakeZH: '从1重新数起，而不是直接从5往后数4。',
        followUpEN: 'Did the original 5 blocks move?',
        followUpZH: '原来的5块方块位置改变了吗？',
        gradeRef: 'Grades 1–2'
      },
      assetSlots: { character: 'Emma', object: 'crayon', category: 'young' }
    },
    {
      id: 's1-guided-sub',
      stageId: 'level-1-build-quantity',
      type: 'example',
      titleEN: 'Guided Example: Giving Away',
      titleZH: '教学范例：送出与移走',
      questionEN: 'Ben has 9 stickers. He gives away 3 stickers to his friend. How many stickers are left?',
      questionZH: 'Ben有9张贴纸，他把其中的3张送给了朋友。他还剩下多少张贴纸？',
      maxUnits: 9,
      modelType: 'single_row_add_sub',
      modelConfig: {
        baseCount: 9,
        deltaCount: 3,
        unitNameEN: 'sticker',
        unitNameZH: '贴纸'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Ben starts with 9 stickers in total. We build a full row of 9 equal units.',
          instructionZH: 'Ben一开始一共有9张贴纸。我们构建由9个等长单位组成的完整方块条。',
          visibleUnitsCount: 9,
          statusNoteEN: 'What do we know? The whole is 9 stickers',
          statusNoteZH: '我们知道了什么？总数是9张贴纸'
        },
        {
          stepNumber: 2,
          instructionEN: 'He gives away 3 stickers. Watch 3 units separate from the right side of the whole.',
          instructionZH: '他送出3张贴纸。注意观察3个单位从整体的右侧分离并移出。',
          visibleUnitsCount: 9,
          removedUnitsCount: 3,
          statusNoteEN: 'What is being removed? 3 units are taken away',
          statusNoteZH: '移走了什么？拿走了3个单位'
        },
        {
          stepNumber: 3,
          instructionEN: 'Calculate what remains: 9 - 3 = 6 stickers.',
          instructionZH: '计算剩余部分：9 - 3 = 6 张贴纸。',
          visibleUnitsCount: 9,
          removedUnitsCount: 3,
          bracketLabelEN: 'Remaining: 9 - 3 = 6 stickers',
          bracketLabelZH: '剩余: 9 - 3 = 6 张贴纸',
          formulaEN: '9 - 3 = 6',
          formulaZH: '9 - 3 = 6',
          statusNoteEN: 'Calculate: 9 - 3 = 6',
          statusNoteZH: '计算：9 - 3 = 6'
        },
        {
          stepNumber: 4,
          instructionEN: 'Return to the question: Ben has 6 stickers left!',
          instructionZH: '回到题目问题：Ben还剩下 6 张贴纸！',
          visibleUnitsCount: 9,
          removedUnitsCount: 3,
          bracketLabelEN: 'Answer: 6 stickers left',
          bracketLabelZH: '答: 剩下6张贴纸',
          formulaEN: '9 - 3 = 6',
          formulaZH: '9 - 3 = 6',
          statusNoteEN: 'Answer: 6 stickers left',
          statusNoteZH: '答：还剩6张贴纸'
        }
      ],
      interaction: {
        type: 'quick_choice',
        promptEN: 'When Ben gives 3 stickers away, what operation represents this action?',
        promptZH: '当Ben送走3张贴纸时，哪个算式能准确表示这个动作？',
        triggerAtStep: 1,
        options: [
          { id: 'sub', labelEN: '9 - 3 = 6', labelZH: '9 - 3 = 6', isCorrect: true },
          { id: 'add', labelEN: '9 + 3 = 12', labelZH: '9 + 3 = 12', isCorrect: false },
          { id: 'mul', labelEN: '9 × 3 = 27', labelZH: '9 × 3 = 27', isCorrect: false }
        ],
        feedbackCorrectEN: 'Correct! Subtraction takes units away from the existing row.',
        feedbackCorrectZH: '完全正确！减法就是从现有的方块条中移走一部分。'
      },
      teacherGuide: {
        goalEN: 'Ensure students see subtraction as physically removing blocks from the whole.',
        goalZH: '确保学生直观看到：减法是从整体中实际移走部分方块。',
        askEN: 'Which blocks leave the group?',
        askZH: '哪几块方块离开了方块条？',
        listenForEN: 'The last 3 blocks on the right fade and are removed.',
        listenForZH: '最右侧的3块方块变淡并被移走。',
        commonMistakeEN: 'Confusing the remaining part with the removed part.',
        commonMistakeZH: '混淆剩余部分与拿走部分。',
        followUpEN: 'If we put the 3 blocks back, what would the total be?',
        followUpZH: '如果把拿走的3块放回去，总数会是多少？',
        gradeRef: 'Grades 1–2'
      },
      assetSlots: { character: 'Ben', object: 'sticker', category: 'young' }
    },
    {
      id: 's1-guided-blocks',
      stageId: 'level-1-build-quantity',
      type: 'example',
      titleEN: 'Guided Example: Building a Tower',
      titleZH: '教学范例：搭积木加长',
      questionEN: 'Leo has 4 building blocks. He puts 3 more on the line. How many blocks in total?',
      questionZH: 'Leo有4块积木，他又在这一行后面拼上了3块。一共有多少块积木？',
      maxUnits: 7,
      modelType: 'single_row_add_sub',
      modelConfig: {
        baseCount: 4,
        deltaCount: 3,
        unitNameEN: 'block',
        unitNameZH: '积木'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Leo starts with 4 blocks. Each block is 1 equal unit.',
          instructionZH: 'Leo先摆出4块积木。每块积木是1个相等的单位。',
          visibleUnitsCount: 4,
          statusNoteEN: 'What do we know? Leo has 4 blocks',
          statusNoteZH: '我们知道了什么？Leo原有4块积木'
        },
        {
          stepNumber: 2,
          instructionEN: 'He puts 3 more blocks on the line. Watch 3 new yellow units join on the right.',
          instructionZH: '他又拼上3块积木。观察3块新黄色方块在右侧接上。',
          visibleUnitsCount: 4,
          addedUnitsCount: 3,
          statusNoteEN: 'What happened? 3 new blocks added',
          statusNoteZH: '发生了什么？新接上3块积木'
        },
        {
          stepNumber: 3,
          instructionEN: 'Combine both parts into a total length: 4 + 3 = 7 blocks.',
          instructionZH: '将两部分合并求出总长度：4 + 3 = 7 块积木。',
          visibleUnitsCount: 4,
          addedUnitsCount: 3,
          bracketLabelEN: 'Total: 4 + 3 = 7 blocks',
          bracketLabelZH: '总计: 4 + 3 = 7 块积木',
          formulaEN: '4 + 3 = 7',
          formulaZH: '4 + 3 = 7',
          statusNoteEN: 'Calculate: 4 + 3 = 7',
          statusNoteZH: '计算：4 + 3 = 7'
        },
        {
          stepNumber: 4,
          instructionEN: 'Return to the question: Leo has 7 blocks in total!',
          instructionZH: '回到题目问题：Leo一共有 7 块积木！',
          visibleUnitsCount: 4,
          addedUnitsCount: 3,
          bracketLabelEN: 'Answer: 7 blocks',
          bracketLabelZH: '答: 7 块积木',
          formulaEN: '4 + 3 = 7',
          formulaZH: '4 + 3 = 7',
          statusNoteEN: 'Answer: 7 blocks in total',
          statusNoteZH: '答：一共有7块积木'
        }
      ],
      teacherGuide: {
        goalEN: 'Reinforce the visual continuity of equal unit building.',
        goalZH: '强化等长单位连续拼接的概念。',
        askEN: 'What is each block worth?',
        askZH: '每个方块代表多少？',
        listenForEN: 'Each block is exactly 1 unit.',
        listenForZH: '每个方块都正好代表1。',
        commonMistakeEN: 'Drawing blocks of unequal sizes.',
        commonMistakeZH: '画出的方块忽大忽小。',
        followUpEN: 'Why is it important that all blocks are the same size?',
        followUpZH: '为什么所有方块必须一样大？',
        gradeRef: 'Grades 1–2'
      },
      assetSlots: { character: 'Leo', object: 'block', category: 'young' }
    },
    {
      id: 's1-prac1',
      stageId: 'level-1-build-quantity',
      type: 'guided_practice',
      titleEN: 'Practice 1: Colored Pencils',
      titleZH: '巩固练习1：彩色铅笔',
      questionEN: 'Mia has 6 colored pencils. Her friend gives her 2 more. How many pencils does Mia have now?',
      questionZH: 'Mia有6支彩色铅笔，朋友又送给她2支。Mia现在一共有多少支铅笔？',
      maxUnits: 8,
      modelType: 'single_row_add_sub',
      modelConfig: {
        baseCount: 6,
        deltaCount: 2,
        unitNameEN: 'pencil',
        unitNameZH: '铅笔'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Mia starts with 6 colored pencils. Build 6 equal unit blocks.',
          instructionZH: 'Mia先拿出6支彩色铅笔。构建6个相等的单位方块。',
          visibleUnitsCount: 6,
          statusNoteEN: 'What do we know? Mia starts with 6 pencils',
          statusNoteZH: '我们知道了什么？Mia原有6支铅笔'
        },
        {
          stepNumber: 2,
          instructionEN: 'Her friend gives her 2 more pencils. Watch 2 new yellow units join on the right.',
          instructionZH: '朋友又送给她2支铅笔。注意观察2块新黄色方块在右侧接上。',
          visibleUnitsCount: 6,
          addedUnitsCount: 2,
          statusNoteEN: 'What happened? 2 new units added to the row',
          statusNoteZH: '发生了什么？在这一行末尾加入了2个新单位'
        },
        {
          stepNumber: 3,
          instructionEN: 'Calculate the new total: 6 + 2 = 8 pencils altogether.',
          instructionZH: '计算新的总数：6 + 2 = 8 支铅笔。',
          visibleUnitsCount: 6,
          addedUnitsCount: 2,
          bracketLabelEN: 'Total: 6 + 2 = 8 pencils',
          bracketLabelZH: '总计: 6 + 2 = 8 支铅笔',
          formulaEN: '6 + 2 = 8',
          formulaZH: '6 + 2 = 8',
          statusNoteEN: 'Answer: Mia now has 8 pencils',
          statusNoteZH: '答：Mia现在一共有8支铅笔'
        }
      ],
      teacherGuide: {
        goalEN: 'Independent practice of whole addition.',
        goalZH: '独立完成基础加法构建。',
        askEN: 'How many blocks in total?',
        askZH: '现在一共有几块方块？',
        listenForEN: '8 blocks in total.',
        listenForZH: '一共8块。',
        commonMistakeEN: 'Stopping at 7.',
        commonMistakeZH: '数到7停下。',
        followUpEN: 'What is 8 - 2?',
        followUpZH: '那如果从8支拿走2支是多少？',
        gradeRef: 'Grades 1–2'
      },
      assetSlots: { character: 'Mia', object: 'crayon', category: 'young' }
    },
    {
      id: 's1-prac2',
      stageId: 'level-1-build-quantity',
      type: 'guided_practice',
      titleEN: 'Practice 2: Eating Cookies',
      titleZH: '巩固练习2：吃小饼干',
      questionEN: 'Omar has 8 delicious cookies. He eats 2 of them. How many cookies are left?',
      questionZH: 'Omar有8块美味的小饼干，他吃掉了其中的2块。还剩下多少块饼干？',
      maxUnits: 8,
      modelType: 'single_row_add_sub',
      modelConfig: {
        baseCount: 8,
        deltaCount: 2,
        unitNameEN: 'cookie',
        unitNameZH: '饼干'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Omar starts with 8 cookies in a row.',
          instructionZH: 'Omar一开始有8块整齐排列的饼干。',
          visibleUnitsCount: 8,
          statusNoteEN: 'What do we know? Omar starts with 8 cookies',
          statusNoteZH: '我们知道了什么？Omar原有8块饼干'
        },
        {
          stepNumber: 2,
          instructionEN: 'He eats 2 cookies. Watch 2 units separate and fade from the right side of the row.',
          instructionZH: '他吃掉了2块。注意观察最右侧的2块方块分离并移出。',
          visibleUnitsCount: 8,
          removedUnitsCount: 2,
          statusNoteEN: 'What action happens? 2 units are removed',
          statusNoteZH: '发生了什么动作？拿走了2个单位'
        },
        {
          stepNumber: 3,
          instructionEN: 'Calculate what remains: 8 - 2 = 6 cookies left.',
          instructionZH: '计算剩余部分：8 - 2 = 6 块饼干。',
          visibleUnitsCount: 8,
          removedUnitsCount: 2,
          bracketLabelEN: 'Remaining: 8 - 2 = 6 cookies',
          bracketLabelZH: '剩余: 8 - 2 = 6 块饼干',
          formulaEN: '8 - 2 = 6',
          formulaZH: '8 - 2 = 6',
          statusNoteEN: 'Answer: 6 cookies are left',
          statusNoteZH: '答：还剩下6块饼干'
        }
      ],
      teacherGuide: {
        goalEN: 'Practice visual removal for subtraction.',
        goalZH: '练习减法的几何移出图解。',
        askEN: 'How many blocks remain solid?',
        askZH: '还剩下多少块完整实心方块？',
        listenForEN: '6 blocks remain solid.',
        listenForZH: '还剩下6块。',
        commonMistakeEN: 'Adding 2 instead of subtracting.',
        commonMistakeZH: '错把吃掉当成又加进2块。',
        followUpEN: 'How do you check your answer?',
        followUpZH: '怎么用加法验算？',
        gradeRef: 'Grades 1–2'
      },
      assetSlots: { character: 'Omar', object: 'cookie', category: 'young' }
    },
    {
      id: 's1-transfer',
      stageId: 'level-1-build-quantity',
      type: 'transfer',
      titleEN: 'Level Challenge: Add and Take Away',
      titleZH: '高阶挑战：连续增减组合',
      questionEN: 'Noah builds a row of 5 blocks, adds 4 blocks, and then removes 2 blocks. What is the final quantity?',
      questionZH: 'Noah先摆了5块积木，接着又加上4块，最后拿走了2块。最终一共有多少块积木？',
      maxUnits: 9,
      modelType: 'single_row_add_sub',
      modelConfig: {
        baseCount: 5,
        deltaCount: 4,
        unitNameEN: 'block',
        unitNameZH: '积木'
      },
      steps: [
        {
          stepNumber: 1,
          instructionEN: 'Noah begins with 5 blocks.',
          instructionZH: 'Noah一开始有5块积木。',
          visibleUnitsCount: 5,
          statusNoteEN: '5 initial units',
          statusNoteZH: '初始5个单位'
        },
        {
          stepNumber: 2,
          instructionEN: 'He adds 4 blocks: 5 + 4 = 9 blocks.',
          instructionZH: '他加上4块新积木：5 + 4 = 9 块。',
          visibleUnitsCount: 5,
          addedUnitsCount: 4,
          formulaEN: '5 + 4 = 9',
          formulaZH: '5 + 4 = 9',
          statusNoteEN: 'Row grows to 9 units',
          statusNoteZH: '方块条增长到9个单位'
        },
        {
          stepNumber: 3,
          instructionEN: 'Then he takes away 2 blocks from the 9: 9 - 2 = 7 blocks remain.',
          instructionZH: '接着他从这9块中拿走2块：9 - 2 = 7 块。',
          visibleUnitsCount: 9,
          removedUnitsCount: 2,
          bracketLabelEN: 'Final: 9 - 2 = 7 blocks',
          bracketLabelZH: '最终结果: 9 - 2 = 7 块积木',
          formulaEN: '5 + 4 - 2 = 7',
          formulaZH: '5 + 4 - 2 = 7',
          statusNoteEN: '7 blocks final total',
          statusNoteZH: '最终留下7块积木'
        }
      ],
      interaction: {
        type: 'quick_choice',
        promptEN: 'What is the final count after adding 4 and removing 2 from 5?',
        promptZH: '5块先加4块再减2块，最终还剩几块？',
        triggerAtStep: 1,
        options: [
          { id: 'opt7', labelEN: '7 blocks', labelZH: '7块积木', isCorrect: true },
          { id: 'opt6', labelEN: '6 blocks', labelZH: '6块积木', isCorrect: false },
          { id: 'opt9', labelEN: '9 blocks', labelZH: '9块积木', isCorrect: false }
        ],
        feedbackCorrectEN: 'Brilliant! 5 + 4 = 9, and 9 - 2 = 7.',
        feedbackCorrectZH: '太棒了！5 + 4 = 9，然后 9 - 2 = 7。'
      },
      teacherGuide: {
        goalEN: 'Combine forward addition and backward subtraction on the same visual unit line.',
        goalZH: '在同一条方块线上综合运用加法增加与减法扣减。',
        askEN: 'How does the bar change at each step?',
        askZH: '方块条在每一步是如何变化的？',
        listenForEN: 'It grows longer first, then the end blocks are taken off.',
        listenForZH: '先变长，然后末尾的方块被拿掉。',
        commonMistakeEN: 'Subtracting 2 from 5 before adding 4.',
        commonMistakeZH: '计算顺序混乱。',
        followUpEN: 'Could we calculate 4 - 2 = 2 first, then 5 + 2?',
        followUpZH: '可以先算 4 - 2 = 2，再算 5 + 2 吗？',
        gradeRef: 'Grades 1–2'
      },
      assetSlots: { character: 'Noah', object: 'block', category: 'young' }
    }
  ]
};
