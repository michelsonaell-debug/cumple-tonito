
const photos = [
  "fotos/F1.JPG",
  "fotos/F2.JPG",
  "fotos/F3.JPG",
  "fotos/F4.JPG",
  "fotos/F5.JPG",
  "fotos/F6.jpg",
  "fotos/F7.jpg",
  "fotos/F8.jpg",
  "fotos/F9.jpg",
  "fotos/F10.jpg",
  "fotos/F11.jpg",
  "fotos/F12.jpg",
  "fotos/F13.jpg",
  "fotos/F14.jpg",
  "fotos/F15.jpg",
  "fotos/F16.jpg",
  "fotos/F17.jpg",
  "fotos/F18.jpg",
  "fotos/F19.jpg",
  "fotos/F20.jpg"
];

let i = 0;

function openGift() {
  document.querySelector('.gift3d').classList.add('open');

  setTimeout(() => {
    document.getElementById('start').style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
    document.getElementById("musica").play();

    document.getElementById('photo').src = photos[0];

    setInterval(heart, 400);
    confetti();
  }, 900);
}

function next() {
  i = (i + 1) % photos.length;
  document.getElementById("photo").src = photos[i];
}

function prev() {
  i = (i - 1 + photos.length) % photos.length;
  document.getElementById("photo").src = photos[i];
}

function heart() {
  let h = document.createElement('div');
  h.className = 'heart';
  h.innerHTML = '❤️';
  h.style.left = Math.random() * 100 + 'vw';
  document.body.appendChild(h);

  setTimeout(() => h.remove(), 6000);
}

function confetti() {
  const c = document.getElementById('confetti');
  const x = c.getContext('2d');

  c.width = innerWidth;
  c.height = innerHeight;

  let p = [...Array(120)].map(() => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 4 + 2
  }));

  (function a() {
    x.clearRect(0, 0, c.width, c.height);

    p.forEach(o => {
      x.fillStyle = 'red';
      x.fillRect(o.x, o.y, o.r, o.r);

      o.y += 2;
      if (o.y > c.height) o.y = 0;
    });

    requestAnimationFrame(a);
  })();
}
