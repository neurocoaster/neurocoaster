import React from 'react'
import { STAGES, STAGE_APPEARANCE } from '../../design/stages.js'

export default function PlayerStageDisplay({ players }) {
  return (
    <div className="player-stage-display" id="player-stage-display">
      {players.map((p, i) => {
        const stage = STAGES.find(s => s.name === p.currentStage) || STAGES[0]
        const appearance = STAGE_APPEARANCE[p.currentStage] || STAGE_APPEARANCE.resting
        return (
          <div key={p.name + i} className="player-stage" style={{ borderColor: p.color }}>
            <div className="stage-character" id={`player-${i}-stage-character`} style={{ background: appearance.color, boxShadow: `0 0 20px ${appearance.color}`, animation: `${appearance.anim} 1.6s infinite` }}>
              <i className={appearance.icon}></i>
            </div>
            <div className="stage-label" style={{ color: p.color }}>{p.name}</div>
            <div className="stage-voltage" style={{ color: stage.color }}>{stage.voltage} mV</div>
          </div>
        )
      })}
    </div>
  )
}
