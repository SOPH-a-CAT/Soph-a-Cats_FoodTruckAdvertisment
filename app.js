const poster = document.querySelector('.poster');
function fitPoster() {
  const width = document.documentElement.clientWidth;
  const height = document.documentElement.clientHeight;
  const portrait = width / height < 0.95;
  poster.classList.toggle('portrait', portrait);
  const designWidth = portrait ? 540 : 1200;
  const designHeight = portrait ? 960 : 800;
  poster.style.setProperty('--poster-scale', Math.min(width / designWidth, height / designHeight));
}
fitPoster();
window.addEventListener('resize', fitPoster);
