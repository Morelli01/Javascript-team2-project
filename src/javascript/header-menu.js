
const refBtnMenu = document.getElementById("btn-menu");
const refHeader = document.querySelector("header");
const refBgBackdrop = document.getElementById("backdrop-color");

refBtnMenu.addEventListener("click", visualHid);

refBtnMenu.addEventListener("click", addClassToggle);

refBtnMenu.addEventListener("click", addBackDrop)

refBgBackdrop.addEventListener("click", removeOpen);

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
