// Page loader
$(window).on("load", function(){
    $("#main").fadeOut("fast")
});


// send sms button
function show(){
    document.getElementById('form').style.display="block";
}
function hide(){
    document.getElementById('form').style.display="none";
}


// menu bar
$(".bx-menu").click(function () {
    $("nav").slideToggle({
    });
});


// side button
function show1(){
    document.getElementById('Requiremnet-form').style.display = "block";
    if(sideBtn === sideBtn){
        document.getElementById('sideBtn').style.display = "none";
    }
}
function hide1(){
    document.getElementById('Requiremnet-form').style.display = "none";
    if(sideBtn === sideBtn){
        document.getElementById('sideBtn').style.display = "block";
    }
}


// slide show start
let slideindex = 0;
slideshow()

function slideshow() {
    let slideimg = document.getElementsByClassName('myslide');

    if (slideindex == slideimg.length) {
        slideindex = 0;
    }

    for (let i = 0; i < slideimg.length; i++) {
        slideimg[i].style.display = "none";
    }
    slideimg[slideindex].style.display = "block";
    slideindex = slideindex + 1;

    setTimeout(slideshow, 3000);
}