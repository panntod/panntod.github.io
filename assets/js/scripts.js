let mengetik;
if (typeof Typed === "function") {
  mengetik = new Typed(".typing", {
    strings: [
      "Full Stack Developer",
      "CEO",
      "Web Developer",
      "CTO",
      "Backend Developer",
    ],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
  });
} else {
  mengetik = null;
}

function navigate(path) {
  window.location.href = "#" + path;
}

function navigateHome() {
  window.location.href = "/";
}

// Ambil tombol dan tambahkan event listener
const darkModeToggle = document.getElementById("darkModeToggle");
const body = document.body;

darkModeToggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("darkMode", "enabled");
  } else {
    localStorage.removeItem("darkMode");
  }
});

if (localStorage.getItem("darkMode") === "enabled") {
  body.classList.add("dark-mode");
  darkModeToggle.checked = true;
}
