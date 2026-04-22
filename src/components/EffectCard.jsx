import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { EFFECTS } from '../data/effects.js'

// Simple helper localStorage favorites
const favKey = 'css-showcase-favorites'
function isFav(id) {
  try { const s = localStorage.getItem(favKey); return s ? JSON.parse(s).includes(id) : false } catch { return false }
}
function toggleFav(id) {
  const current = isFav(id)
  let arr = []
  try { const s = localStorage.getItem(favKey); arr = s ? JSON.parse(s) : [] } catch {}
  if (current) arr = arr.filter(x => x !== id); else arr = [...arr, id]
  localStorage.setItem(favKey, JSON.stringify(arr))
  return !current
}

export default function EffectCard({ effect }) {
  const navigate = useNavigate()
  const [hue, setHue] = useState(200)
  const [fav, setFav] = useState(isFav(effect.id))

  function handleOpen() {
    navigate(`/effect/${effect.id}`)
  }

  function handleFav() {
    const next = toggleFav(effect.id)
    setFav(next)
  }

  // Live preview areas per effect id - only glow-button uses hue
  const showHue = effect.id === 'glow-button'
  function renderPreview() {
    switch (effect.id) {
      case 'glow-button':
        return (
          <button className="demo-btn glow-btn" style={{ '--h': hue }}>{'Glow'}</button>
        )
      case 'gradient-move':
        return <div className="grad-demo" />
      case 'glow-border':
        return <div className="glow-border-card">Glow</div>
      case 'neon-border':
        return <div className="neon-card-pulse">Hover me</div>
      case 'liquid-button':
        return <button className="liquid-btn">Hover</button>
      case 'text-gradient':
        return <h3 className="text-gradient-demo">Gradient Text</h3>
      default:
        return null
    }
  }

  return (
    <div className="effect-card">
      <div className={`card-preview ${showHue ? '' : 'no-slider'}`} onMouseMove={() => {}} style={{ padding: 12 }}>
        {renderPreview()}
        {showHue && (
          <div className="quick-controls" aria-label="hue-controls">
            <label>Hue</label>
            <input type="range" min="0" max="360" value={hue} onChange={(e) => setHue(e.target.value)} />
          </div>
        )}
      </div>
      <div className="card-body">
        <div className="card-title">{effect.name}</div>
        <div className="card-desc">{effect.description}</div>
        <div className="card-actions">
          <button className="ghost" onClick={handleOpen}>Открыть</button>
          <button className="ghost" onClick={handleFav}>{fav ? '★ В избранное' : '☆ В избранное'}</button>
        </div>
      </div>
    </div>
  )
}
