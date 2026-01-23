import React from 'react'
import TrackCanvas from '../components/design/TrackCanvas.jsx'
import PhaseIndicators from '../components/design/PhaseIndicators.jsx'
import PlayerStageDisplay from '../components/design/PlayerStageDisplay.jsx'
import ProgressSection from '../components/design/ProgressSection.jsx'
import ActivePlayerPanel from '../components/design/ActivePlayerPanel.jsx'
import QuestionCardDesign from '../components/design/QuestionCardDesign.jsx'
import ActionButtonsBar from '../components/design/ActionButtonsBar.jsx'
import TurnIndicator from '../components/design/TurnIndicator.jsx'
import StageTransitionModal from '../components/design/StageTransitionModal.jsx'
import AchievementPopup from '../components/design/AchievementPopup.jsx'
import { STAGES, STAGE_APPEARANCE } from '../design/stages.js'

export default function Board({
  modeLabel,
  players,
  currentPlayerIndex,
  currentStageIndex,
  stageProgress,
  totalQuestions,
  totalCorrect,
  question,
  onAnswer,
  onMyelin, onBoost, onSkip, onHint, onPauseToggle, onMainMenu,
  showTurnIndicator,
  stageTransition,
  achievement,
  onCloseAchievement,
  onCloseStageTransition,
}) {
  const currentPlayer = players[currentPlayerIndex]
  const questionsNeeded = STAGES[currentStageIndex]?.questionsNeeded ?? 3

  return (
    <div id="game-container">
      <div className="game-header">
        <h1><i className="fas fa-brain"></i> NEUROCOASTER</h1>
        <div className="subtitle">Your Character Changes with Each Action Potential Stage!</div>
        {modeLabel && (
          <div className="mode-selection">
            <button className="mode-btn" onClick={onMainMenu}><i className="fas fa-home"></i> {modeLabel}</button>
          </div>
        )}
      </div>

      <div id="game-board">
        <div className="board-game-layout">
          <div style={{ position: 'relative' }}>
            <TrackCanvas
              currentStageIndex={currentStageIndex}
              players={players.map((p, i) => ({ ...p, isActive: i === currentPlayerIndex }))}
            />
            <PhaseIndicators currentStageIndex={currentStageIndex} />
            <PlayerStageDisplay players={players} />
            <ProgressSection
              currentStageIndex={currentStageIndex}
              stageProgress={stageProgress}
              questionsNeeded={questionsNeeded}
              totalQuestions={totalQuestions}
              totalCorrect={totalCorrect}
            />
          </div>

          <div className="game-board-panel">
            <ActivePlayerPanel player={currentPlayer} currentStageIndex={currentStageIndex} />
            <QuestionCardDesign
              topicLabel={STAGES[currentStageIndex]?.title || 'Stage'}
              stageIndex={currentStageIndex}
              totalStages={STAGES.length}
              question={question}
              onAnswer={onAnswer}
            />
            <ActionButtonsBar
              onMyelin={onMyelin}
              onBoost={onBoost}
              onSkip={onSkip}
              onHint={onHint}
              onPauseToggle={onPauseToggle}
              onMainMenu={onMainMenu}
            />
          </div>
        </div>
      </div>

      <TurnIndicator visible={showTurnIndicator?.visible} color={showTurnIndicator?.color} text={showTurnIndicator?.text} />

      <StageTransitionModal
        visible={stageTransition?.visible}
        fromIcon={STAGE_APPEARANCE[STAGES[stageTransition?.fromStageIndex || 0]?.name]?.icon}
        fromColor={STAGES[stageTransition?.fromStageIndex || 0]?.color}
        title={`${STAGES[stageTransition?.fromStageIndex || 0]?.title} Complete!`}
        toLabel={STAGES[stageTransition?.toStageIndex || 0]?.title}
        toColor={STAGES[stageTransition?.toStageIndex || 0]?.color}
        onClose={onCloseStageTransition}
      />

      <AchievementPopup
        visible={achievement?.visible}
        title={achievement?.title}
        desc={achievement?.desc}
        onClose={onCloseAchievement}
      />
    </div>
  )
}
