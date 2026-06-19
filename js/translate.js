/* ============================================================
   translate.js · Mila Boyd Portfolio
   One shared language toggle (English / العربية) for the whole site.
   - Adds a styled toggle button into the navbar.
   - Uses Google Translate (no backend, no API key) to auto-translate.
   - Loads an Arabic font and switches text direction to RTL.
   - Remembers the choice across pages via localStorage.
   To use on a page: add  <script src="js/translate.js" defer></script>
   right before </body>. Nothing else needed.

   HOW IT STAYS RELIABLE:
   Google's widget jams if the page loads with its translation cookie
   already set. So on every page we (1) clear that cookie to force a clean
   English baseline, then (2) if the saved choice is Arabic, drive Google's
   hidden language menu from English to Arabic — a clean transition that
   translates dependably.
   ============================================================ */
(function () {
  "use strict";

  var STORE_KEY = "siteLang";

  function wantArabic() {
    try { return localStorage.getItem(STORE_KEY) === "ar"; } catch (e) { return false; }
  }
  function setWant(lang) {
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  /* Clear Google's googtrans cookie so each load starts from English. */
  function clearGoogCookie() {
    var host = location.hostname;
    var ex = "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    document.cookie = "googtrans" + ex;
    document.cookie = "googtrans" + ex + ";domain=" + host;
    var parts = host.split(".");
    if (parts.length > 2) document.cookie = "googtrans" + ex + ";domain=." + parts.slice(-2).join(".");
  }
  clearGoogCookie();

  /* ---------- 1. styles (injected so pages need no extra CSS) ---------- */
  var css = [
    ".goog-te-banner-frame,.goog-te-balloon-frame{display:none!important;}",
    ".goog-te-gadget{height:0;overflow:hidden;}",
    "body{top:0!important;}",
    "#goog-gt-tt,.goog-tooltip,.goog-tooltip:hover{display:none!important;}",
    ".goog-text-highlight{background:none!important;box-shadow:none!important;}",
    "#google_translate_element{position:absolute;left:-9999px;top:-9999px;height:0;width:0;overflow:hidden;}",
    "#langToggle{cursor:pointer;}",
    "#langToggle .lang-globe{display:inline-block;margin-inline-end:6px;transform:translateY(1px);}",
    "html.ar-on body{font-family:'Tajawal','Source Serif Pro',serif;}",
    "html.ar-on .lead,html.ar-on p,html.ar-on li,html.ar-on blockquote," +
      "html.ar-on h1,html.ar-on h2,html.ar-on h3,html.ar-on h4,html.ar-on h5," +
      "html.ar-on .card-title,html.ar-on .card-text,html.ar-on .eyebrow," +
      "html.ar-on .featurette-heading,html.ar-on .section-title{direction:rtl;text-align:right;}",
    "html.ar-on .navbar-nav{direction:rtl;}",
    "html.ar-on .text-center .lead,html.ar-on .text-center p,html.ar-on .jumbotron .lead," +
      "html.ar-on .stats-row p,html.ar-on .stat p{text-align:center;}"
  ].join("\n");
  var styleEl = document.createElement("style");
  styleEl.id = "i18n-styles";
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ---------- 2. Arabic webfont ---------- */
  var fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href = "https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap";
  document.head.appendChild(fontLink);

  /* ---------- 3. hidden Google Translate element + loader ---------- */
  var holder = document.createElement("div");
  holder.id = "google_translate_element";
  (document.body || document.documentElement).appendChild(holder);

  window.googleTranslateElementInit = function () {
    /* eslint-disable no-new, no-undef */
    new google.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: "en,ar", autoDisplay: false },
      "google_translate_element"
    );
  };
  var gt = document.createElement("script");
  gt.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  document.head.appendChild(gt);

  /* ---------- 4. direction + Arabic class ---------- */
  function applyDirection(on) {
    var root = document.documentElement;
    if (on) {
      root.setAttribute("dir", "rtl");
      root.setAttribute("lang", "ar");
      root.classList.add("ar-on");
    } else {
      root.setAttribute("dir", "ltr");
      root.setAttribute("lang", "en");
      root.classList.remove("ar-on");
    }
  }
  applyDirection(wantArabic());

  /* ---------- 5. drive Google's hidden language menu ---------- */
  function driveCombo(lang) {
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      var combo = document.querySelector("select.goog-te-combo");
      if (combo) {
        combo.value = lang;
        combo.dispatchEvent(new Event("change"));
        clearInterval(timer);
      }
      if (tries > 60) clearInterval(timer);
    }, 250);
  }

  /* On load: if Arabic is the saved choice, translate from the clean baseline. */
  if (wantArabic()) driveCombo("ar");

  /* ---------- 6. toggle button ---------- */
  function toggleLanguage() {
    setWant(wantArabic() ? "en" : "ar");
    location.reload();
  }

  function addToggle() {
    var navList = document.querySelector(".navbar-nav");
    if (!navList || document.getElementById("langToggle")) return;

    var li = document.createElement("li");
    li.className = "nav-item";

    var a = document.createElement("a");
    a.className = "nav-link";
    a.href = "#";
    a.id = "langToggle";
    a.setAttribute("role", "button");
    a.setAttribute("aria-label", "Switch language");
    a.innerHTML =
      '<span class="lang-globe" aria-hidden="true">&#127760;</span>' +
      (wantArabic() ? "ENGLISH" : "العربية");

    a.addEventListener("click", function (e) {
      e.preventDefault();
      toggleLanguage();
    });

    li.appendChild(a);
    navList.appendChild(li);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addToggle);
  } else {
    addToggle();
  }
})();
