
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
  document.querySelector(".gift3d").classList.add("open");

  setTimeout(() => {

    document.getElementById("start").style.display = "none";
    document.getElementById("content").classList.remove("hidden");

    document.getElementById("photo").src = photos[0];

    const musica = document.getElementById("musica");
    musica.play();

    confetti();

    setInterval(heart, 400);

    setTimeout(() => {
      const balloon = document.getElementById("balloon");

      balloon.innerHTML = "💥";

      setTimeout(() => {
        balloon.style.display = "none";
      }, 800);

    }, 2500);

  }, 1200);
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
  const h = document.createElement("div");

  h.className = "heart";
  h.innerHTML = ["❤️","💙","✨","🎉"][Math.floor(Math.random()*4)];

  h.style.left = Math.random() * 100 + "vw";

  document.body.appendChild(h);

  setTimeout(() => {
    h.remove();
  }, 6000);
}

function confetti() {

  const c = document.getElementById("confetti");
  const x = c.getContext("2d");

  c.width = window.innerWidth;
  c.height = window.innerHeight;

  const colors = [
    "#FFD700",
    "#FF4D4D",
    "#00C8FF",
    "#FFFFFF",
    "#FF69B4"
  ];

  let pieces = [...Array(200)].map(() => ({
    x: Math.random() * c.width,
    y: Math.random() * c.height,
    r: Math.random() * 6 + 2,
    color: colors[Math.floor(Math.random() * colors.length)]
  }));

  (function animate() {

    x.clearRect(0, 0, c.width, c.height);

    pieces.forEach(p => {

      x.fillStyle = p.color;

      x.fillRect(
        p.x,
        p.y,
        p.r,
        p.r
      );

      p.y += 3;

      if (p.y > c.height) {
        p.y = -10;
      }

    });

    requestAnimationFrame(animate);

  })();
}
