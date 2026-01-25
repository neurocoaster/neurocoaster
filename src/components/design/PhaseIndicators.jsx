import React from 'react'
import { STAGES } from '../../design/stages.js'

export default function PhaseIndicators({ currentStageIndex }) {
  return (
    <div className="phase-indicators" id="phase-indicators">
      {STAGES.map((s, idx) => (
        <div
          key={s.name}
          className={`phase-indicator ${idx === currentStageIndex ? 'active' : ''}`}
          id={`phase-${s.name}`}
          style={{ borderColor: s.color, color: s.color }}
        >
          <i className={`phase-icon ${s.icon}`} aria-hidden="true" />
          <span className="phase-title">{s.title}</span>
        </div>
      ))}
    </div>
  )
}