import React, { useMemo, useState, useEffect } from 'react'

export function CodeBlock({ css, html }) {
  const [tab, setTab] = useState('css')
  const code = tab === 'css' ? css : html
  const [highlighted, setHighlighted] = useState(code)

  useEffect(() => {
    let isMounted = true
    async function loadPrism() {
      try {
        const Prism = await import('prismjs')
        await import('prismjs/themes/prism-okaidia.css')
        await import('prismjs/components/prism-css')
        await import('prismjs/components/prism-markup')
        if (!isMounted) return
        const lang = tab === 'css' ? 'css' : 'markup'
        const grammar = Prism.languages[lang]
        if (grammar) {
          setHighlighted(Prism.highlight(code, grammar, lang))
        }
      } catch (e) {
        console.error('Prism load error:', e)
      }
    }
    loadPrism()
    return () => { isMounted = false }
  }, [code, tab])

  function copyToClipboard() {
    navigator.clipboard.writeText(code).catch(() => {})
  }

  return (
    <div className="code-block">
      <div className="code-block-header">
        <div className="tabs">
          <button className={tab === 'css' ? 'active' : ''} onClick={() => setTab('css')}>CSS</button>
          <button className={tab === 'html' ? 'active' : ''} onClick={() => setTab('html')}>HTML</button>
        </div>
        <button className="copy" onClick={copyToClipboard}>Copy</button>
      </div>
      <pre aria-label={`code-${tab}`} className={`language-${tab}`}><code dangerouslySetInnerHTML={{ __html: highlighted }} /></pre>
    </div>
  )
}