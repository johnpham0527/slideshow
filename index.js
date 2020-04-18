'use strict';

let picturesURL = "./feature/";

let picturesArray = [
    "feature_back_of_head.jpg",
    "feature_blastula.jpg",
    "feature_blue_figure.jpg"
];

let currentSlide = 0;
let maxSlides = picturesArray.length;

let slide = document.getElementById("app");
slide.innerHTML = `<img src="${picturesURL + picturesArray[currentSlide]}" alt="Slideshow">`;