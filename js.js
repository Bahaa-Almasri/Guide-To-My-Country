// var loader = document.getElement by id --> the variable loader is equal to the element
// here we created a div called preloader --> the loader = this div
// document refers to the html file

window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
});

function setPreloaderImage(imagePath) {
    const preloader = document.getElementById("preloader");
    preloader.style.backgroundImage = `url(${imagePath})`;
}