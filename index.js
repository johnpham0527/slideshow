'use strict';

let test = document.getElementById("app");
const URL = "http://www.john-pham.com/audreybergensten/feature/";
let picturesArray = [
            "feature_back_of_head.jpg",
            "feature_blastula.jpg",
            "feature_blue_figure.jpg",
            "feature_cosmic_waves.jpg",
            "feature_crossed_figures.jpg",
            "feature_dream.jpg",
            "feature_eye_beam.jpg",
            "feature_eyesmouths.jpg",
            "feature_flyer.jpg",
            "feature_head_on_hill.jpg",
            "feature_heads_gears.jpg",
            "feature_klees_trees.jpg",
            "feature_nudie.jpg",
            "feature_pink_cheeks.jpg",
            "feature_pink_snowman.jpg",
            "feature_red_box.jpg",
            "feature_silver-gold.jpg",
            "feature_wavy_hair.jpg",
            "feature_wrapped_figures.jpg"
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