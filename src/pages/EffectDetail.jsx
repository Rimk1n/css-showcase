import React, { useMemo } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { EFFECTS } from '../data/effects.js'
import { CodeBlock } from '../components/CodeBlock.jsx'
import '../styles/detail.css'

export default function EffectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const effect = useMemo(() => EFFECTS.find(e => e.id === id), [id])
  if (!effect) return <div>Эффект не найден</div>
  return (
    <div className="effect-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <span className="back-arrow">←</span> Назад
      </button>
      <h1 className="detail-title">{effect.name}</h1>
      <p className="detail-desc">{effect.description}</p>
      <section className="detail-demo">
        <div className="demo-live" dangerouslySetInnerHTML={{ __html: effect.demoHTML }} />
      </section>
      <section className="code-section">
        <h3>CSS</h3>
        <CodeBlock css={effect.codeCSS} html={effect.codeHTML} />
        <div className="note">Как работает: { /* кратко объяснение placeholder */ "Подсветка - Prism, эффекты на `transform`/`opacity` и градиенты." }</div>
      </section>
      <section className="external-actions">
        <button className="ghost" onClick={() => openCodePen(effect)}>Открыть в CodePen</button>
      </section>
    </div>
  )
}

function openCodePen(effect) {
  const payload = {
    html: effect.demoHTML || '',
    css: effect.codeCSS || '',
    title: effect.name
  }
  const w = window.open('', '_blank')
  if (!w) return
  const form = w.document.createElement('form')
  form.method = 'POST'
  form.action = 'https://codepen.io/pen/define'
  form.target = '_blank'
  const input = w.document.createElement('input')
  input.type = 'hidden'
  input.name = 'data'
  input.value = JSON.stringify(payload)
  form.appendChild(input)
  w.document.body.appendChild(form)
  form.submit()
  form.remove()
}
