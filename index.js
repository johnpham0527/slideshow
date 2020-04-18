'use strict';




const advanceSlide = (slideNumber) => {
    //return the increment of currentSlide unless it is at the last slide. If so, return zero;
    return slideNumber + 1 === picturesArray.length ?
        0 :
        slideNumber + 1;
}

function displaySlide() {
    //this function has the side effect of incrementing currentSlide
    //call advanceSlide, then output the img tag HTML
    currentSlide = advanceSlide(slideNumber);
    let slide = document.getElementById("app");
    slide.innerHTML = `<img src="${picturesURL + picturesArray[currentSlide]}" alt="Slideshow">`;

}

class Slideshow {
    constructor() {
        this.currentSlide = 0;
        this.slideshow = document.getElementById("app");
        this.picturesURL = "./feature/";
        this.picturesArray = [
            "feature_back_of_head.jpg",
            "feature_blastula.jpg",
            "feature_blue_figure.jpg"
        ];
    }

    displaySlide() {
        this.currentSlide = advanceSlide(slideNumber);
        slideshow.innerHTML = `<img src="${picturesURL + picturesArray[currentSlide]}" alt="Slideshow">`;
    
    }
}

let mySlideshow = new Slideshow();


//let slide = document.getElementById("app");
//slide.innerHTML = `<img src="${picturesURL + picturesArray[currentSlide]}" alt="Slideshow">`;
//currentSlide = advanceSlide(currentSlide); 
//slide.innerHTML  = currentSlide;
//slide.innerHTML = `<img src="${picturesURL + picturesArray[currentSlide]}" alt="Slideshow">`;

//setInterval(displaySlide(currentSlide))