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