import React from 'react'
import { STAGES } from '../../design/stages.js'

export default function ProgressSection({ currentStageIndex, stageProgress, questionsNeeded, totalQuestions, totalCorrect }) {
  const pct = Math.round((stageProgress / Math.max(1, questionsNeeded)) * 100)
  return (
    <div id="progress-section">
      <div className="progress-label">
        <span><i className="fas fa-wave-square"></i> Action Potential Progress</span>
        <span id="progress-percent">{pct}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" id="progress-fill" style={{ width: `${pct}%` }}></div>
      </div>
      <div className="progress-details">
        <div className="detail-item">
          <i className="fas fa-question-circle"></i>
          <span>Questions:</span>
          <strong id="questions-count">{totalQuestions}</strong>
        </div>
        <div className="detail-item">
          <i className="fas fa-check-circle"></i>
          <span>Correct:</span>
          <strong id="correct-count">{totalCorrect}</strong>
        </div>
        <div className="detail-item">
          <i className="fas fa-bullseye"></i>
          <span>Current Stage:</span>
          <strong id="current-stage">{STAGES[currentStageIndex]?.title || STAGES[0].title}</strong>
        </div>
      </div>
    </div>
  )
}
