/* ===== Lombok Hits Transport — UI logic ===== */
let lang = "id", cur = "idr", slide = 0, timer;
try { lang = localStorage.getItem("lht_lang") || "id"; } catch (e) {}

const $ = s => document.querySelector(s);
const wa = txt => `https://wa.me/${CONFIG.wa}?text=${encodeURIComponent(txt)}`;
const rupiah = n => "Rp " + n.toLocaleString("id-ID");

/* Gambar dengan fallback placeholder kalau file belum ada */
const imgOr = (src, label) =>
  `<img src="${src}" alt="${label}" loading="lazy" onerror="this.outerHTML='<div class=&quot;ph-box&quot;>${label}</div>'">`;

/* Header, footer & tombol WA — sama di semua halaman, edit menu di sini saja */
const PAGES = [
  ["home", "index.html", "nav_home"], ["tour", "tour.html", "nav_tour"], ["armada", "armada.html", "nav_fleet"], ["airport", "airport.html", "nav_airport"],
  ["tentang", "tentang.html", "nav_about"], ["galeri", "galeri.html", "nav_gallery"], ["kontak", "kontak.html", "nav_contact"]
];
function renderLayout() {
  const page = document.body.dataset.page;
  const links = PAGES.map(([id, href, key]) =>
    `<a href="${href}" data-t="${key}"${id === page ? ' aria-current="page"' : ""}></a>`).join("");
  document.body.insertAdjacentHTML("afterbegin", `
<div class="topbar">
  <div class="container topbar-in">
    <div class="topbar-info">
      <a class="wa-link" data-msg="msg_general" href="#">📱 +62 819-9107-1786</a>
      <span class="hide-sm">📍 Lombok Barat, NTB</span>
    </div>
    <div class="lang" role="group" aria-label="Language">
      <button type="button" data-lang="id">ID</button>
      <button type="button" data-lang="en">EN</button>
    </div>
  </div>
</div>
<header class="header">
  <div class="container header-in">
    <a href="index.html" class="logo">
      <span class="logo-mark">LH</span>
      <span class="logo-text">Lombok Hits<small>Transport</small></span>
    </a>
    <button class="menu-btn" aria-label="Menu" aria-expanded="false">☰</button>
    <nav class="nav">${links}
      <a href="#" class="btn btn-cta wa-link" data-msg="msg_general" data-t="btn_book"></a>
    </nav>
  </div>
</header>`);
  document.body.insertAdjacentHTML("beforeend", `
<footer class="footer">
  <div class="container footer-grid">
    <div>
      <div class="logo light"><span class="logo-mark">LH</span><span class="logo-text">Lombok Hits<small>Transport</small></span></div>
      <p data-t="footer_about"></p>
    </div>
    <div><h4 data-t="footer_links"></h4>${links}</div>
    <div>
      <h4 data-t="footer_services"></h4>
      <a href="tour.html" data-t="svc_tour"></a>
      <a href="armada.html" data-t="svc_rent"></a>
      <a href="airport.html" data-t="svc_airport"></a>
    </div>
    <div>
      <h4 data-t="nav_contact"></h4>
      <a class="wa-link" data-msg="msg_general" href="#">+62 819-9107-1786</a>
      <span>Kompleks BPTP NTB, Lombok Barat</span>
      <span>🕒 <span data-t="contact_hours_v"></span></span>
    </div>
  </div>
  <div class="copyright">© 2026 Lombok Hits Transport</div>
</footer>
<a href="#" class="wa-float wa-link" data-msg="msg_general" aria-label="WhatsApp">
  <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.5 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.4Z"/></svg>
</a>`);
}

