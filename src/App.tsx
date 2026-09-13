import React, { useState } from 'react';
import { CourseStage, Language, StageId } from './types';
import { STAGES, getStage } from './data/curriculum';
import { determinePlacement } from './data/diagnostic';
import { HomeView } from './components/HomeView';
import { DiagnosticView } from './components/DiagnosticView';
import { PlacementView } from './components/PlacementView';
import { TeachingView } from './components/TeachingView';
import { ReviewView } from './components/ReviewView';
import { SummaryView } from './components/SummaryView';
import { TeacherGuideDrawer } from './components/TeacherGuideDrawer';
import { CourseMenuModal } from './components/CourseMenuModal';

export default function App() {
  const [currentView, setCurrentView] = useState<
    'home' | 'diagnostic' | 'placement' | 'course' | 'review' | 'summary'
  >('home');
  const [language, setLanguage] = useState<Language>('EN');
  const [currentStageId, setCurrentStageId] = useState<StageId>('level-1-build-quantity');
  const [recommendedStageId, setRecommendedStageId] = useState<StageId>('level-5-hidden-unit');
  const [placementReasonEN, setPlacementReasonEN] = useState<string>('');
  const [placementReasonZH, setPlacementReasonZH] = useState<string>('');
  const [currentActivityIndex, setCurrentActivityIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const [isTeacherGuideOpen, setIsTeacherGuideOpen] = useState(false);
  const [isCourseMenuOpen, setIsCourseMenuOpen] = useState(false);
  const [selectedUnits, setSelectedUnits] = useState<number[]>([]);
  const [interactionFeedback, setInteractionFeedback] = useState<{
    show: boolean;
    isCorrect: boolean;
    message: string;
  }>({ show: false, isCorrect: false, message: '' });

  const currentStage: CourseStage = getStage(currentStageId);
  const currentActivity = currentStage.activities[currentActivityIndex] || currentStage.activities[0];

  // Toggle Language without resetting any lesson state
  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'EN' ? 'ZH' : 'EN'));
  };

  // Diagnostic completion
  const handleDiagnosticComplete = (answers: Record<number, string>) => {
    const placement = determinePlacement(answers);
    setRecommendedStageId(placement.stageId);
    setCurrentStageId(placement.stageId);
    setPlacementReasonEN(placement.reasonEN);
    setPlacementReasonZH(placement.reasonZH);
    setCurrentView('placement');
  };

  // Start course from placement
  const handleConfirmStage = (stageId: StageId) => {
    setCurrentStageId(stageId);
    setCurrentActivityIndex(0);
    setCurrentStepIndex(0);
    setSelectedUnits([]);
    setInteractionFeedback({ show: false, isCorrect: false, message: '' });
    setCurrentView('course');
  };

  // Teacher primary control: Show Next Step -> Next Question -> Review
  const handleNextStep = () => {
    setInteractionFeedback({ show: false, isCorrect: false, message: '' });
    setSelectedUnits([]);

    const totalSteps = currentActivity.steps.length;
    if (currentStepIndex < totalSteps - 1) {
      setCurrentStepIndex((prev) => prev + 1);
    } else {
      // Activity finished
      if (currentActivityIndex < currentStage.activities.length - 1) {
        setCurrentActivityIndex((prev) => prev + 1);
        setCurrentStepIndex(0);
      } else {
        // Stage finished, go to review
        setCurrentView('review');
      }
    }
  };

  // Back step
  const handlePrevStep = () => {
    setInteractionFeedback({ show: false, isCorrect: false, message: '' });
    setSelectedUnits([]);

    if (currentStepIndex > 0) {
      setCurrentStepIndex((prev) => prev - 1);
    } else if (currentActivityIndex > 0) {
      const prevActIndex = currentActivityIndex - 1;
      setCurrentActivityIndex(prevActIndex);
      setCurrentStepIndex(currentStage.activities[prevActIndex].steps.length - 1);
    }
  };

  // Student unit tap interaction
  const handleUnitTap = (index: number) => {
    if (selectedUnits.includes(index)) {
      setSelectedUnits(selectedUnits.filter((i) => i !== index));
    } else {
      const newSelected = [...selectedUnits, index];
      setSelectedUnits(newSelected);

      // Check if matches target indices
      const interaction = currentActivity.interaction;
      if (interaction?.targetUnitIndices) {
        const hasAll = interaction.targetUnitIndices.every((i) => newSelected.includes(i));
        if (hasAll) {
          setInteractionFeedback({
            show: true,
            isCorrect: true,
            message: language === 'ZH' ? interaction.feedbackCorrectZH : interaction.feedbackCorrectEN
          });
        }
      }
    }
  };

  // Student quick choice answer
  const handleInteractionAnswer = (optionId: string) => {
    const interaction = currentActivity.interaction;
    if (!interaction || !interaction.options) return;

    const opt = interaction.options.find((o) => o.id === optionId);
    if (opt) {
      setInteractionFeedback({
        show: true,
        isCorrect: opt.isCorrect,
        message: opt.isCorrect
          ? language === 'ZH'
            ? interaction.feedbackCorrectZH
            : interaction.feedbackCorrectEN
          : language === 'ZH'
            ? '继续想想看，也可以点击下一步查看详细图解。'
            : 'Think about the relationship, or proceed to see the visual reveal.'
      });
    }
  };

  // Jump from Course Menu
  const handleSelectStageFromMenu = (stageId: StageId, activityIndex: number = 0) => {
    setCurrentStageId(stageId);
    setCurrentActivityIndex(activityIndex);
    setCurrentStepIndex(0);
    setSelectedUnits([]);
    setInteractionFeedback({ show: false, isCorrect: false, message: '' });
    setCurrentView('course');
  };

  return (
    <div className="w-full h-full bg-[#F6F6F6] text-[#333333] flex flex-col relative overflow-hidden">
      {currentView === 'home' && (
          <HomeView
            language={language}
            onStartDiagnostic={() => setCurrentView('diagnostic')}
            onOpenCourseMenu={() => setIsCourseMenuOpen(true)}
            onQuickStageStart={handleConfirmStage}
            onToggleLanguage={handleToggleLanguage}
          />
        )}

        {currentView === 'diagnostic' && (
          <DiagnosticView
            language={language}
            onComplete={handleDiagnosticComplete}
            onToggleLanguage={handleToggleLanguage}
          />
        )}

        {currentView === 'placement' && (
          <PlacementView
            recommendedStageId={recommendedStageId}
            reasonEN={placementReasonEN}
            reasonZH={placementReasonZH}
            language={language}
            onConfirmStage={handleConfirmStage}
            onToggleLanguage={handleToggleLanguage}
          />
        )}

        {currentView === 'course' && (
          <TeachingView
            key={`${currentStage.id}-${currentActivityIndex}`}
            stage={currentStage}
            activityIndex={currentActivityIndex}
            stepIndex={currentStepIndex}
            language={language}
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            onOpenTeacherGuide={() => setIsTeacherGuideOpen(true)}
            onOpenCourseMenu={() => setIsCourseMenuOpen(true)}
            onToggleLanguage={handleToggleLanguage}
            selectedUnits={selectedUnits}
            onUnitTap={handleUnitTap}
            interactionFeedback={interactionFeedback}
            onInteractionAnswer={handleInteractionAnswer}
          />
        )}

        {currentView === 'review' && (
          <ReviewView
            stageId={currentStageId}
            language={language}
            onFinishReview={() => setCurrentView('summary')}
            onToggleLanguage={handleToggleLanguage}
          />
        )}

        {currentView === 'summary' && (
          <SummaryView
            stageId={currentStageId}
            language={language}
            onRestart={() => {
              setCurrentActivityIndex(0);
              setCurrentStepIndex(0);
              setCurrentView('home');
            }}
            onExploreOther={() => setIsCourseMenuOpen(true)}
            onToggleLanguage={handleToggleLanguage}
          />
        )}

        {/* Persistent Teacher Guide Drawer */}
        <TeacherGuideDrawer
          isOpen={isTeacherGuideOpen}
          onClose={() => setIsTeacherGuideOpen(false)}
          guide={currentActivity.teacherGuide}
          language={language}
        />

        {/* Persistent Course Menu Modal */}
        <CourseMenuModal
          isOpen={isCourseMenuOpen}
          onClose={() => setIsCourseMenuOpen(false)}
          currentStageId={currentStageId}
          currentActivityIndex={currentActivityIndex}
          onSelectStage={handleSelectStageFromMenu}
          language={language}
        />
    </div>
  );
}
