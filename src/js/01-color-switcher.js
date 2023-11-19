//ЗАВДАННЯ 1. ПЕРЕМИКАЧ КОЛЬОРІВ.
//Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку «Stop» зміна кольору фону повинна зупинятися.
//Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).
//Для генерування випадкового кольору використовуй функцію getRandomHexColor


const btnStart = document.querySelector('.btn-start');
const btnStop = document.querySelector('.btn-stop');
const body = document.querySelector('body');


btnStart.addEventListener('click', startchangeColors);
btnStop.addEventListener('click', stopChangeColors);
let id;

function startchangeColors() {
    btnStart.disabled = true;
     id = setInterval(() => {
        function getRandomHexColor() {
          return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
        }
        body.style.backgroundColor = getRandomHexColor();
        }, 1000);
        
}

function stopChangeColors() {
    clearInterval(id);
    btnStart.disabled = false;
}    