function renderText() {
  const t = TEXT[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-t]").forEach(el => { if (t[el.dataset.t]) el.textContent = t[el.dataset.t]; });
  document.querySelectorAll(".wa-link").forEach(a => { a.href = wa(t[a.dataset.msg]); a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", b.dataset.lang === lang));
}

function renderWhy() {
  if (!$("#why-list")) return;
  $("#why-list").innerHTML = WHY.map((w, i) => `
    <div class="why-item" style="--i:${WHY.length - 1 - i}"><div class="why-icon">${w.icon}</div><h3>${w.t[lang]}</h3><p>${w.d[lang]}</p></div>`).join("");
}

/* "Kenapa pilih kami": kartu masuk satu per satu dari kanan saat terlihat di layar */
function revealWhy() {
  const grid = $("#why-list");
  if (!grid || !("IntersectionObserver" in window)) return;
  grid.classList.add("reveal");
  const io = new IntersectionObserver(([e]) => {
    if (e.isIntersecting) { grid.classList.add("in"); io.disconnect(); }
  }, { threshold: 0.25 });
  io.observe(grid);
}

const tourUrl = x => `paket.html?id=${x.id}`;
const tourCard = x => {
  const t = TEXT[lang];
  return `
    <article class="card">
      <a class="card-img" href="${tourUrl(x)}">${imgOr(x.img, "Foto: " + x.name.id)}<span class="badge">${x.badge[lang]}</span></a>
      <div class="card-body">
        <h3><a href="${tourUrl(x)}">${x.name[lang]}</a></h3>
        <p class="card-meta">⏱ ${x.dur[lang]}</p>
        <p class="tagline">${x.tagline[lang]}</p>
        <ul class="dest">${x.dest.map(d => `<li>${d}</li>`).join("")}</ul>
        <div class="card-foot">
          <div class="price"><small>${t.per_trip}</small><strong>${x.price}</strong></div>
          <div class="card-btns">
            <a class="btn btn-line btn-sm" href="${tourUrl(x)}">${t.btn_detail}</a>
            <a class="btn btn-cta btn-sm" target="_blank" rel="noopener" href="${wa(t.msg_tour + x.name[lang] + t.msg_tail)}">${t.btn_order}</a>
          </div>
        </div>
      </div>
    </article>`;
};
function renderTours() {
  if (!$("#tour-list")) return;
  $("#tour-list").innerHTML = TOURS.map(tourCard).join("");
}

/* Halaman detail paket: paket.html?id=... */
function renderTourDetail() {
  const box = $("#tour-detail");
  if (!box) return;
  const t = TEXT[lang];
  const id = new URLSearchParams(location.search).get("id");
  const x = TOURS.find(r => r.id === id) || TOURS[0];
  const list = arr => `<ul class="check">${arr.map(i => `<li>${i}</li>`).join("")}</ul>`;
  document.title = `${x.name[lang]} | Lombok Hits Transport`;
  $("#td-banner").style.backgroundImage = `url('${x.img}')`;
  $("#td-name").textContent = $("#td-crumb").textContent = x.name[lang];
  $("#td-tagline").textContent = x.tagline[lang];
  $("#td-chips").innerHTML = `<span>${x.badge[lang]}</span><span>⏱ ${x.dur[lang]}</span>`;
  box.innerHTML = `
    <div class="td-main">
      <section><h2>${t.td_about}</h2>${x.desc[lang].map(p => `<p>${p}</p>`).join("")}</section>
      <section><h2>${t.td_high}</h2>${list(x.high[lang])}</section>
      <section><h2>${t.td_dest}</h2><ul class="dest dest-lg">${x.dest.map(d => `<li>${d}</li>`).join("")}</ul></section>
      <section><h2>${t.td_plan}</h2>
        <ol class="timeline">${x.plan.map(([time, what]) => `<li><b>${time}</b><span>${what[lang]}</span></li>`).join("")}</ol>
        <p class="note">${t.td_plan_note}</p>
      </section>
      <section class="td-incl">
        <div><h3>✓ ${t.td_inc}</h3>${list(x.inc[lang])}</div>
        <div><h3>✕ ${t.td_exc}</h3><ul class="cross">${x.exc[lang].map(i => `<li>${i}</li>`).join("")}</ul></div>
      </section>
      <section><h2>${t.td_bring}</h2>${list(x.bring[lang])}</section>
    </div>
    <aside class="td-side">
      <div class="book-box">
        <div class="price"><small>${t.per_trip}</small><strong>${x.price}</strong></div>
        <dl>
          <dt>${t.td_dur}</dt><dd>${x.dur[lang]}</dd>
          <dt>${t.td_pick}</dt><dd>${t.td_pick_v}</dd>
        </dl>
        <a class="btn btn-cta" target="_blank" rel="noopener" href="${wa(t.msg_tour + x.name[lang] + t.msg_tail)}">${t.td_book}</a>
        <a class="btn btn-line" target="_blank" rel="noopener" href="${wa(t.td_ask_msg + x.name[lang] + ".")}">${t.td_ask}</a>
      </div>
    </aside>`;
  $("#td-other").innerHTML = TOURS.filter(r => r !== x).slice(0, 3).map(tourCard).join("");
}

function renderFleet() {
  if (!$("#fleet-list")) return;
  const t = TEXT[lang];
  document.querySelectorAll("[data-cur]").forEach(b => b.setAttribute("aria-pressed", b.dataset.cur === cur));
  $("#fleet-list").innerHTML = FLEET.map(c => {
    const price = c.idr == null ? "Rp XXX" : (cur === "idr" ? rupiah(c.idr) : "$" + c.usd);
    return `
    <article class="card">
      <div class="card-img">${imgOr(c.img, "Foto: " + c.name)}</div>
      <div class="card-body">
        <h3>${c.name}</h3>
        <p class="card-meta">✓ Driver &nbsp; ✓ ${lang === "id" ? "Bensin" : "Petrol"}</p>
        <div class="card-foot">
          <div class="price"><small>${t.per_trip}</small><strong>${price}</strong> <small style="display:inline">${t.per_day}</small></div>
          <a class="btn btn-cta btn-sm" target="_blank" rel="noopener" href="${wa(t.msg_car + c.name + t.msg_tail)}">${t.btn_order}</a>
        </div>
      </div>
    </article>`;
  }).join("");
}

/* Airport transfer: harga ikut pilihan IDR/USD */
const money = idr => cur === "idr" ? rupiah(idr) : "$" + Math.round(idr / CONFIG.usdRate);
function renderAirport() {
  document.querySelectorAll("[data-cur]").forEach(b => b.setAttribute("aria-pressed", b.dataset.cur === cur));
  if ($("#air-min")) $("#air-min").textContent = money(Math.min(...AIRPORT.map(r => r.idr)));
  if (!$("#air-list")) return;
  const t = TEXT[lang];
  $("#air-list").innerHTML = AIRPORT.map(r => `
    <article class="card route">
      <div class="card-body">
        <p class="route-from">✈ Lombok Airport (LOP)</p>
        <h3>${r.to}</h3>
        <p class="card-meta">⏱ ${r.dur[lang]}</p>
        <div class="card-foot">
          <div class="price"><small>${t.price_start}</small><strong>${money(r.idr)}</strong></div>
          <a class="btn btn-cta btn-sm" target="_blank" rel="noopener" href="${wa(t.msg_air_to + r.to + t.msg_tail)}">${t.btn_order}</a>
        </div>
      </div>
    </article>`).join("");
}

function renderTesti() {
  if (!$("#testi-list")) return;
  const card = hidden => x => `
    <div class="testi"${hidden ? ' aria-hidden="true"' : ""}><div class="stars" aria-label="5/5">★★★★★</div><p>${x.text[lang]}</p><b>${x.name}</b><small>Google Review</small></div>`;
  // daftar diulang 2x supaya jalan tanpa putus (lihat .testi-track di CSS)
  $("#testi-list").innerHTML = TESTI.map(card(false)).join("") + TESTI.map(card(true)).join("");
  $("#testi-more").href = REVIEWS_URL;
}

function renderGallery() {
  if (!$("#gallery-list")) return;
  $("#gallery-list").innerHTML = GALLERY.map(g => `<div>${imgOr(g.img, g.label)}</div>`).join("");
}

/* Hero slider */
function buildSlider() {
  const box = $(".slides"), dots = $(".dots");
  if (!box) return;
  box.innerHTML = CONFIG.heroSlides.map((s, i) =>
    `<div class="slide ph ${i === 0 ? "active" : ""}"><span class="ph-label">${s.label}</span></div>`).join("");
  dots.innerHTML = CONFIG.heroSlides.map((_, i) =>
    `<button type="button" aria-label="Slide ${i + 1}" class="${i === 0 ? "active" : ""}"></button>`).join("");
  // pakai foto asli kalau ada
  CONFIG.heroSlides.forEach((s, i) => {
    const im = new Image();
    im.onload = () => { const el = box.children[i]; el.classList.remove("ph"); el.style.backgroundImage = `url(${s.img})`; el.innerHTML = ""; };
    im.src = s.img;
  });
  dots.querySelectorAll("button").forEach((b, i) => b.onclick = () => { go(i); restart(); });
  restart();
}
function go(i) {
  const sl = document.querySelectorAll(".slide"), dt = document.querySelectorAll(".dots button");
  sl[slide].classList.remove("active"); dt[slide].classList.remove("active");
  slide = (i + sl.length) % sl.length;
  sl[slide].classList.add("active"); dt[slide].classList.add("active");
}
function restart() {
  clearInterval(timer);
  if (!matchMedia("(prefers-reduced-motion: reduce)").matches) timer = setInterval(() => go(slide + 1), 5000);
}

function renderAll() { renderText(); renderWhy(); renderTours(); renderTourDetail(); renderFleet(); renderAirport(); renderTesti(); renderGallery(); }

renderLayout();

/* Events */
document.addEventListener("click", e => {
  const b = e.target.closest("button");
  if (b && b.dataset.lang) { lang = b.dataset.lang; try { localStorage.setItem("lht_lang", lang); } catch (e) {} renderAll(); }
  if (b && b.dataset.cur) { cur = b.dataset.cur; renderFleet(); renderAirport(); }
});
const menuBtn = $(".menu-btn"), nav = $(".nav");
menuBtn.onclick = () => { const o = nav.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", o); };
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", false); }));

renderAll();
buildSlider();
revealWhy();
