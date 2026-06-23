// Payment popup

const popup = document.getElementById("popup");
const closeBtn = document.querySelector(".close");
const buttons = document.querySelectorAll(".car-card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        popup.style.display = "flex";
    });
});

closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {

    if(e.target === popup){
        popup.style.display = "none";
    }

});

// Fullscreen image viewer

const viewer = document.getElementById("imageViewer");
const viewerImg = document.getElementById("viewerImg");

const carImages = document.querySelectorAll(".car-card img");

carImages.forEach(image => {

    image.addEventListener("click", () => {

        viewer.style.display = "flex";

        viewerImg.src = image.src;

    });

});

viewer.addEventListener("click", () => {

    viewer.style.display = "none";

});