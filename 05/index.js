const screens = document.querySelectorAll('.screen');

const startBtn = document.querySelector('.start');
startBtn.addEventListener('click', startBtnClick);


const timeSelectButtons = document.querySelectorAll('.time-btn');
Array.prototype.forEach.call(timeSelectButtons, btn => btn.addEventListener('click', timeBtnClick));

const timer = document.querySelector('#time');

const board = document.querySelector('#board');
const circle = document.createElement('div');
circle.classList.add('circle', 'hide');
circle.addEventListener('click', circleClick)

newGameBtn = document.createElement('a');
newGameBtn.href = '#';
newGameBtn.classList.add('new-game');
newGameBtn.innerText = 'Еще раз';

newGameBtn.addEventListener('click', () => {
    Array.prototype.forEach.call(screens, screen => screen.classList.remove('up'));
})


let gameConfig = {};

function startBtnClick() {
    screens[0].classList.add('up');
    gameConfig = {
        timeLeft: 0,
        width: board.clientWidth,
        height: board.clientHeight,
        score: 0
    };
}

function timeBtnClick(e) {
    const btn = e.target;
    gameConfig.time = parseInt(btn.innerText);
    screens[1].classList.add('up');
    beginGame();
}

function endGame() {
    board.innerHTML = `<h2>Счёт: <span class="primary">${gameConfig.score}</span></h2>`;
    board.append(newGameBtn);
    timer.parentElement.classList.add('hide');
}

function beginGame() {
    board.innerHTML = '';
    timer.parentElement.classList.remove('hide');
    board.append(circle);
    updateTimer();
    const interval = setInterval(() => {
        gameConfig.time--;
        if (gameConfig.time === 0) {
            clearInterval(interval);
            endGame();
        }
        updateTimer();

    }, 1000);
    showCircle();
}

function updateTimer() {
    timer.innerText = timeLeftToString(gameConfig.time);
}

function timeLeftToString(timeLeft) {
    return '00:' + ('0' + timeLeft).slice(-2);
}


function showCircle() {
    const circleSize = getRandomNumber(10, 50);
    const top = getRandomNumber(circleSize, gameConfig.height - circleSize) + 'px';
    const left = getRandomNumber(circleSize, gameConfig.width - circleSize) + 'px';
    circle.style.width = circleSize + 'px';
    circle.style.height = circleSize + 'px';
    circle.style.top = top;
    circle.style.left = left;
    const color = getRandomColor();
    circle.style.background = `linear-gradient(90deg, rgba(${color}, 0.7) 0%, rgba(${color}, 0.9) 47%, rgba(${color}, 1) 100%)`


    circle.classList.remove('hide');
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function circleClick() {
    showCircle();
    gameConfig.score++;
}

function getRandomColor() {
    let color = (new Array(3)).fill(0);
    return color.map(() => getRandomNumber(0, 255)).join(',');
}
