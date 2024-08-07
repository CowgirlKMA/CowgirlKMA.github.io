// this function lets you click on the link and it then scrolls to where that section starts
var marginY = 0;
var destination = 0;
var speed = 10;
var scroller = null;

function initScroll(elementId){
    destination = document.getElementById(elementId).offsetTop;

    scroller = setTimeout(function(){
        initScroll(elementId);
    }, 1);

    marginY = marginY + speed;

    if(marginY >= destination){
        clearTimeout(scroller);
    }

    window.scroll(0, marginY);
}


// Get the navbar
var navbar = document.getElementById("navbar");
// Get the offset position of the navbar
var shouldStickPosition = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function addOrRemoveStickyClass() {
    if (window.scrollY >= shouldStickPosition) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

window.onscroll = () => {
    addOrRemoveStickyClass();
};

window.onresize = () => {
    shouldStickPosition = navbar.offsetTop;
};

/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "myNavbar") {
        x.className += " responsive";
    } else {
        x.className = "myNavbar";
    }}


//Slideshow on about page
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
}
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}