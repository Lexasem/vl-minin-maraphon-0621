"use strict";

const initSlider = (rootElement, slideConfigs) => {
    const container = document.createElement('div');
    container.classList.add('container');

    const slides = slideConfigs.map((slideConfig) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        slide.style.backgroundImage = `url(${slideConfig.url})`;
        slide.innerHTML = `<h3>${slideConfig.title}</h3>`;
        container.appendChild(slide);
        return slide;
    });

    let currentSlide = slides[0];
    currentSlide.classList.add('active');

    container.addEventListener('click', (e) => {
        const target = e.target;
        const slide = target.closest('.slide');
        if (!slide || slide.classList.contains('active')) {
            return;
        }


        currentSlide.classList.remove('active');
        currentSlide = slide;
        currentSlide.classList.add('active');
    });

    const root = document.querySelector('#root');
    root.appendChild(container);
}

initSlider('#root', [
    {
        title: "KTM Duke",
        url: "https://unsplash.com/photos/4spc49IbnpQ/download?force=true&w=920"
    },
    {
        title: "Honda CB750",
        url: "https://unsplash.com/photos/rU051J7-jqA/download?force=true&w=920"
    },
    {
        title: "Kawasaki Ninja",
        url: "https://unsplash.com/photos/g-00SZm4rZs/download?force=true&w=920"
    },
    {
        title: "ROYAL Enfield classic 350",
        url: "https://unsplash.com/photos/NxE9wel6NJw/download?force=true&w=920"
    },
    {
        title: "Custom bike",
        url: "https://unsplash.com/photos/u3Ws6A3HOx4/download?force=true&w=920"
    },
]);