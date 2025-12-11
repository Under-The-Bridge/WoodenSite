const menu_btn = document.getElementById("panelMenu");
const hiddenMenu = document.getElementById("hiddenMenu");

document.addEventListener("DOMContentLoaded",()=>{
    hiddenMenu.style.display = "none";
})

menu_btn.addEventListener("click", ()=>{
    let display = hiddenMenu.style.display;
    hiddenMenu.style.display = display == "flex"?"none":"flex";
})