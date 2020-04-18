'use strict';

let picturesURL = "./feature/";

let picturesArray = [
    "feature_back_of_head.jpg",
    "feature_blastula.jpg",
    "feature_blue_figure.jpg"
];

let currentSlide = 0;
let maxSlides = picturesArray.length;

const advanceSlide = () => {
    //return the increment of currentSlide unless it is at the last slide. If so, return zero;
    return ++currentSlide == maxSlides ?
        0 :
        slideNumber;
}

let slide = document.getElementById("app");
slide.innerHTML = `<img src="${picturesURL + picturesArray[currentSlide]}" alt="Slideshow">`;
currentSlide = advanceSlide(); 
slide.innerHTML = `<img src="${picturesURL + picturesArray[currentSlide]}" alt="Slideshow">`;