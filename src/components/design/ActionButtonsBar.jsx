import React from 'react'
export default function ActionButtonsBar({ onMyelin, onBoost, onSkip, onHint, onPauseToggle, onMainMenu }) {
  return (
    <div id="action-buttons">
      <button className="action-btn" onClick={onMyelin}><i className="fas fa-shield-alt"></i> Add Myelin</button>
      <button className="action-btn" onClick={onBoost}><i className="fas fa-bolt"></i> Channel Boost</button>
      <button className="action-btn" onClick={onSkip}><i className="fas fa-forward"></i> Skip Question</button>
      <button className="action-btn" onClick={onHint}><i className="fas fa-lightbulb"></i> Get Hint</button>
      <button className="action-btn" onClick={onPauseToggle}><i className="fas fa-pause"></i> Pause Game</button>
      <button className="action-btn" onClick={onMainMenu}><i className="fas fa-home"></i> Main Menu</button>
    </div>
  )
}
