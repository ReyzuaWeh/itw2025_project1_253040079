const scriptURL =
  "https://script.google.com/macros/s/AKfycbycqPPDXzAGfdaM_r_1yAPFswzVSFfggeo7Oa72PGQ3qn3nmTXv264stupVdsA1K9QrFQ/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => toastr.success("Terkirim!"))
    .catch(() => toastr.error("Gagal Terkirim!"));
});
