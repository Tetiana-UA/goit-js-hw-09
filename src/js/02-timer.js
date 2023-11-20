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
  id=setInterval(() => {
    const currentDate=new Date();
    ms = targetDate-currentDate;
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
    
      return { days, hours, minutes, seconds };
    }
    
    const timeObject =  convertMs(ms);

    console.log(timeObject);

    const days=timeObject.days;
    const hours=timeObject.hours;
    const minutes=timeObject.minutes;
    const seconds=timeObject.seconds;

   
    shownDays.textContent=`${days.toString.padStart(2,"0")}`;
    shownHours.textContent=`${hours.toString.padStart(2,"0")}`;
    shownMinutes.textContent=`${minutes.toString.padStart(2,"0")}`;
    shownSeconds.textContent=`${seconds.toString.padStart(2,"0")}`;
    


    //function addLeadingZero () {
    //const days=timeObject.days.toString.padStart(2,"0");
    //const hours=timeObject.hours.toString.padStart(2,"0");;
    //const minutes=timeObject.minutes.toString.padStart(2,"0");;
    //const seconds=timeObject.seconds.toString.padStart(2,"0");;
    //return;
    //}
    //addLeadingZero();
    

    //console.log(days);
    //console.log(hours);
    //console.log(minutes);
    //console.log(seconds);




    }, 1000);

  if (ms <= 0) {
    clearInterval(id);
  }
  

}

