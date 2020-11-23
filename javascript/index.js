const show = document.querySelector(".nav-items");
const hamIcon = document.querySelector(".ham-icon");
const closeIcon = document.querySelector(".close-icon");

function dropdown(obj, linkShow){
    if(linkShow === 'show'){
        show.classList.toggle("nav-show");
        hamIcon.style.display="none";
        closeIcon.style.display="inline";
    }
    if(linkShow === 'close'){
        show.classList.toggle("nav-show");
        hamIcon.style.display="inline";
        closeIcon.style.display="none";
    }
}