/* ============================================================
   script.js — Cebu Family Guide
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. ハンバーガーメニュー（章一覧）
  ---------------------------------------------------------- */
  const navToggle = document.getElementById('navToggle');
  const siteNav   = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      siteNav.classList.toggle('open');
    });
    siteNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        siteNav.classList.remove('open');
      });
    });
  }

  /* ----------------------------------------------------------
     2. アコーディオン（各章の開閉。個別に独立して開閉）
  ---------------------------------------------------------- */
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const body = header.nextElementSibling;
      const isOpen = header.classList.contains('open');
      header.classList.toggle('open', !isOpen);
      body.classList.toggle('open', !isOpen);
      header.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  /* ----------------------------------------------------------
     3. TOPへ戻る／困ったとき フローティングボタン
  ---------------------------------------------------------- */
  const backTop  = document.getElementById('backToTop');
  const sosFloat = document.getElementById('sosFloat');

  function onScroll() {
    const past = window.scrollY > 400;
    if (backTop)  backTop.classList.toggle('visible', past);
    if (sosFloat) sosFloat.classList.toggle('is-visible', past);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backTop) {
    backTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
