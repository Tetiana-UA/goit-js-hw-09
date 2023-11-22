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


function handleSubmit(event) {
event.preventDefault();
  delay=refs.delayData.value;
  step=refs.stepData.value;
  amount=refs.amountData.value;

  function createPromise(position, delay) {
  
    return new Promise((resolve, reject) => {
      const shouldResolve = Math.random() > 0.3;
      const TimeId = setTimeout(() => {
        if (shouldResolve) {
          resolve ({position, delay})
        } else {
          reject ({position, delay})
        }
      }, delay);
    }
    ) 
  }


for (let i = 0; i < amount; i += 1) {
  
  const intervalId = setInterval(() => {
    position += 1;
    createPromise(position, delay)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    }, delay+=step);

  
}
}



