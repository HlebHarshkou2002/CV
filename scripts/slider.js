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

