let menu_btn = document.getElementsByClassName("menu-btn");
let menu_options = document.getElementsByClassName("menu-options");

let menu_state = false;
menu_btn[0].addEventListener("click", ()=>{
    if(menu_state===false) {
        menu_options[0].style.left = 0;
        menu_state = true;
    } else {
        menu_options[0].style.left = "-100%";
        menu_state = false;
    }
});