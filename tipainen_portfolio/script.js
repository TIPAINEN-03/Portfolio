const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const toast = document.querySelector(".toast");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 15);
});

menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll("[data-placeholder]").forEach(link => {
  link.addEventListener("click", e => {
    if (link.getAttribute("href") === "#") e.preventDefault();
    toast.textContent = link.dataset.placeholder;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
