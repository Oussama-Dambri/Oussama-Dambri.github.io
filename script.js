'use strict';
const menuButton = document.querySelector('.menu-toggle');
const nav = document.getElementById('primary-nav');
if (menuButton && nav) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    menuButton.innerHTML = '<svg><use href="#i-menu"/></svg>';
    nav.classList.remove('open');
  };
  menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const nowOpen = menuButton.getAttribute('aria-expanded') !== 'true';
    if (!nowOpen) { closeMenu(); return; }
    menuButton.setAttribute('aria-expanded','true');
    menuButton.setAttribute('aria-label','Close menu');
    menuButton.innerHTML = '<svg><use href="#i-close"/></svg>';
    nav.classList.add('open');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  document.addEventListener('click',e=>{if(!nav.contains(e.target)&&!menuButton.contains(e.target))closeMenu();});
}
const buttons=[...document.querySelectorAll('.pub-filter')];
const publications=[...document.querySelectorAll('.publication-item')];
buttons.forEach(button=>button.addEventListener('click',()=>{
  const type=button.dataset.filter;
  buttons.forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  publications.forEach(item=>{item.hidden=type!=='all'&&item.dataset.kind!==type;});
}));
const year=document.getElementById('copyright-year');
if(year)year.textContent=String(new Date().getFullYear());
const navLinks=[...document.querySelectorAll('.nav a[href^="#"]')];
if ('IntersectionObserver' in window && navLinks.length) {
  const sections=navLinks.map(link=>document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const activeObserver=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      navLinks.forEach(a=>a.classList.toggle('current',a.getAttribute('href')==='#'+entry.target.id));
    });
  },{rootMargin:'-22% 0px -65% 0px',threshold:0});
  sections.forEach(section=>activeObserver.observe(section));
}
