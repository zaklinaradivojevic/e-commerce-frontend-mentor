//show border and opacity on active img
//container
var slidesContainer = document.getElementById("slides");

// Get all img with class="slider-img" inside the container
var slidesImg = slidesContainer.getElementsByClassName("slider-img");

// Loop through the img and add the active class to the current/clicked img

for (var i = 0; i < slidesImg.length; i++) {
    slidesImg[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
    });
}


//Open  the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


var slideIndex = 1;
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
    var i;
    var slides = document.getElementsByClassName("modal-produkt-slider");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}




function openCart() {
    document.getElementById("shopingCart").style.display = "block";

}

// Close the Modal
function closeCart() {
    document.getElementById("shopingCart").style.display = "none";
}