import React from 'react';
import { CourseStage, Language, StageId } from '../types';
import { STAGES, STAGE_ORDER } from '../data/curriculum';
import { X, Layers, ChevronRight, Check } from 'lucide-react';

interface CourseMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStageId: StageId;
  currentActivityIndex: number;
  onSelectStage: (stageId: StageId, activityIndex?: number) => void;
  language: Language;
}

export const CourseMenuModal: React.FC<CourseMenuModalProps> = ({
  isOpen,
  onClose,
  currentStageId,
  currentActivityIndex,
  onSelectStage,
  language
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-100 bg-[#F6F6F6] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#26B7FF] flex items-center justify-center text-white">
              <Layers size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#333333]">
                {language === 'ZH' ? '课程阶段导航' : 'Course Curriculum Stages'}
              </h3>
              <p className="text-xs text-[#666666]">
                {language === 'ZH' ? '教师专属：随时跳转至任意学习阶段' : 'Teacher Override: Jump directly to any stage or activity'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Stages List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {STAGE_ORDER.map((stageId) => {
            const stage: CourseStage = STAGES[stageId];
            const isCurrent = stageId === currentStageId;

            return (
              <div
                key={stageId}
                className={`rounded-2xl border transition-all p-4.5 ${
                  isCurrent
                    ? 'border-[#26B7FF] bg-blue-50/50 shadow-xs'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="text-base font-bold text-[#333333]">
                        {language === 'ZH' ? stage.titleZH : stage.titleEN}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-100 text-[#666666]">
                        {stage.approxGradeBand}
                      </span>
                      {isCurrent && (
                        <span className="flex items-center gap-1 text-xs font-bold text-[#26B7FF]">
                          <Check size={14} />
                          {language === 'ZH' ? '当前进行中' : 'Active'}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[#666666] line-clamp-1">
                      {language === 'ZH' ? stage.conceptIntroZH : stage.conceptIntroEN}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      onSelectStage(stageId, 0);
                      onClose();
                    }}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isCurrent
                        ? 'bg-[#26B7FF] text-white shadow-xs'
                        : 'bg-white border border-gray-300 text-[#333333] hover:bg-gray-100'
                    }`}
                  >
                    {language === 'ZH' ? '进入阶段' : 'Start Stage'}
                    <ChevronRight size={14} />
                  </button>
                </div>

                {/* Individual activities for current stage */}
                {isCurrent && (
                  <div className="mt-4 pt-3 border-t border-blue-100 grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {stage.activities.map((act, actIdx) => (
                      <button
                        key={act.id}
                        onClick={() => {
                          onSelectStage(stageId, actIdx);
                          onClose();
                        }}
                        className={`text-left p-2.5 rounded-xl text-xs flex items-center justify-between border transition-all ${
                          actIdx === currentActivityIndex
                            ? 'bg-white font-bold border-[#26B7FF] text-[#26B7FF]'
                            : 'bg-white/70 hover:bg-white text-[#666666] border-transparent hover:border-gray-200'
                        }`}
                      >
                        <span className="truncate pr-2">
                          {actIdx + 1}. {language === 'ZH' ? act.titleZH : act.titleEN}
                        </span>
                        <span className="uppercase text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-[#666666] shrink-0 font-medium">
                          {act.type.replace('_', ' ')}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#F6F6F6] border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-white border border-gray-200 hover:bg-gray-100 text-sm font-semibold text-[#333333]"
          >
            {language === 'ZH' ? '取消' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  );
};
