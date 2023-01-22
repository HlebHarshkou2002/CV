// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// Profile Text Animation

setTimeout(function() {
    document.querySelector('.person-profile__inner').style.display = 'block';
 }, 1500);

// Main Slider

const slides = document.querySelectorAll('.slide'),
      btns_prev = document.querySelectorAll('.btn-prev'),
      btns_next = document.querySelectorAll('.btn-next');

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

activeSlide(index);

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}

for (btn_next of btns_next) {
    btn_next.addEventListener('click', nextSlide);
}

for (btn_prev of btns_prev) {
    btn_prev.addEventListener('click', prevSlide);
}

setInterval(nextSlide, 15000);