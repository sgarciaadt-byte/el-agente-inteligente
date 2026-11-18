/* Aviso de cookies de elagenteinteligente.com (18/11/2026).
   La web no usa cookies: solo guarda en el navegador que ya se ha visto este aviso.
   Es una franja discreta abajo que no tapa la web ni impide navegar. */
(function () {
  var KEY = 'eai_cookies_aceptadas_v1';
  function leer() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function guardar() { try { localStorage.setItem(KEY, new Date().toISOString()); } catch (e) {} }
  if (leer()) return;

  var css = document.createElement('style');
  css.textContent =
    '#eai-ck{position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;max-width:720px;margin:0 auto;background:#2a2231;color:#f3e9f0;border-radius:14px;padding:12px 14px 12px 18px;display:flex;align-items:center;gap:14px;font:14px/1.45 Inter,system-ui,sans-serif;box-shadow:0 12px 34px rgba(0,0,0,.3)}' +
    '#eai-ck p{margin:0;flex:1}' +
    '#eai-ck a{color:#e8c8de}' +
    '#eai-ck button{flex:none;border:0;border-radius:999px;padding:9px 18px;background:#fff;color:#6d3363;font:600 14px Inter,system-ui,sans-serif;cursor:pointer}' +
    '@media(max-width:520px){#eai-ck{flex-direction:column;align-items:stretch;text-align:left}}';
  document.head.appendChild(css);

  var w = document.createElement('div');
  w.id = 'eai-ck';
  w.setAttribute('role', 'region');
  w.setAttribute('aria-label', 'Aviso de cookies');
  w.innerHTML =
    '<p>Esta web no usa cookies de publicidad ni de analítica. Más información en la <a href="cookies.html">política de cookies</a>.</p>' +
    '<button type="button">Entendido</button>';
  document.body.appendChild(w);
  w.querySelector('button').addEventListener('click', function () { guardar(); w.remove(); });
})();
