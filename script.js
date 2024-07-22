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

/* Toggle between adding and removing the "responsive" class to navbar when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navbar")
    if (x.className === "navbar") {
            x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// this function is for the scroll to top button 
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
//   document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

