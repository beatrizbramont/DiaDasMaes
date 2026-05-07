(function initPetals() {
  const field  = document.getElementById('petalField');
  const colors = ['#f2c4ce','#e8a0b0','#f9dde3','#d4a96a','#ffe0e8','#fbc4d0'];
  const total  = 32;
 
  for (let i = 0; i < total; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    Object.assign(p.style, {
      left:              `${Math.random() * 100}%`,
      width:             `${10 + Math.random() * 10}px`,
      height:            `${14 + Math.random() * 14}px`,
      background:        colors[Math.floor(Math.random() * colors.length)],
      animationDuration: `${6 + Math.random() * 10}s`,
      animationDelay:    `${Math.random() * 12}s`,
      opacity:           '0',
      transform:         `rotate(${Math.random() * 360}deg)`,
    });
    field.appendChild(p);
  }
})();
 
// ── Scroll reveal ──
(function initReveal() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
})();
 
// ── Star sparkle on hover (fefe section) ──
(function initStarSparkle() {
  const stars = document.querySelectorAll('.star-row i');
  stars.forEach((star, i) => {
    star.addEventListener('mouseenter', () => {
      stars.forEach((s, j) => {
        s.style.transform   = j <= i ? 'scale(1.4) rotate(-10deg)' : 'scale(1)';
        s.style.transition  = `transform .2s ${j * 0.05}s ease`;
        s.style.color       = j <= i ? '#f5c518' : 'var(--gold)';
      });
    });
    star.addEventListener('mouseleave', () => {
      stars.forEach((s) => {
        s.style.transform = 'scale(1) rotate(0)';
        s.style.color     = 'var(--gold)';
      });
    });
  });
})();