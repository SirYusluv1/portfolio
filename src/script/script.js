const nav = document.querySelector(".top-page__nav");

function toggleNav() {
  if (window.innerWidth <= 600) {
    if (nav.style.display != "none") {
      nav.style.display = "none";
      return;
    }

    nav.style.display = "flex";
  }
}

document.addEventListener("touchstart", toggleNav);

document.addEventListener("touchend", toggleNav);
