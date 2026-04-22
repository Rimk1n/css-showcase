// Каталог эффектов: базовые данные, HTML и CSS-образцы, краткое описание
export const EFFECTS = [
  {
    id: 'glow-button',
    name: 'Glow Button',
    category: 'Buttons',
    description: 'Кнопка с ярким glow и hue-rotate эффектами',
    popular: true,
    demoHTML: '<button class="demo-btn glow-btn">Glow</button>',
    codeCSS: `/* Glow Button CSS */
.glow-btn {
  --h: 180; /* hue base */
  background: linear-gradient(135deg, hsl(var(--h), 90%, 60%), hsl(calc(var(--h) + 60), 90%, 60%));
  color: #fff; border: none; padding: 12px 22px; border-radius: 12px;
  box-shadow: 0 0 20px hsl(var(--h), 100%, 60%);
  cursor: pointer; transition: transform .2s;
}
.glow-btn:hover { transform: translateY(-2px) scale(1.03); }`,
    codeHTML: `<button class="glow-btn">Glow</button>`,
  },
  {
    id: 'gradient-move',
    name: 'Moving Gradient Background',
    category: 'Backgrounds',
    description: 'Анимация градиента, плавно перемещающая цвета',
    popular: true,
    demoHTML: '<div class="grad-demo"></div>',
    codeCSS: `/* Moving Gradient Background */
.grad-demo {
  height: 120px; border-radius: 14px;
  background: linear-gradient(120deg, #ff4d4d, #ffd166, #4ecdc4, #4d5fff);
  background-size: 300% 300%;
  animation: gradMove 6s ease infinite;
}
@keyframes gradMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
    codeHTML: `<div class="grad-demo"></div>`,
  },
  {
    id: 'glow-border',
    name: 'Glow Border Card',
    category: 'Cards',
    description: 'Карточка с анимированной светящейся границей',
    popular: false,
    demoHTML: '<div class="glow-border-card">Glow</div>',
    codeCSS: `/* Glow Border Card */
.glow-border-card {
  padding: 20px; border-radius: 16px;
  background: #14141a; color: #fff;
  position: relative; overflow: hidden;
  border: 2px solid transparent;
  background-clip: padding-box;
}
.glow-border-card::before {
  content: ''; position: absolute;
  inset: 0; border-radius: 14px;
  padding: 2px; background: linear-gradient(135deg, #f472b6, #a855f7, #06b6d4);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
  animation: borderRotate 3s linear infinite;
}
@keyframes borderRotate {
  0% { background: linear-gradient(135deg, #f472b6, #a855f7, #06b6d4); }
  33% { background: linear-gradient(135deg, #a855f7, #06b6d4, #f472b6); }
  66% { background: linear-gradient(135deg, #06b6d4, #f472b6, #a855f7); }
  100% { background: linear-gradient(135deg, #f472b6, #a855f7, #06b6d4); }
}`,
    codeHTML: `<div class="glow-border-card">Glow</div>`,
  },
  {
    id: 'neon-border',
    name: 'Neon Border Card',
    category: 'Cards',
    description: 'Неоновая граница с пульсирующим свечением',
    popular: true,
    demoHTML: '<div class="neon-card-pulse">Hover me</div>',
    codeCSS: `/* Neon Border Card with Pulse */
.neon-card-pulse {
  padding: 18px 24px; border-radius: 14px;
  background: #0b0b0f; color: #fff;
  border: 2px solid #0ff;
  box-shadow: 0 0 10px rgba(0,255,255,0.4), inset 0 0 10px rgba(0,255,255,0.1);
  animation: neonPulse 2s ease-in-out infinite;
}
.neon-card-pulse:hover {
  animation: none;
  box-shadow: 0 0 25px rgba(0,255,255,0.9), inset 0 0 15px rgba(0,255,255,0.3);
}
@keyframes neonPulse {
  0%, 100% { border-color: rgba(0,255,255,0.6); box-shadow: 0 0 10px rgba(0,255,255,0.4); }
  50% { border-color: rgba(0,255,255,1); box-shadow: 0 0 20px rgba(0,255,255,0.8); }
}`,
    codeHTML: `<div class="neon-card-pulse">Hover me</div>`,
  },
  {
    id: 'liquid-button',
    name: 'Liquid Button',
    category: 'Buttons',
    description: 'Кнопка с эффектом жидкой пульсации при наведении',
    popular: false,
    demoHTML: '<button class="liquid-btn">Hover</button>',
    codeCSS: `/* Liquid Button */
.liquid-btn {
  padding: 14px 28px; border-radius: 50px;
  background: #1e293b; color: #fff; font-weight: 600;
  border: 2px solid #475569; cursor: pointer;
  position: relative; overflow: hidden;
  transition: all 0.3s ease;
}
.liquid-btn::before {
  content: ''; position: absolute;
  width: 200%; height: 200%;
  background: radial-gradient(circle, rgba(120,255,180,0.4) 0%, transparent 60%);
  top: -50%; left: -50%;
  transform: scale(0);
  transition: transform 0.5s ease;
}
.liquid-btn:hover::before {
  transform: scale(1);
}
.liquid-btn:hover {
  border-color: #4ade80;
  box-shadow: 0 0 20px rgba(74,222,128,0.5);
}`,
    codeHTML: `<button class="liquid-btn">Hover</button>`,
  },
  {
    id: 'text-gradient',
    name: 'Text Gradient',
    category: 'Text effects',
    description: 'Градиентный цвет текста с анимацией',
    popular: true,
    demoHTML: '<h3 class="text-gradient">Gradient Text</h3>',
    codeCSS: `.text-gradient { font-weight: 800; font-size: 28px; background: linear-gradient(90deg, #ff5e5e, #ffd166, #5be7ff); -webkit-background-clip: text; background-clip: text; color: transparent; animation: hue 6s linear infinite; } @keyframes hue { 0%{ filter: hue-rotate(0deg)} 100%{ filter: hue-rotate(360deg)} }`,
    codeHTML: `<h3 class="text-gradient">Gradient Text</h3>`,
  }
]

export default EFFECTS
