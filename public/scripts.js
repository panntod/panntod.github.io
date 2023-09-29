const mengetik = new Typed(".typing", {
  strings: ["Full Stack Developer", "CEO", "Web Developer", "CTO"],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("scrollToTop");

  function toggleButtonVisibility() {
    if (window.scrollY > 50) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  }

  document.querySelector(".top-button").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", toggleButtonVisibility);
});