import React, { useEffect, useRef, useState } from 'react'
import { STAGES, STAGE_APPEARANCE } from '../../design/stages.js'

export default function TrackCanvas({ currentStageIndex, players }) {
  const canvasRef = useRef(null)
  const [trackPoints, setTrackPoints] = useState([])

  useEffect(() => {
    function buildTrack() {
      const canvas = canvasRef.current
      if (!canvas) return
      const parent = canvas.parentElement
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight

      const width = canvas.width
      const height = canvas.height
      const baselineY = height * 0.7
      const amplitude = height * 0.3

      const points = []
      for (let x = 50; x < width * 0.2; x += 10) points.push({ x, y: baselineY, stage: 'resting' })
      for (let i = 0; i < 20; i++) { const x = width * 0.2 + (i * 15); const progress = i / 20; const y = baselineY - amplitude * progress; points.push({ x, y, stage: 'depolarizing' }) }
      for (let i = 0; i < 5; i++) { const x = width * 0.2 + 300 + (i * 10); points.push({ x, y: baselineY - amplitude, stage: 'peak' }) }
      for (let i = 0; i < 25; i++) { const x = width * 0.2 + 350 + (i * 12); const progress = i / 25; const y = baselineY - amplitude + (amplitude * 0.8 * progress); points.push({ x, y, stage: 'repolarizing' }) }
      for (let i = 0; i < 30; i++) { const x = width * 0.2 + 650 + (i * 8); const progress = i / 30; const y = baselineY + (amplitude * 0.1 * progress); points.push({ x, y, stage: 'hyperpolarizing' }) }
      setTrackPoints(points)
    }
    buildTrack()
    window.addEventListener('resize', buildTrack)
    return () => window.removeEventListener('resize', buildTrack)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || trackPoints.length < 2) return
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let start = 0
    let curStage = trackPoints[0].stage
    const flush = (s, e, stageName) => {
      if (e <= s) return
      const st = STAGES.find(x => x.name === stageName)
      if (!st) return
      const isCurrent = stageName === STAGES[currentStageIndex]?.name
      ctx.beginPath()
      ctx.moveTo(trackPoints[s].x, trackPoints[s].y)
      for (let i = s + 1; i <= e; i++) ctx.lineTo(trackPoints[i].x, trackPoints[i].y)
      ctx.strokeStyle = st.color
      ctx.globalAlpha = isCurrent ? 1 : 0.5
      ctx.lineWidth = isCurrent ? 8 : 4
      ctx.lineJoin = 'round'
      ctx.lineCap = 'round'
      ctx.stroke()
      ctx.globalAlpha = 1
      const mid = Math.floor((s + e) / 2)
      if (trackPoints[mid]) { ctx.fillStyle = st.color; ctx.font = 'bold 14px Arial'; ctx.textAlign = 'center'; ctx.fillText(st.title, trackPoints[mid].x, trackPoints[mid].y - 20) }
    }
    for (let i = 1; i < trackPoints.length; i++) {
      if (trackPoints[i].stage !== curStage) { flush(start, i - 1, curStage); start = i - 1; curStage = trackPoints[i].stage }
    }
    flush(start, trackPoints.length - 1, curStage)
  }, [trackPoints, currentStageIndex])

  const getPointForPlayer = (stageName, progress) => {
    const seg = trackPoints.filter(p => p.stage === stageName)
    if (!seg.length) return null
    const idx = Math.max(0, Math.min(seg.length - 1, Math.floor(progress * (seg.length - 1))))
    return seg[idx]
  }

  return (
    <div id="action-potential-track">
      <canvas id="apCanvas" ref={canvasRef} />
      <div id="players-on-track">
        {players.map((p, i) => {
          const point = getPointForPlayer(p.currentStage, p.stageProgress || 0)
          if (!point) return null
          const ap = STAGE_APPEARANCE[p.currentStage] || { color: '#fff', icon: 'fas fa-circle', anim: 'gentle-pulse' }
          const size = ap.size || 60
          return (
            <div key={p.name + i} style={{ position: 'absolute', left: `${point.x - size/2}px`, top: `${point.y - size/2}px`, width: `${size}px`, height: `${size}px`, filter: p.isActive ? `drop-shadow(0 0 15px ${ap.color}) brightness(1.15)` : 'none', pointerEvents: 'none' }} title={`${p.name}`}>
              <div className="stage-character" style={{ width: '100%', height: '100%', borderRadius: '50%', background: ap.color, border: '3px solid white', boxShadow: `0 0 25px ${ap.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: `${Math.max(18, size/3)}px`, animation: `${ap.anim} 1.2s infinite` }}>
                <i className={ap.icon}></i>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
