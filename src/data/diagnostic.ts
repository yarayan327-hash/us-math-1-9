import { DiagnosticQuestion, StageId } from '../types';

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    questionEN: 'Ava has 6 building blocks. She gets 3 more. How many blocks does she have now?',
    questionZH: 'Ava有6块积木，她又得到了3块。现在她一共有多少块积木？',
    options: [
      { labelEN: '7', labelZH: '7', value: '7' },
      { labelEN: '9', labelZH: '9', value: '9' },
      { labelEN: '10', labelZH: '10', value: '10' }
    ],
    correctValue: '9',
    testConceptEN: 'Basic addition and quantity change',
    testConceptZH: '基础加法与数量增加',
    gradeRef: 'Grades 1–2'
  },
  {
    id: 2,
    questionEN: 'Ben has 12 stickers. Ava has 4 fewer stickers than Ben. How many stickers does Ava have?',
    questionZH: 'Ben有12张贴纸，Ava的贴纸比Ben少4张。Ava有多少张贴纸？',
    options: [
      { labelEN: '8', labelZH: '8', value: '8' },
      { labelEN: '12', labelZH: '12', value: '12' },
      { labelEN: '16', labelZH: '16', value: '16' }
    ],
    correctValue: '8',
    testConceptEN: 'Comparison and subtraction',
    testConceptZH: '比较与差量扣减',
    gradeRef: 'Grades 2–4'
  },
  {
    id: 3,
    questionEN: '4 identical notebooks cost $20. How much do 7 notebooks cost?',
    questionZH: '4本相同的笔记本一共20美元。买7本这样的笔记本需要多少美元？',
    options: [
      { labelEN: '$25', labelZH: '25美元', value: '25' },
      { labelEN: '$35', labelZH: '35美元', value: '35' },
      { labelEN: '$40', labelZH: '40美元', value: '40' }
    ],
    correctValue: '35',
    testConceptEN: 'Find one unit and scale',
    testConceptZH: '先找一份，再按比例放大',
    gradeRef: 'Grades 3–5'
  },
  {
    id: 4,
    questionEN: 'The ratio of blue pens to yellow pens is 3:5. There are 16 more yellow pens than blue pens. How many pens are there altogether?',
    questionZH: '蓝色笔与黄色笔的数量比是3:5。黄色笔比蓝色笔多16支。一共有多少支笔？',
    options: [
      { labelEN: '40', labelZH: '40', value: '40' },
      { labelEN: '64', labelZH: '64', value: '64' },
      { labelEN: '80', labelZH: '80', value: '80' }
    ],
    correctValue: '64',
    testConceptEN: 'Hidden unit in a ratio',
    testConceptZH: '从比例差量中求解隐藏单位',
    gradeRef: 'Grades 5–7'
  },
  {
    id: 5,
    questionEN: '2 adult tickets and 3 child tickets cost $72. 2 adult tickets and 1 child ticket cost $48. How much does one child ticket cost?',
    questionZH: '2张成人票和3张儿童票一共72美元；2张成人票和1张儿童票一共48美元。一张儿童票是多少美元？',
    options: [
      { labelEN: '$6', labelZH: '6美元', value: '6' },
      { labelEN: '$12', labelZH: '12美元', value: '12' },
      { labelEN: '$24', labelZH: '24美元', value: '24' }
    ],
    correctValue: '12',
    testConceptEN: 'Visual elimination / simultaneous relationships',
    testConceptZH: '消元思想与对应关系',
    gradeRef: 'Grades 7–9'
  }
];

export function determinePlacement(answers: Record<number, string>): {
  stageId: StageId;
  reasonEN: string;
  reasonZH: string;
} {
  const q1Correct = answers[1] === '9';
  const q2Correct = answers[2] === '8';
  const q3Correct = answers[3] === '35';
  const q4Correct = answers[4] === '64';

  if (!q1Correct) {
    return {
      stageId: 'number-builder',
      reasonEN: 'Recommended starting with visual quantity construction and basic operations.',
      reasonZH: '建议从直观数量构建与基础加减运算开始。'
    };
  }

  if (!q2Correct) {
    return {
      stageId: 'compare-connect',
      reasonEN: 'Mastered direct addition; ready to strengthen comparative bar models and differences.',
      reasonZH: '已掌握直接加减，建议重点强化基线对比条形图与“更多/更少”差量关系。'
    };
  }

  if (!q3Correct) {
    return {
      stageId: 'find-one-first',
      reasonEN: 'Strong comparison fundamentals; ready to master the core "find 1 unit first" strategy.',
      reasonZH: '具备良好的对比思维，建议进入归一思维训练，先求1份再等比缩放。'
    };
  }

  if (!q4Correct) {
    return {
      stageId: 'hidden-unit-explorer',
      reasonEN: 'Solid unit scaling; ready to unlock hidden units in ratios and percentages.',
      reasonZH: '已熟练掌握单份缩放，建议探索比例差量与百分比中的隐藏单位。'
    };
  }

  return {
    stageId: 'relationship-solver',
    reasonEN: 'Exceptional visual ratio reasoning; ready for visual simultaneous elimination and equations.',
    reasonZH: '具备出色的隐藏单位推演能力，直接进入消元与多量关系求解。'
  };
}
