const sections = document.querySelectorAll("#aboutme>section");
window.addEventListener("scroll", function () {
  let activeLink = "";
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const id = section.id;
    const navLink = document.querySelector(`nav ul li a[href="#${id}"]`);
    if (navLink == null) return;
    if (rect.top - 1 <= this.window.scrollX) {
      if (activeLink) activeLink.classList.remove("active");
      activeLink = navLink;
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
});

const body = document.body;
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("aside");
const navLinks = nav.querySelectorAll("nav ul li a");
const openNav = () => {
  nav.classList.toggle("open");
  hamburger.classList.toggle("open");
  body.classList.toggle("no-scroll");
};

hamburger.addEventListener("click", openNav);

nav.addEventListener("click", function (e) {
  if (e.target.tagName === "A" && window.innerWidth < 1024) openNav();
});
