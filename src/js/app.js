import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  let prices = document.querySelectorAll('.hot');
  prices.forEach(element => {
    element.innerText = element.innerText + "🔥"
  });
});
