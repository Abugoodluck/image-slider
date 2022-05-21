const slide = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevbtn')
const nextBtn = document.getElementById('nextbtn');
const intervalTime = 4000;
const auto = true;
let slideInterval;

function nextSlide () {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.nextElementSibling) {
        current.nextElementSibling.classList.add('current');
    }
    else {
        slide[0].classList.add('current')
    }
    setTimeout(() => current.classList.remove('current'))
}
function prevSlide () {
    const current = document.querySelector('.current');
    current.classList.remove('current');
    if (current.previousElementSibling) {
        current.previousElementSibling.classList.add('current');
    }
    else {
        slide[slide.length -1].classList.add('current')
    }
    setTimeout(()=> current.classList.remove('current'))
}

prevBtn.addEventListener('click', e => {
    prevSlide();  
    if (auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime )
        
    }
});
nextBtn.addEventListener('click',e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval)
        slideInterval = setInterval(nextSlide, intervalTime )
        
    }

});

if (auto) {
    slideInterval = setInterval(nextSlide, intervalTime )
    
}
