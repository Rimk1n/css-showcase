import React, { Suspense, lazy } from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home.jsx'))
const EffectDetail = lazy(() => import('./pages/EffectDetail.jsx'))
const Favorites = lazy(() => import('./pages/Favorites.jsx'))

export default function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="logo">
            <span className="logo-icon">{ }</span>
            <span className="logo-text">CSS Showcase</span>
          </Link>
          <nav className="nav">
            <Link to="/">Главная</Link>
            <Link to="/favorites">Избранное</Link>
          </nav>
        </div>
      </header>
      <main className="container main-area">
        <Suspense fallback={<div className="loading">Загрузка...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/effect/:id" element={<EffectDetail />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  )
}
