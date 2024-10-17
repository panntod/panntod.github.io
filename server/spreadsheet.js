const scriptURL =
  "https://script.google.com/macros/s/AKfycbxGfA8DJox2zVLcD4JAi5bc9KGMz41oqvxg552--CFf8K9YkbiczLDjQhSW9877zRMBlg/exec";
const form = document.forms["contact-form"];
const tombolKirim = document.querySelector(".tombol-kirim");
const tombolLoading = document.querySelector(".tombol-loading");
const alert = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  tombolLoading.classList.toggle("d-none");
  tombolKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((_) => {
      tombolLoading.classList.toggle("d-none");
      tombolKirim.classList.toggle("d-none");
      alert.classList.toggle("d-none");

      form.reset();
    })
    .catch((_) => {
      window.alert("Error! Gagal mengirim pesan.");
    });
});
