'use strict';




const advanceSlide = (slideNumber, maxSlides) => {
    //return the increment of currentSlide unless it is at the last slide. If so, return zero;
    return slideNumber + 1 === maxSlides ?
        0 :
        slideNumber + 1;
}

class Slideshow {
    constructor() {
        this.currentSlide = 0;
        this.picturesURL = "./feature/";
        this.picturesArray = [
            "feature_back_of_head.jpg",
            "feature_blastula.jpg",
            "feature_blue_figure.jpg"
        ];
    }

    displaySlide() {
        this.currentSlide = advanceSlide(this.currentSlide, this.picturesArray.length);
        return `<img src="${this.picturesURL + this.picturesArray[this.currentSlide]}" alt="Slideshow">`;
    }
}

let mySlideshow = new Slideshow();
//document.getElementById("app").innerHTML = "hello world";
document.getElementById("app").innerHTML = mySlideshow.displaySlide();

//let slide = document.getElementById("app");
//slide.innerHTML = `<img src="${picturesURL + picturesArray[currentSlide]}" alt="Slideshow">`;
//currentSlide = advanceSlide(currentSlide); 
//slide.innerHTML  = currentSlide;
//slide.innerHTML = `<img src="${picturesURL + picturesArray[currentSlide]}" alt="Slideshow">`;

//setInterval(displaySlide(currentSlide))