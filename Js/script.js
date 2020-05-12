let modalBox = document.querySelector(".modal-box");
let galleryImages = document.querySelectorAll(".gallery-image-container img");
let galleryContainer = document.querySelectorAll(".gallery-image-container");
let modalImage = document.querySelector(".modal-image");



for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", function() {
        modalBox.classList.remove("hidden");
        modalImage.src = galleryImages[i].src;
    })

}

modalBox.addEventListener("click", function() {
    modalBox.classList.add("hidden");
})
document.addEventListener("keydown", function(event) {
    if (event.key == "Escape") {
        modalBox.classList.add("hidden");
    }
    console.log(event.repeat)
})



function randomNumber() {
    let rn = Math.floor(Math.random() * galleryImages.length);
    return rn;
}


for (let i = 0; i < galleryContainer.length; i++) {
    galleryContainer[i].style.order = randomNumber();

}