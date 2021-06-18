const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');

const slidesCount = mainSlide.querySelectorAll('div').length;
const height = document.querySelector('.container').clientHeight;

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;


document.querySelector('.controls').addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (btn && btn.dataset.dir) {
        changeSlide(btn.dataset.dir);
    }
})

let activeSlideIndex = 0;

function changeSlide(dir) {
    activeSlideIndex = (slidesCount + activeSlideIndex + 1 * (dir + 1)) % slidesCount;
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
    sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}