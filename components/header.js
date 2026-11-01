/* En-tête partagé : injecté dans <div id="site-header"> sur toutes les pages */
(function () {
  const host = document.getElementById('site-header'); if (!host) return;
  const ROOT = document.body.dataset.root || '', PAGE = document.body.dataset.page || '';
  // Logo : image DATA.logo si elle existe, sinon texte « VK. »
  window.logoHTML = (root, cls = '') => `<a class="logo ${cls}" href="${root}index.html" aria-label="Accueil"><img class="logo-img" src="${root}${DATA.logo}" alt="${DATA.name}" onerror="this.parentNode.innerHTML='VK<i>.</i>'"></a>`;
  const links = [['apropos','À propos','index.html#apropos'],['cv','CV','pages/cv.html'],['projets','Projets','pages/projets.html'],['certifications','Certifications','pages/certifications.html'],['contact','Contact','pages/contact.html']];
  host.innerHTML = `
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      ${logoHTML(ROOT, 'navbar-brand')}
      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="Ouvrir le menu"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav mx-auto">
          ${links.map(([k,l,u]) => `<li class="nav-item"><a class="nav-link ${(k==='apropos'?PAGE==='accueil':k===PAGE)?'active':''}" ${(k==='apropos'?PAGE==='accueil':k===PAGE)?'aria-current="page"':''} href="${ROOT}${u}">${l}</a></li>`).join('')}
        </ul>
        <div class="d-flex align-items-center gap-2 mt-3 mt-lg-0">
          <div class="dropdown">
            <button class="theme-btn" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false" aria-label="Personnaliser le thème"><i class="bi bi-sun" id="theme-ic"></i></button>
            <div class="dropdown-menu dropdown-menu-end p-3 theme-menu">
              <p class="small fw-semibold mb-2">Mode</p>
              <div class="btn-group w-100 mb-3" role="group" aria-label="Mode">
                <button type="button" class="btn btn-sm" data-mode="light"><i class="bi bi-sun me-1"></i>Clair</button>
                <button type="button" class="btn btn-sm" data-mode="dark"><i class="bi bi-moon-stars me-1"></i>Sombre</button>
              </div>
              <p class="small fw-semibold mb-2">Couleur</p>
              <div class="d-flex gap-2" id="swatches"></div>
            </div>
          </div>
          <a class="btn btn-ac btn-sm" href="${ROOT}pages/contact.html">Me contacter</a>
        </div>
      </div>
    </div>
  </nav>`;
  const root = document.documentElement, st = root.style;
  const ACCENTS = {
    rose:     { n: 'Rose',     ac: '#EC3FA6', d: '#D12E90', l: '#FF7BC6', rgb: '236,63,166' },
    indigo:   { n: 'Indigo',   ac: '#5B5BF0', d: '#4747D6', l: '#8B7BFF', rgb: '91,91,240' },
    emeraude: { n: 'Émeraude', ac: '#0B8A5F', d: '#087049', l: '#4ADE9F', rgb: '11,138,95' },
    ocean:    { n: 'Océan',    ac: '#0873B0', d: '#065E90', l: '#4DB8F0', rgb: '8,115,176' }
  };
  const get = k => { try { return localStorage.getItem(k); } catch (e) { return null; } };
  const put = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
  document.getElementById('swatches').innerHTML = Object.entries(ACCENTS).map(([k, a]) => `<button type="button" class="sw" data-accent="${k}" style="background:${a.ac}" aria-label="${a.n}" title="${a.n}"></button>`).join('');
  function setMode(m) {
    root.setAttribute('data-bs-theme', m);
    document.querySelectorAll('[data-mode]').forEach(b => b.classList.toggle('on', b.dataset.mode === m));
    put('theme', m); const ic = document.getElementById('theme-ic'); if (ic) ic.className = 'bi ' + (m === 'dark' ? 'bi-sun' : 'bi-moon-stars');
  }
  function setAccent(k) {
    const a = ACCENTS[k] || ACCENTS.rose;
    st.setProperty('--ac', a.ac); st.setProperty('--ac-d', a.d); st.setProperty('--ac-l', a.l); st.setProperty('--ac-rgb', a.rgb);
    document.querySelectorAll('.sw').forEach(b => b.classList.toggle('on', b.dataset.accent === k));
    put('accent', k);
  }
  setMode(get('theme') || 'dark');
  setAccent(get('accent') || 'rose');
  host.addEventListener('click', e => {
    const m = e.target.closest('[data-mode]'), a = e.target.closest('[data-accent]');
    if (m) setMode(m.dataset.mode); if (a) setAccent(a.dataset.accent);
  });
})();
