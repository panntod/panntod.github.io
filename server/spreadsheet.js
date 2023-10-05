const scriptURL =
"https://script.google.com/macros/library/d/1Uy0aBNJVAbfFbnUo3xBNFAYdUcdKeNJXeTQMbXODU2hKrHbcIWKUAkZu/1";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
e.preventDefault();

fetch(scriptURL, { method: "POST", body: new FormData(form) })
  .then((response) => {
    form.reset()
    console.log("Success!", response)
  })
  .catch((error) => console.error("Error!", error.message));
});