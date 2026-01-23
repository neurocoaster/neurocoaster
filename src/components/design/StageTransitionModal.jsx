import React from 'react'
export default function StageTransitionModal({ visible, fromIcon, fromColor, title, toLabel, toColor, onClose }) {
  if (!visible) return null
  return (
    <div className="stage-progress-animation" id="stage-progress-animation" style={{ display: 'block', borderColor: fromColor, boxShadow: `0 0 50px ${fromColor}` }}>
      <div className="stage-transition-icon" id="stage-transition-icon" style={{ color: fromColor }}>
        <i className={fromIcon}></i> &nbsp;→&nbsp; <i className="fas fa-arrow-right"></i>
      </div>
      <div className="stage-transition-title" id="stage-transition-title" style={{ color: fromColor }}>{title}</div>
      <div className="stage-transition-desc" id="stage-transition-desc" style={{ color: toColor }}>Advancing to {toLabel}...</div>
      <button className="continue-btn" onClick={onClose}><i className="fas fa-play"></i> Continue</button>
    </div>
  )
}
