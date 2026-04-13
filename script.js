const slider = document.querySelector(".patents-slider");
const slides = document.querySelectorAll(".patents-slide");
const nextBtn = document.querySelector(".right-arrow");
const prevBtn = document.querySelector(".left-arrow");

let index = 0;

function showSlide(){
    slider.style.transform = `translateX(-${index * 100}%)`;
}



nextBtn.addEventListener("click", () => {
    index++;
    if(index >= slides.length){
        index = 0;
    }
    showSlide();
});



prevBtn.addEventListener("click", () => {
    index--;
    if(index < 0){
        index = slides.length - 1;
    }
    showSlide();
});



setInterval(() => {
    index++;
    if(index >= slides.length){
        index = 0;
    }
    showSlide();
}, 3000);










document.addEventListener("DOMContentLoaded", function(){

const track = document.querySelector(".achievement-track")
const nextBtn = document.querySelector(".right-arrow")
const prevBtn = document.querySelector(".left-arrow")
const dots = document.querySelectorAll(".dot")

let dotIndex = 0

function slide(){

track.style.transform = "translateX(-100%)"

setTimeout(()=>{

track.style.transition = "none"
track.style.transform = "translateX(100%)"

setTimeout(()=>{
track.style.transition = "transform 0.6s ease"
track.style.transform = "translateX(0)"
},50)

},600)





updateDots()

}

/* Dots update */

function updateDots(){

dots.forEach(dot=>dot.classList.remove("active"))

dotIndex++

if(dotIndex >= dots.length){
dotIndex = 0
}

dots[dotIndex].classList.add("active")

}

/* Auto slide */

setInterval(slide , 3000)

/* Arrow buttons */

nextBtn.addEventListener("click", slide)
prevBtn.addEventListener("click", slide)

})










document.addEventListener("DOMContentLoaded", function(){

const buttons = document.querySelectorAll(".event-btn")
const track = document.querySelector(".gallery-track")
const dots = document.querySelectorAll(".dot")

const next = document.querySelector(".gallery-arrow.right")
const prev = document.querySelector(".gallery-arrow.left")

let index = 0

function updateSlider(){

track.style.transform = `translateX(-${index * 100}%)`

dots.forEach(dot => dot.classList.remove("active"))
dots[index].classList.add("active")

}

/* button click */

buttons.forEach(button => {

button.addEventListener("click", () => {

buttons.forEach(btn => btn.classList.remove("active"))

button.classList.add("active")

index = 0

updateSlider()

})

})

/* arrows */

next.addEventListener("click", () => {

index++

if(index >= dots.length){
index = 0
}

updateSlider()

})

prev.addEventListener("click", () => {

index--

if(index < 0){
index = dots.length - 1
}

updateSlider()

})

/* auto slide */

setInterval(() => {

index++

if(index >= dots.length){
index = 0
}

updateSlider()

}, 3000)

})



document.addEventListener("DOMContentLoaded", function(){

const years = document.querySelectorAll(".year-block")

years.forEach(year => {

year.addEventListener("click", ()=>{

years.forEach(y => y.classList.remove("active"))
year.classList.add("active")

})

})

})