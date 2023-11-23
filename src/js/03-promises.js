//Напиши скрипт, який на момент сабміту форми викликає функцію createPromise(position, delay) стільки разів, скільки ввели в поле amount. Під час кожного виклику передай їй номер промісу (position), що створюється, і затримку, враховуючи першу затримку (delay), введену користувачем, і крок (step).

//Доповни код функції createPromise таким чином, щоб вона повертала один проміс, який виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт, в якому будуть властивості position і delay зі значеннями однойменних параметрів. Використовуй початковий код функції для вибору того, що потрібно зробити з промісом - виконати або відхилити.



import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs={
  form: document.querySelector(".form"),
  delayData: document.querySelector('input[name="delay"]'),
  stepData: document.querySelector('input[name="step"]'),
  amountData: document.querySelector('input[name="amount"]'),
  btn: document.querySelector("button"),
};

refs.form.addEventListener("submit", handleSubmit);

let delay;
let step;
let amount;
let position; 


//Обробляємо і виводимо певну кількість(amount) промісів  з затримкою (delay), викликаючи функцію  createPromise в циклі for -  amount разів
function handleSubmit(event) {
event.preventDefault();
  delay=Number(refs.delayData.value);
  step=Number(refs.stepData.value);
  amount=refs.amountData.value;
  
for (let i = 0; i < amount; i += 1) {
  createPromise(i + 1, delay)
    .then(({position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    position += 1;
    delay += step;
}
}

//Функція для створення 1-го промісу
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve ({position, delay})
      } else {
        reject ({position, delay})
      }
    }, delay);
  }
  ) 
}

