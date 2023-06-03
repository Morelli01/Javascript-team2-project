
const refBtnMenu = document.getElementById("btn-menu");
const refHeader = document.querySelector("header");

refBtnMenu.addEventListener("click", addClassToggle);


function addClassToggle() {
    refHeader.classList.toggle("open");
}
