// mobile nav
  const burger = document.getElementById('burger');
  const links = document.querySelector('nav.links');
  burger.addEventListener('click', () => {
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    links.style.cssText += open ? '' : 'position:absolute; top:64px; left:0; right:0; background:#EFEFE4; flex-direction:column; padding:20px 32px; border-bottom:1px solid #DEDAC5;';
  });

  // tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.course-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(btn.dataset.tab).classList.add('active');
    });
  });

  // scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));