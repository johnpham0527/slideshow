'use strict';

let picturesURL = "./feature/";

let picturesArray = [
    "feature_back_of_head.jpg",
    "feature_blastula.jpg",
    "feature_blue_figure.jpg"
];

let currentSlide = 0;

const advanceSlide = (slideNumber) => {
    //return the increment of currentSlide unless it is at the last slide. If so, return zero;
    return slideNumber + 1 === picturesArray.length ?
        0 :
        slideNumber + 1;
}

const displaySlide = () => {
    //call advanceSlide, then output the img tag HTML
    


}



let slide = document.getElementById("app");
slide.innerHTML = `<img src="${picturesURL + picturesArray[currentSlide]}" alt="Slideshow">`;
currentSlide = advanceSlide(currentSlide); 
slide.innerHTML  = currentSlide;
//slide.innerHTML = `<img src="${picturesURL + picturesArray[currentSlide]}" alt="Slideshow">`;