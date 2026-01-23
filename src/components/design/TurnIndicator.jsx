import React from 'react'
export default function TurnIndicator({ visible, color, text }) {
  const style = { display: visible ? 'flex' : 'none' }
  return (
    <div className="turn-indicator" id="turn-indicator" style={style}>
      <div className="turn-player-color" id="turn-player-color" style={{ backgroundColor: color }}></div>
      <div className="turn-text" id="turn-text">{text}</div>
    </div>
  )
}
