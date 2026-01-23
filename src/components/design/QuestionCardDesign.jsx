import React, { useEffect, useState } from 'react'

export default function QuestionCardDesign({ topicLabel, stageIndex, totalStages = 5, question, onAnswer }) {
  const [disabled, setDisabled] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState(null)
  const [correctIdx, setCorrectIdx] = useState(null)
  useEffect(() => { setDisabled(false); setSelectedIdx(null); setCorrectIdx(null) }, [question?.id])
  function pick(i) {
    if (disabled) return
    setDisabled(true)
    setSelectedIdx(i)
    setCorrectIdx(question.correctIndex)
    const isCorrect = i === question.correctIndex
    setTimeout(() => onAnswer(i, isCorrect), 900)
  }
  return (
    <div id="question-card">
      <div className="question-header">
        <h3><i className="fas fa-question-circle"></i> Stage Challenge</h3>
        <div id="question-topic">{topicLabel}</div>
        <div className="difficulty-badge" id="difficulty-badge"><i className="fas fa-chart-line"></i> Stage {stageIndex + 1}/{totalStages}</div>
      </div>
      <div className="question-body">
        <div id="question-text">{question?.prompt || 'Get ready to begin your action potential journey!'}</div>
      </div>
      <div id="answers-grid">
        {(question?.options || []).map((opt, i) => {
          const isCorr = i === correctIdx
          const isWrongSel = selectedIdx === i && selectedIdx !== correctIdx
          const cls = `answer-btn ${disabled ? 'disabled' : ''} ${isCorr ? 'correct' : ''} ${isWrongSel ? 'wrong' : ''}`
          return <button key={i} className={cls} onClick={() => pick(i)}>{String.fromCharCode(65 + i)}. {opt}</button>
        })}
      </div>
    </div>
  )
}
