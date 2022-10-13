
var a;
function hide(){
    if(a==1){
        document.getElementById("form-2").style.display="none";
        return a=0
    }
    else{
        document.getElementById("form-2").style.display="none";
        return a=0
    }
}
let searchFrom = document.querySelector(".search-from");

document.querySelector("#search-btn").onclick = () => {
    searchFrom.classList.toggle('active');
    navbar.classList.remove('active');
    shopingCart.classList.remove('active');
    loginForm.classList.remove('active')
}

let shopingCart = document.querySelector(".shoping-cart");

document.querySelector("#cart-btn").onclick = () => {
    shopingCart.classList.toggle('active');
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
    loginForm.classList.remove('active')
}

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle('active');
    shopingCart.classList.remove('active');
    searchFrom.classList.remove('active');
    loginForm.classList.remove('active')
}
let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
    navbar.classList.remove('active');
    shopingCart.classList.remove('active');
    searchFrom.classList.remove('active');
    loginForm.classList.toggle('active');
}
// window.onscroll = () => {
//     navbar.classList.remove('active');
//     shopingCart.classList.remove('active');
//     searchFrom.classList.remove('active');
//     loginForm.classList.remove('active');
// }

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay:4000,
        disableOnInteraction:false,

    },
    centeredSlides:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});


var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay:{
        delay:4000,
        disableOnInteraction:false,

    },
    centeredSlides:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});