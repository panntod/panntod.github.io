const mengetik = new Typed(".typing", {
  strings: ["Full Stack Developer", "CEO", "Web Developer", "CTO"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("scrollToTop");
  const navLinks = document.querySelectorAll(".navbar-nav a");
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const hamburger = document.querySelector(".hamburger");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        // Check if viewport is mobile (Bootstrap lg breakpoint)
        navbarToggler.click(); // Tutup navbar
      }
    });
  });

  window.addEventListener("scroll", () => {
    if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
      navbarToggler.click(); // Tutup navbar jika sedang terbuka pada saat scroll
    }
  });

  function toggleButtonVisibility() {
    if (window.scrollY > 50) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }

  function toggleInnerHTML() {
    const ariaExpandedValue = navbarToggler.getAttribute("aria-expanded");
    if (ariaExpandedValue === "true") {
      hamburger.innerHTML = "x"; // Ubah inner HTML jika navbar aktif
    } else {
      hamburger.innerHTML = "&#8801;"; // Kembalikan inner HTML jika navbar tidak aktif
    }
  }

  navbarToggler.addEventListener("click", () => {
    toggleInnerHTML(); // Panggil fungsi setiap kali navbarToggler diklik
  });

  document.querySelector(".top-button").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleButtonVisibility);
});
