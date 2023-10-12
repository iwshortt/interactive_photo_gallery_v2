// ======================================
//  Search Bar
// ======================================

// https://www.geeksforgeeks.org/search-bar-using-html-css-and-javascript/ -- Search Bar reference.
// https://stackoverflow.com/questions/2914456/finding-an-image-tag-using-the-alt-text -- Search using alt text.

// Search Bar
function searchBar() {
    let usrInput = document.getElementById('search').value;
    usrInput = usrInput.toLowerCase();
    let x = document.getElementsByClassName('hover-shadow');

    for ( let i = 0; i < x.length; i++) {
        if ( !x[i].alt.toLowerCase().includes(usrInput)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}
// End Search Bar

// ======================================
//  Lightbox
// ======================================

// https://www.w3schools.com/howto/howto_js_lightbox.asp -- Lightbox reference.

// Open Lightbox
function openLightbox() {
    document.getElementById("myLightbox").style.display = "block";
}

// Close Lightbox
function closeLightbox() {
    document.getElementById("myLightbox").style.display = "none";
}

let slideIndex = 1;
showSlide(slideIndex);

// Prev/Next Controls
function plusSlides(n) {
    showSlide(slideIndex += n );
}

// Thumbnail Slides
function currentSlide(n) {
    showSlide(slideIndex = n );
}

//Thumbnail Image Controls
function showSlide(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("thumb-demo");
    let captionText = document.getElementById("caption");

    if ( n > slides.length ) {
        slideIndex = 1;
    }
    if ( n < 1 ) {
        slideIndex = slides.length;
    }

    for ( i = 0; i < slides.length; i++ ) {
        slides[i].style.display = "none"
    }
    for ( i = 0; i < dots.length; i++ ) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "  active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}