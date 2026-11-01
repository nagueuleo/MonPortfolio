/* Rendu du contenu à partir de DATA, selon les éléments présents dans la page */
const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = t => String(t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const set = (s, f) => { const e = $(s); if (e) f(e); };
const ROOT = document.body.dataset.root || '';
const chips = a => a.map(t => `<span class="chip">${esc(t)}</span>`).join('');

$$('[data-photo]').forEach(w => {   // photo, avec repli si le fichier est absent
  const i = new Image(); i.alt = 'Portrait de ' + DATA.name;
  i.onerror = () => { i.onerror = null; i.src = ROOT + 'assets/img/Lionel.png'; };
  i.src = ROOT + DATA.photo; w.prepend(i);
});
set('#h-first', e => e.textContent = DATA.first); set('#h-mid', e => e.textContent = DATA.mid); set('#h-last', e => e.textContent = DATA.last);
set('#h-role', e => e.textContent = DATA.roleLine); set('#h-place', e => e.textContent = DATA.place);
set('#p-text', e => e.innerHTML = DATA.profile.map(p => `<p>${esc(p)}</p>`).join('')); set('#p-avail', e => e.textContent = DATA.avail);
set('#tiles', e => e.innerHTML = DATA.tiles.map(t => `<div class="tile">${esc(t)}</div>`).join(''));
set('#social', e => e.innerHTML = DATA.social.map(([i, u, l]) => `<a href="${u}" target="_blank" rel="noopener" aria-label="${l}"><i class="bi ${i}"></i></a>`).join(''));
set('#stats', e => e.innerHTML = DATA.stats.map(([n, l, s]) => `<div class="stat"><b data-n="${n}" data-s="${s || ''}">0</b><span>${l}</span></div>`).join(''));
set('#c-mail', e => { e.textContent = DATA.email; e.href = 'mailto:' + DATA.email; });
set('#c-loc', e => e.textContent = DATA.location);

/* CV */
set('#cv-dl', e => e.href = ROOT + DATA.cv);
set('#tl', e => e.innerHTML = DATA.career.map(c => `<div class="tl-item"><span class="when">${c.when}</span><h3>${esc(c.role)}</h3><p class="org">${esc(c.org)}</p><span class="chip">${esc(c.tag)}</span><ul class="pts">${c.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul></div>`).join(''));
set('#tools', e => e.innerHTML = DATA.tools.map(g => `<div class="trow"><b>${esc(g.g)}</b><div>${chips(g.items)}</div></div>`).join(''));
set('#edu', e => e.innerHTML = DATA.education.map(c => `<div class="edu"><div><b>${esc(c.t)}</b>${c.org ? `<small>${esc(c.org)}</small>` : ''}</div><span class="bd">${c.y}</span></div>`).join(''));

/* Certifications */
const LOGOS = {
  simplilearn: '<span class="lg"><img src="https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/80345c7f-57dd-50a7-8541-c939ae8d6e41/16a2533d-f527-5701-b3bd-b06c73048ca9.jpg"alt="Simplilearn"style="height: 40px; width: auto;"></span>',
  linkedin: '<span class="lg"><i class="bi bi-linkedin" style="color:#0A66C2"></i></span>',
  dbt: '<span class="lg"><img src="https://d2u1z1lopyfwlx.cloudfront.net/thumbnails/d8b6b2cb-8a14-511c-86f4-8ec8d4137459/fe1b7609-5021-5804-b914-b73137da8030.jpg"alt="dbt"style="height: 40px; width: auto;"></span>',
};
set('#certs', e => e.innerHTML = DATA.certs.map(c => `<div class="col-md-6 col-lg-4"><article class="card-x cert">${c.img ? `<span class="lg"><img src="${ROOT}${c.img}" alt="" width="32" height="32"></span>` : (LOGOS[c.logo] || '')}<h3>${esc(c.t)}</h3><p class="org">${esc(c.org)}</p><div class="ft"><span class="bd">${c.y}</span>${c.done ? '<span class="bd ok">Obtenu ✓</span>' : '<span class="bd wip">En cours…</span>'}</div></article></div>`).join(''));

/* Projets */
const G = { PowerBI: ['#B45309', '#EAB308', 'bi-bar-chart-line-fill'], Python: ['#1D4ED8', '#0EA5E9', 'bi-graph-up-arrow'], Excel: ['#15803D', '#4ADE80', 'bi-table'] };
if ($('#projects')) {
  $('#filters').innerHTML = DATA.filters.map((c, i) => `<button class="pill ${i ? '' : 'on'}" data-f="${c}">${c}</button>`).join('');
  $('#projects').innerHTML = DATA.projects.map(p => {
    const [g1, g2, ic] = G[p.cat] || G.Python;
    const ov = p.live ? `<a class="pill-live" href="${p.live}" target="_blank" rel="noopener">Voir l’application ↗</a>` : p.video ? `<a class="play" href="${p.video}" target="_blank" rel="noopener" aria-label="Voir la vidéo"><i class="bi bi-play-fill"></i></a>` : '';
    return `<div class="col-md-6 col-lg-4 proj-wrap" data-cat="${p.cat}"><article class="card-x proj"><div class="thumb" style="--g1:${g1};--g2:${g2}"><i class="bi ${ic} bg-i"></i>${p.img ? `<img src="${ROOT}${p.img}" alt="" loading="lazy" onerror="this.remove()">` : ''}<div class="ov">${ov}</div></div><div class="pb"><div>${chips(p.tags)}</div><h3>${esc(p.t)}</h3><p>${esc(p.d)}</p><div class="mt">${p.m.map(x => `<span class="bd">${esc(x)}</span>`).join('')}<div class="lks">${p.live ? `<a href="${p.live}" target="_blank" rel="noopener">Application live →</a>` : ''}${p.github ? `<a href="${p.github}" target="_blank" rel="noopener">Voir sur GitHub →</a>` : ''}</div></div></div></article></div>`;
  }).join('');
  $('#filters').addEventListener('click', e => {
    const b = e.target.closest('button'); if (!b) return;
    $$('#filters .pill').forEach(x => x.classList.toggle('on', x === b));
    $$('.proj-wrap').forEach(w => w.classList.toggle('d-none', b.dataset.f !== 'Tous' && w.dataset.cat !== b.dataset.f));
  });
}

/* Formulaire de contact */
set('#form', f => f.addEventListener('submit', e => {
  e.preventDefault(); f.classList.add('was-validated'); if (!f.checkValidity()) return;
  const s = encodeURIComponent('Contact depuis le portfolio – ' + $('#nom').value);
  const b = encodeURIComponent($('#msg').value + '\n\n' + $('#nom').value + ' (' + $('#mail').value + ')');
  $('#ok').classList.remove('d-none'); location.href = `mailto:${DATA.email}?subject=${s}&body=${b}`;
}));

Anim.init();
