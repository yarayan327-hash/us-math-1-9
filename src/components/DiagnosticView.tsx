import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS } from '../data/diagnostic';
import { Language } from '../types';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

interface DiagnosticViewProps {
  language: Language;
  onComplete: (answers: Record<number, string>) => void;
  onToggleLanguage?: () => void;
}

export const DiagnosticView: React.FC<DiagnosticViewProps> = ({
  language,
  onComplete,
  onToggleLanguage
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const currentQ = DIAGNOSTIC_QUESTIONS[currentIndex];
  const isLastQuestion = currentIndex === DIAGNOSTIC_QUESTIONS.length - 1;

  const handleSelectOption = (value: string) => {
    setSelectedOption(value);
  };

  const handleConfirmNext = () => {
    if (!selectedOption) return;

    const newAnswers = { ...answers, [currentQ.id]: selectedOption };
    setAnswers(newAnswers);

    if (isLastQuestion) {
      onComplete(newAnswers);
    } else {
      setSelectedOption(null);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full h-full flex flex-col justify-between overflow-hidden bg-[#F6F6F6] select-none">
      {/* Top Header Bar - 16:9 System Consistency */}
      <header className="w-full h-16 bg-white border-b border-gray-200/80 px-6 sm:px-8 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-4">
          <span className="text-base sm:text-lg font-extrabold text-[#333333] tracking-tight">
            {language === 'ZH' ? '先看看从哪里开始最合适' : 'Let’s Find Your Starting Point'}
          </span>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-[#26B7FF] font-bold border border-blue-100">
            {currentQ.gradeRef}
          </span>
        </div>

        <div className="flex items-center gap-5">
          {/* Progress Indicator */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#666666]">
              {currentIndex + 1} / {DIAGNOSTIC_QUESTIONS.length}
            </span>
            <div className="w-28 sm:w-36 h-2 bg-[#F6F6F6] rounded-full overflow-hidden border border-gray-200">
              <div
                className="h-full bg-[#26B7FF] transition-all duration-300 rounded-full"
                style={{ width: `${((currentIndex + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {onToggleLanguage && (
            <button
              onClick={onToggleLanguage}
              className="px-3.5 py-1.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#333333] text-xs font-bold transition-colors cursor-pointer border border-gray-200"
            >
              {language === 'EN' ? 'EN | 中文' : '中文 | EN'}
            </button>
          )}
        </div>
      </header>

      {/* Main 16:9 Area */}
      <main className="flex-1 w-full p-6 sm:p-8 grid grid-cols-12 gap-6 min-h-0 overflow-hidden">
        {/* Upper-Middle Question Stage: 65% (8 cols) */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-gray-200/80 flex flex-col justify-between h-full">
          <div className="space-y-4 my-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 text-[#666666] text-xs font-bold uppercase tracking-wider">
              <span>{language === 'ZH' ? currentQ.testConceptZH : currentQ.testConceptEN}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#333333] leading-snug tracking-tight">
              {language === 'ZH' ? currentQ.questionZH : currentQ.questionEN}
            </h2>
          </div>

          {/* 3 Large Answer Choices in ONE Horizontal Row */}
          <div className="pt-6 border-t border-gray-100">
            <div className="grid grid-cols-3 gap-4">
              {currentQ.options.map((opt) => {
                const isSelected = selectedOption === opt.value;
                return (
                  <button
                    key={opt.value}
                    onClick={() => handleSelectOption(opt.value)}
                    className={`py-5 px-4 rounded-2xl border-2 text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1 min-h-[80px] ${
                      isSelected
                        ? 'border-[#26B7FF] bg-[#26B7FF]/10 text-[#333333] shadow-md ring-2 ring-[#26B7FF]/30'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-[#333333]'
                    }`}
                  >
                    <span className="text-xl sm:text-2xl font-bold tracking-tight">
                      {language === 'ZH' ? opt.labelZH : opt.labelEN}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Scene / Subtle Grade-Appropriate Vector Area: 35% (4 cols) */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-3xl p-6 shadow-sm border border-gray-200/80 flex flex-col items-center justify-center h-full relative overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
          <div className="w-full flex flex-col items-center justify-center space-y-4 text-center">
            {/* Vector unit scene reflecting the question's concept */}
            <div className="p-4 rounded-2xl bg-[#F6F6F6] border border-gray-200 shadow-xs flex flex-col items-center gap-3 w-48">
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#26B7FF] flex items-center justify-center text-white font-bold text-xs">
                  ?
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#26B7FF]/30 border border-dashed border-[#26B7FF]" />
                <div className="w-8 h-8 rounded-lg bg-[#FDE700] flex items-center justify-center text-[#333333] font-bold text-xs">
                  +
                </div>
              </div>
              <div className="h-1.5 w-32 bg-gray-200 rounded-full" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#333333] tracking-wide block">
                {language === 'ZH' ? '观察数量结构与关系' : 'Look at the Structure'}
              </span>
              <p className="text-[11px] text-[#777777] max-w-[200px] leading-relaxed">
                {language === 'ZH'
                  ? '先选出你的直觉理解，测试将推荐最合适你学习的阶段。'
                  : 'Select your answer below to determine the ideal starting stage.'}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Bar with Next Action */}
      <footer className="w-full h-18 bg-white border-t border-gray-200/80 px-6 sm:px-8 flex items-center justify-between shrink-0">
        <span className="text-xs text-[#777777]">
          {language === 'ZH' ? '选择选项后点击下一步继续' : 'Select an answer to proceed'}
        </span>

        <button
          onClick={handleConfirmNext}
          disabled={!selectedOption}
          className={`px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base flex items-center gap-2 transition-all cursor-pointer ${
            selectedOption
              ? 'bg-[#333333] hover:bg-black text-white shadow-md hover:shadow-lg'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <span>{isLastQuestion ? (language === 'ZH' ? '查看测试结果' : 'View Result') : (language === 'ZH' ? '下一题' : 'Next Question')}</span>
          <ArrowRight size={18} />
        </button>
      </footer>
    </div>
  );
};
