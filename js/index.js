// Select elements
const menuToggle = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector(".site-nav-wrap");
const menuLinks = document.querySelectorAll(
  ".site-nav .nav-link, .site-nav .contact-btn",
);

if (menuToggle && siteMenu) {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("is-open");
    siteMenu.classList.toggle("is-open");

    menuToggle.setAttribute(
      "aria-expanded",
      siteMenu.classList.contains("is-open"),
    );
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("is-open");
      siteMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (
      !menuToggle.contains(event.target) &&
      !siteMenu.contains(event.target)
    ) {
      menuToggle.classList.remove("is-open");
      siteMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      menuToggle.classList.remove("is-open");
      siteMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      menuToggle.classList.remove("is-open");
      siteMenu.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}
