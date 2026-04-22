import React from 'react'
import { Link } from 'react-router-dom'
import { EFFECTS } from '../data/effects.js'

function useFavs() {
  const raw = typeof window !== 'undefined' ? localStorage.getItem('css-showcase-favorites') : '[]'
  try { return JSON.parse(raw) } catch { return [] }
}

export default function Favorites() {
  const favs = useFavs()
  if (!Array.isArray(favs) || favs.length === 0) {
    return (
      <section>
        <h2>Избранное</h2>
        <p>Пока ничего не добавлено. Откройте каждую карточку и добавьте в избранное.</p>
        <Link to="/">Вернуться к каталогам</Link>
      </section>
    )
  }
  const items = EFFECTS.filter(e => favs.includes(e.id))
  return (
    <section>
      <h2>Избранное</h2>
      {items.length === 0 ? (
        <p>Избранное пусто. Добавляйте эффекты на главной странице.</p>
      ) : (
        <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '12px' }}>
          {items.map(e => (
            <div key={e.id} className="effect-card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div className="card-preview" style={{ height: 90, alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#fff' }}>{e.name}</span>
              </div>
              <div className="card-body" style={{ padding: 6 }}>
                <div className="card-title" style={{ fontSize: 14 }}>{e.name}</div>
                <div className="card-desc" style={{ fontSize: 12 }}>{e.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Link to="/">Вернуться к каталогу</Link>
    </section>
  )
}
