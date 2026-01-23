import React from 'react'
export default function AchievementPopup({ visible, title, desc, onClose }) {
  if (!visible) return null
  return (
    <div className="achievement-popup" id="achievement-popup" style={{ display: 'block' }}>
      <div className="achievement-icon"><i className="fas fa-trophy"></i></div>
      <div className="achievement-title" id="achievement-title">{title}</div>
      <div className="achievement-desc" id="achievement-desc">{desc}</div>
      <button className="continue-btn" onClick={onClose}><i className="fas fa-play"></i> Continue</button>
    </div>
  )
}
