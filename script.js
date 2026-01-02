// Floating logos animation
const floatingContainer = document.querySelector('.floating-logos');
const numLogos = 12;
const logos = [];

for (let i = 0; i < numLogos; i++) {
  const logo = document.createElement('img');
  logo.src = 'logo.png';
  logo.classList.add('floating-logo');
  logo.style.top = `${Math.random() * 100}%`;
  logo.style.left = `${Math.random() * 100}%`;
  logo.style.transform = `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`;
  floatingContainer.appendChild(logo);
  logos.push({
    el: logo,
    speed: 0.2 + Math.random() * 0.4,
    x: parseFloat(logo.style.left),
    y: parseFloat(logo.style.top)
  });
}

function animateLogos() {
  logos.forEach(logo => {
    logo.y += logo.speed;
    if (logo.y > 100) logo.y = -10;
    logo.el.style.top = `${logo.y}%`;
  });
  requestAnimationFrame(animateLogos);
}

animateLogos();

// Parallax effect on mouse move
document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  logos.forEach((logo, i) => {
    const movement = (i % 3 + 1) * 5;
    logo.el.style.transform = `translate(${x * movement}px, ${y * movement}px) rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`;
  });
});

// Delayed Begin button
const beginBtn = document.querySelector('.begin-btn');
window.addEventListener('load', () => {
  setTimeout(() => {
    beginBtn.classList.add('show');
  }, 1000);
});

// Begin button navigation
beginBtn.addEventListener('click', () => {
  window.location.href = 'get-started.html';
});
