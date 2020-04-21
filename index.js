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
function preloader() {
    for (let i = 0; i < MAXSLIDES; i++) {
        new Image().src = URL + picturesArray[i];
    }
}

function addLoadEvent(func) {
    var oldOnload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    }
    else {
        window.onload = function() {
            if (oldOnload) {
                oldOnload();
            }
            func();
        }
    }
}

addLoadEvent(preloader);

/*** Function to fade in */
const setFadeIn = () => {
    //https://www.digitalocean.com/community/tutorials/how-to-modify-attributes-classes-and-styles-in-the-dom
    let slide = document.querySelector("#app");
    slide.classList.add("fadeIn");
}

const removeFadeIn = () => {
    let slide = document.querySelector("#app");
    slide.classList.remove("fadeOut");
}

/*** Function to display next slide */
const display = () => {

  if (count === MAXSLIDES) {
    count = 0
  } 
  
  let outputLink = URL + picturesArray[count++];
  test.innerHTML = `<img src=${outputLink} alt="slideshow">`;
  
  let fadeIn = 

}


/*** Advance to the next slide every two seconds */
let interval = 1000;
let slideShowTimer = setInterval(display, interval);

/*** To-do */
/*
[ ] Implement CSS fade in and fade out
*/