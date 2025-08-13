const back = document.querySelector("#back");
const backModal = document.querySelector("#backModal");

back.addEventListener("click", () => {
  backModal.classList.toggle("hidden");
  backModal.classList.toggle("flex");

  document.querySelector("#comfirmBack").addEventListener("click", () => {
    document.location.href = "../index.html";
  });
});
