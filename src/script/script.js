const nav = document.querySelector(".top-page__nav");

function toggleNav() {
  if (window.innerWidth <= 600) {
    nav.classList.toggle("show");
    nav.classList.toggle("hide");
    // if (nav.classList.contains("show")) {
    //   nav.classList.add("hide");
    //   return;
    // }

    // nav.classList.add("show");
  }
}

document.addEventListener("touchstart", toggleNav);

document.addEventListener("touchend", toggleNav);
