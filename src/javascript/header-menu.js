
const refBtnMenu = document.getElementById("btn-menu");
const refHeader = document.querySelector("header");
const refBgBackdrop = document.getElementById("backdrop-color");
const refPage = document.getElementById("page");
refBtnMenu.addEventListener("click", visualHid);

refBtnMenu.addEventListener("click", addClassToggle);

refBtnMenu.addEventListener("click", addBackDrop)

refBgBackdrop.addEventListener("click", removeOpen);

refPage.addEventListener("click", addClassActive);

function visualHid() {
    refBtnMenu.classList.add("hidden");
}
function addClassToggle() {
    refHeader.classList.add("open");
    
}
function addBackDrop() {
    refBgBackdrop.classList.add("backdrop");
}

function removeOpen() {
    refHeader.classList.remove("open");
    refBgBackdrop.classList.remove("backdrop");
    refBtnMenu.classList.remove("hidden");
}
function addClassActive() {
    refPage.classList.add("active");
}
