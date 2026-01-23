import React from 'react'

export default function Home({ onSingle, onMulti }) {
  return (
    <div id="game-container">
      <div className="game-header">
        <h1><i className="fas fa-brain"></i> NEUROCOASTER</h1>
        <div className="subtitle">Your Character Changes with Each Action Potential Stage!</div>
        <div className="mode-selection">
          <button className="mode-btn" onClick={onSingle}><i className="fas fa-user"></i> Single Player</button>
          <button className="mode-btn" onClick={onMulti}><i className="fas fa-users"></i> Multiplayer (2 Players)</button>
        </div>
      </div>
    </div>
  )
}
