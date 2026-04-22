import React, { useMemo, useState } from 'react'
import EFFECTS from '../data/effects.js'
import EffectCard from '../components/EffectCard.jsx'
import { Link } from 'react-router-dom'

export default function Home() {
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')

  const categories = useMemo(() => {
    const c = new Set(['All'])
    EFFECTS.forEach(e => c.add(e.category))
    return Array.from(c)
  }, [])

  const filtered = EFFECTS.filter(e => (category === 'All' || e.category === category) && (
    e.name.toLowerCase().includes(query.toLowerCase()) || e.description.toLowerCase().includes(query.toLowerCase())
  ))

  return (
    <section>
      <div className="intro">
        <h2>Современные CSS-эффекты</h2>
        <p>Каталог креативных CSS-эффектов с живыми примерами и готовым кодом. Фильтры по категориям и возможность копировать код.</p>
      </div>
      <div className="filters">
        <span>Категория:</span>
        {categories.map((c) => (
          <button key={c} className={category === c ? 'chip active' : 'chip'} onClick={() => setCategory(c)}>{c}</button>
        ))}
        <div className="spacer"/>
        <input className="search" placeholder="Поиск по названию..." value={query} onChange={e => setQuery(e.target.value)} />
      </div>
      <section className="grid">
        {filtered.map(e => (
          <EffectCard key={e.id} effect={e} />
        ))}
      </section>
      <div className="cta-footer">Новые эффекты добавляются регулярно — следите за обновлениями!</div>
    </section>
  )
}
