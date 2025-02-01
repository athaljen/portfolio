const sections = document.querySelectorAll("section");
const headerLinks = document.querySelectorAll("header nav .nav-links");
const dropdownLinks = document.querySelectorAll(".nav-dropdown .nav-links");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        headerLinks.forEach((link) => link.classList.remove("active"));
        dropdownLinks.forEach((link) => link.classList.remove("active"));

        const activeHeaderLink = document.querySelector(
          `header nav .nav-links[href="#${entry.target.id}"]`
        );
        if (activeHeaderLink) activeHeaderLink.classList.add("active");

        const activeDropdownLink = document.querySelector(
          `.nav-dropdown .nav-links[href="#${entry.target.id}"]`
        );
        if (activeDropdownLink) activeDropdownLink.classList.add("active");
      }
    });
  },
  { threshold: 0.6 }
);

// Observe each section
sections.forEach((section) => observer.observe(section));

function toggleMenu(menuIcon) {
  menuIcon?.classList?.toggle("active");
  const nav = document.getElementById("nav-menu");
  nav.classList.toggle("show");
}

dropdownLinks.forEach((link) => {
  let menuIcon = document.querySelector(".menu-icon");
  link.addEventListener("click", () => {
    const nav = document.getElementById("nav-menu");
    nav.classList.remove("show");
    menuIcon?.classList?.remove("active");
  });
});
