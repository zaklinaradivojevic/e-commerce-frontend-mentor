//show border and opacity on active img
//container
var slidesContainer = document.getElementById("slides");

// Get all img with class="slider-img" inside the container
var slidesImg = slidesContainer.getElementsByClassName("slider-img");

// Loop through the img and add the active class to the current/clicked img

for (var i = 0; i < slidesImg.length; i++) {
    slidesImg[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
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
    showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("modal-produkt-slider");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function openCart() {
    document.getElementById("cart").style.display = "block";
}

// Close the Modal
function closeCart() {
    document.getElementById("cart").style.display = "none";
}

const button = document.getElementById("cart-btn");
const cart = document.getElementById("cartCount");
i = 1;
button.addEventListener("click", () => {
    cart.innerText = i++;
});

var slide_index = 1;
slidesDisplay(slide_index);
function nextSlide(n) {
    slidesDisplay((slide_index += n));
}
function currentSlide(n) {
    slidesDisplay((slide_index = n));
}
function slidesDisplay(n) {
    var i;
    var slidesImg = document.getElementsByClassName("imgSlider");
    if (n > slidesImg.length) {
        slide_index = 1;
    }
    if (n < 1) {
        slide_index = slidesImg.length;
    }
    for (i = 0; i < slidesImg.length; i++) {
        slidesImg[i].style.display = "none";
    }
    slidesImg[slide_index - 1].style.display = "block";
}

let increment = document.getElementById("plus");
let decrement = document.getElementById("minus");
let counter = document.getElementById("output");

function add_to_counter(increment) {
    let cur_count = parseInt(counter.innerText);
    let new_count = cur_count + increment;
    counter.innerText = new_count;
}

function openMenu() {
    document.getElementById("mobileMenu").style.display = "block";
}
function closeMenu() {
    document.getElementById("mobileMenu").style.display = "none";
}

function addToCart() {
    let price = 125.0;
    let counter = document.getElementById("output").innerText;
    let total = price * counter;
    let badge = document.getElementById("cartCount");
    document.getElementById("total").innerHTML = `<p>${total}</p>`;
    document.getElementById("counterNumb").innerHTML = `<p> x ${counter}</p>`;

    document.getElementById("full").style.display = "block";
    document.getElementById("cartEmpty").style.display = "none";
}
function deleteCart() {
    document.getElementById("full").style.display = "none";
    document.getElementById("cartEmpty").style.display = "block";
}
