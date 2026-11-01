/* Pied de page partagé : injecté dans <div id="site-footer"> */
(function () {
  const host = document.getElementById('site-footer'); if (!host) return;
  const ROOT = document.body.dataset.root || '';
  host.innerHTML = `
  <footer>
    <div class="container foot">
      ${logoHTML(ROOT)}
      <span>© ${new Date().getFullYear()} ${DATA.name} · ${DATA.job}</span>
      <span class="d-flex gap-3">${DATA.social.filter(s => s[2] !== 'E-mail').map(([i,u,l]) => `<a href="${u}" target="_blank" rel="noopener">${l}</a>`).join('')}</span>
    </div>
  </footer>`;
})();
