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



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

