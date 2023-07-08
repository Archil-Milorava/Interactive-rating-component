const ratePage = document.querySelector(".main-div");
const resultPage = document.querySelector(".main-div2");
const submitButton = document.querySelector(".btn");
const againButton = document.querySelector(".btn2");
const raitingresult = document.querySelector(".raiting-result");
const raitingOptions = document.querySelectorAll(".button");

submitButton.addEventListener("click", () => {
  resultPage.classList.remove("hidden");
  ratePage.style.display = "none";
});

raitingOptions.forEach((rate) => {
  rate.addEventListener("click", () => {
    raitingresult.innerHTML = rate.innerHTML;
  });
});

againButton.addEventListener("click", () => {
  resultPage.classList.add("hidden");
  ratePage.style.display = "";
  raitingresult.innerHTML = "nothing :(";
});
