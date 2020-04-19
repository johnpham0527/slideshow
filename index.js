'use strict';

let test = document.getElementById("app");
const URL = "http://www.john-pham.com/audreybergensten/feature/";
let picturesArray = [
            "feature_back_of_head.jpg",
            "feature_blastula.jpg",
            "feature_blue_figure.jpg"
        ];

let count = 0;
const MAXSLIDES = picturesArray.length;

/*** Pre-fetch images */
window.onload = () => {
    setTimeout(() => {
        for (let i = 0; i < MAXSLIDES; i++) {
            new Image().src = URL + picturesArray[i];
        }
    }, 1000) //set this function to load every 1000 milliseconds so that it doesn't interfere with the rest of the page's loading
};

/*** Display next slide */
const display = () => {

  if (count === max) {
    count = 0
  } 
  
  let outputLink = URL + picturesArray[count++];
  test.innerHTML = `<img src=${outputLink} alt="slideshow">`;
  
}

/*** Advance to the next slide every one second */
let slideShowTimer = setInterval(display, 1000);