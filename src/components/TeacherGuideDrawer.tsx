import React from 'react';
import { Language, TeacherGuide } from '../types';
import { X, HelpCircle, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';

interface TeacherGuideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  guide: TeacherGuide;
  language: Language;
}

export const TeacherGuideDrawer: React.FC<TeacherGuideDrawerProps> = ({
  isOpen,
  onClose,
  guide,
  language
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/25 backdrop-blur-[2px] transition-all">
      <div className="w-full max-w-md h-full bg-white shadow-2xl flex flex-col justify-between border-l border-gray-200 animate-in slide-in-from-right duration-200">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#F6F6F6]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#26B7FF]/15 rounded-lg text-[#26B7FF]">
              <HelpCircle size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#333333]">
                {language === 'ZH' ? '教师授课指引' : 'Teacher Guide'}
              </h3>
              <span className="text-xs font-semibold text-[#666666] tracking-wide">
                {guide.gradeRef}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full text-gray-500 hover:text-gray-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Goal */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-[#26B7FF] uppercase tracking-wider">
              {language === 'ZH' ? '教学目标' : 'Teaching Goal'}
            </span>
            <p className="text-sm font-medium text-[#333333] leading-relaxed">
              {language === 'ZH' ? guide.goalZH : guide.goalEN}
            </p>
          </div>

          {/* Ask */}
          <div className="p-4 bg-blue-50/70 border border-blue-100 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-[#26B7FF]">
              <Lightbulb size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">
                {language === 'ZH' ? '提问启发 (Ask)' : 'Teacher Prompt (Ask)'}
              </span>
            </div>
            <p className="text-sm font-semibold text-[#333333]">
              "{language === 'ZH' ? guide.askZH : guide.askEN}"
            </p>
          </div>

          {/* Listen For */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-100 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-600">
              <CheckCircle2 size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">
                {language === 'ZH' ? '倾听要点 (Listen For)' : 'Listen For'}
              </span>
            </div>
            <p className="text-sm font-medium text-[#333333]">
              {language === 'ZH' ? guide.listenForZH : guide.listenForEN}
            </p>
          </div>

          {/* Common Mistake */}
          <div className="p-4 bg-amber-50/70 border border-amber-100 rounded-xl space-y-1.5">
            <div className="flex items-center gap-2 text-amber-600">
              <AlertTriangle size={18} />
              <span className="text-xs font-bold uppercase tracking-wider">
                {language === 'ZH' ? '常见误区 (Common Mistake)' : 'Common Mistake'}
              </span>
            </div>
            <p className="text-sm font-medium text-[#333333]">
              {language === 'ZH' ? guide.commonMistakeZH : guide.commonMistakeEN}
            </p>
          </div>

          {/* Follow-Up */}
          <div className="space-y-1.5">
            <span className="text-xs font-bold text-[#666666] uppercase tracking-wider">
              {language === 'ZH' ? '追问深化 (Follow-Up Question)' : 'Follow-Up Question'}
            </span>
            <p className="text-sm font-medium text-[#333333] leading-relaxed">
              "{language === 'ZH' ? guide.followUpZH : guide.followUpEN}"
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-[#F6F6F6] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-[#333333] hover:bg-black text-white rounded-xl text-sm font-semibold transition-colors"
          >
            {language === 'ZH' ? '关闭指引' : 'Close Guide'}
          </button>
        </div>
      </div>
    </div>
  );
};
