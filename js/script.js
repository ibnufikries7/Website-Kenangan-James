// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// ketika hamburgerMenu di klik
hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

// ketika di luar sidebar di klik untuk menghilangkan sidebar dari hamburgerMenu
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    //jika mengklik diluar dari kandungan hamburgerMenu dan navbarNav
    navbarNav.classList.remove("active");
  }
});

// pengaturan tombol musik
const audio = document.getElementById("bg-music");

function playMusic() {
  audio.play();
}

function stopMusic() {
  audio.pause();
  audio.currentTime = 0;
}
