// theme.js — dark/light toggle for English Zero→Hero
function toggleTheme(){
  var n=document.documentElement.getAttribute('data-theme')==='light'?'dark':'light';
  document.documentElement.setAttribute('data-theme',n);
  localStorage.setItem('EZH_THEME',n);
  var b=document.getElementById('theme-btn');
  if(b)b.textContent=n==='light'?'🌙':'☀️';
}
(function(){
  var b=document.getElementById('theme-btn');
  if(b)b.textContent=document.documentElement.getAttribute('data-theme')==='light'?'🌙':'☀️';
})();
