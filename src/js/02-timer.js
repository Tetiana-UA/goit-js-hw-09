//Завдання 2 - таймер зворотного відліку до певної дати.

//HTML містить готову розмітку таймера, поля вибору кінцевої дати і кнопку, по кліку на яку, таймер повинен запускатися.

//Використовуй бібліотеку flatpickr для того, щоб дозволити користувачеві кросбраузерно вибрати кінцеву дату і час в одному елементі інтерфейсу.
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const input=document.querySelector("#datetime-picker");
const btnStart=document.querySelector("button");
const shownDays=document.querySelector(".days");
const shownHours=document.querySelector(".hours");
const shownMinutes=document.querySelector(".minutes");
const shownSeconds=document.querySelector(".seconds");

btnStart.disabled=true;


let targetDate;
let ms;
let intervalId;



const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate=new Date();
    targetDate=selectedDates[0];
    console.log(targetDate);
  
  if ((selectedDates[0]-currentDate) <= 0 ) {
  alert("Please choose a date in the future");
  } else {
  btnStart.disabled=false;
  }

  },
};

flatpickr("#datetime-picker", options);

btnStart.addEventListener("click", timerBack);

function timerBack() {
  intervalId=setInterval(() => {
    const currentDate=new Date();
    ms = targetDate-currentDate;

    //Функція конвертування мідісекунд в  год хв сек 
    function convertMs(ms) {
      // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
    
      // Remaining days
      const days = Math.floor(ms / day);
      // Remaining hours
      const hours = Math.floor((ms % day) / hour);
      // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
      // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    // функція повертвє обєкт, з якого витягуємо (деструктуризуємо) властивості days, hours, minutes, seconds
      return { days, hours, minutes, seconds }; 
    }
    
    //В константу timeobject записуємо результат функціi конвертування ms (обєкт)
    const timeObject =  convertMs(ms);
    console.log(timeObject);

    //В елементи сторінки запитуємо окремо кожну властивість, обробивши її функцією addLeadingZero
    shownDays.textContent=addLeadingZero(timeObject.days);
    shownHours.textContent=addLeadingZero(timeObject.hours);
    shownMinutes.textContent=addLeadingZero(timeObject.minutes);
    shownSeconds.textContent=addLeadingZero(timeObject.seconds);

    //Додаємо 0 перед год, хв та сек
    function addLeadingZero(number) {
      return String(number).padStart(2,0);
    }

    
  //Перевіряємо, якщо різниця в часі менше 1 секунди, то зупиняємо таймер
  if (ms < 1000) {
    clearInterval(intervalId);
  }
  
  }, 1000);
  

}
  
  


