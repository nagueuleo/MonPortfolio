/* Animations JavaScript partagées. Appelées via Anim.init() après le rendu du contenu. */
window.Anim = (function () {
  const $ = (s) => document.querySelector(s), $$ = (s) => [...document.querySelectorAll(s)];

  function typewriter() {            // rôle qui s’écrit et s’efface
    const el = $('#typed'); if (!el) return;
    let r = 0, i = 0, del = false;
    (function tick() {
      const w = DATA.roles[r]; el.textContent = w.slice(0, i);
      if (!del && i === w.length) { del = true; return setTimeout(tick, 1800); }
      if (del && i === 0) { del = false; r = (r + 1) % DATA.roles.length; }
      i += del ? -1 : 1; setTimeout(tick, del ? 35 : 70);
    })();
  }

  function codeCard() {              // carte de code qui apparaît ligne par ligne
    const pre = $('#code'); if (!pre) return;
    const lines = [`<span class="k">const</span> profil = {`, `  nom: <span class="s">"${DATA.name}"</span>,`, `  metier: <span class="s">"Data Analyst"</span>,`, `  outils: [<span class="s">"SQL"</span>, <span class="s">"Python"</span>],`, `  experience: <span class="p">3</span>, <span class="c">// ans</span>`, `  disponible: <span class="p">true</span>`, `};`];
    pre.innerHTML = lines.map(l => `<span class="l">${l}</span>`).join('');
    $$('#code .l').forEach((l, i) => setTimeout(() => l.classList.add('on'), 500 + i * 260));
  }

  function onView() {                // compteurs + barres de compétences au scroll
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return; io.unobserve(e.target);
      if (e.target.dataset.n) {
        const n = +e.target.dataset.n, t0 = performance.now();
        (function f(t) { const k = Math.min((t - t0) / 1400, 1); e.target.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))) + (e.target.dataset.s || ''); if (k < 1) requestAnimationFrame(f); })(t0);
      } else e.target.style.width = e.target.dataset.w + '%';
    }), { threshold: .4 });
    $$('[data-n],.progress-bar').forEach(x => io.observe(x));
  }

  function navbar() {                // barre plus opaque après scroll
    const nav = $('.navbar'); if (!nav) return;
    const f = () => nav.classList.toggle('scrolled', scrollY > 30); f(); addEventListener('scroll', f, { passive: true });
  }

  function backToTop() {             // bouton retour en haut
    const b = document.createElement('button');
    b.className = 'btt'; b.setAttribute('aria-label', 'Retour en haut'); b.innerHTML = '<i class="bi bi-arrow-up"></i>';
    b.onclick = () => scrollTo({ top: 0, behavior: 'smooth' }); document.body.appendChild(b);
    addEventListener('scroll', () => b.classList.toggle('show', scrollY > 500), { passive: true });
  }

  return { init() { typewriter(); codeCard(); onView(); navbar(); backToTop(); } };
})();
