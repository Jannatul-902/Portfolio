const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const navLinks = document.querySelector("#nav-links");

menuOpen.addEventListener("click", () => {
  menuClose.classList.remove("hidden");
  menuClose.classList.add("show");
  menuOpen.classList.add("hidden");
  menuOpen.classList.remove("show");
  navLinks.classList.add("nav-links");
});

menuClose.addEventListener("click", () => {
  menuClose.classList.add("hidden");
  menuClose.classList.remove("show");
  menuOpen.classList.remove("hidden");
  menuOpen.classList.add("show");
  navLinks.classList.remove("nav-links");
});
