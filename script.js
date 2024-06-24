slideIndex = 1;
switchSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
    switchSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    switchSlides(slideIndex = n);
}

function switchSlides(n) {
    let i;
    let testimonialSlides = document.getElementsByClassName('testimonial-card');
    let dots = document.getElementsByClassName("dots");
    if (n > testimonialSlides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = testimonialSlides.length}
    // for (i = 0; i < testimonialSlides.length; i++) {
    //     testimonialSlides[i].style.className= "";  
    // }
    testimonialSlides[slideIndex-1].style.className = "slide";  
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";
}

