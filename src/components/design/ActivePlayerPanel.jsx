import React from 'react'
import { STAGES, STAGE_APPEARANCE } from '../../design/stages.js'

export default function ActivePlayerPanel({ player, currentStageIndex }) {
  const stage = STAGES[currentStageIndex]
  const appearance = STAGE_APPEARANCE[stage.name]
  return (
    <div id="active-player-section">
      <div className="active-player-info">
        <div className="active-player-avatar" id="active-player-avatar" style={{ backgroundColor: appearance.color, borderColor: appearance.color, boxShadow: `0 0 30px ${appearance.color}` }}>
          <i className={appearance.icon}></i>
        </div>
        <div style={{ flex: 1, marginLeft: 15 }}>
          <h3 id="active-player-name" className="active-player-name">{player.name}</h3>
          <div className="active-player-stage" id="active-player-stage" style={{ color: appearance.color }}>
            <i className={appearance.icon}></i> <span>{stage.title} ({stage.voltage} mV)</span>
          </div>
        </div>
        <div className="player-score">
          <div className="score-value" id="active-player-score" style={{ color: appearance.color }}>{stage.voltage}</div>
          <div className="score-label">Membrane Potential (mV)</div>
        </div>
      </div>

      <div className="player-stats-grid">
        <div className="player-stat" style={{ borderColor: '#ff5555' }}>
          <div className="stat-icon"><i className="fas fa-door-closed"></i></div>
          <div className="stat-label">Na+ Channels</div>
          <div className="stat-value" id="na-channels">{stage.naChannels.charAt(0).toUpperCase() + stage.naChannels.slice(1)}</div>
        </div>
        <div className="player-stat" style={{ borderColor: '#55ff55' }}>
          <div className="stat-icon"><i className="fas fa-door-closed"></i></div>
          <div className="stat-label">K+ Channels</div>
          <div className="stat-value" id="k-channels">{stage.kChannels.charAt(0).toUpperCase() + stage.kChannels.slice(1)}</div>
        </div>
        <div className="player-stat" style={{ borderColor: '#00ffaa' }}>
          <div className="stat-icon"><i className="fas fa-tachometer-alt"></i></div>
          <div className="stat-label">Conduction Speed</div>
          <div className="stat-value" id="conduction-speed">{(player.speed ?? 1.0).toFixed(1)}x</div>
        </div>
        <div className="player-stat" style={{ borderColor: '#55aaff' }}>
          <div className="stat-icon"><i className="fas fa-fire"></i></div>
          <div className="stat-label">Correct Streak</div>
          <div className="stat-value" id="current-streak" style={{ color: (player.currentStreak ?? 0) >= 3 ? '#ffaa00' : '#ffffff' }}>{player.currentStreak ?? 0}</div>
        </div>
      </div>
    </div>
  )
}
