'use strict';

let picturesURL = "./feature/";

let picturesArray = [
    "feature_back_of_head.jpg"
];

let slide = document.getElementById("app");
//slide.innerHTML = "Hello world";
slide.innerHTML = `<img src="${picturesURL + picturesArray[0]}" alt="Slideshow">`;