window.onload = () => {
  // preloader
  document.getElementById("bg__video").addEventListener("canplaythrough",()=>{
    console.log(document.getElementById("preloader").style.display = "none");
  });

  // VanillaTilt 
  VanillaTilt.init(document.querySelectorAll(".includes__item"), {
    max: 25,
    speed: 400,
  });
    
  // обработчик ввода номера телефона
  const inputPhoneEl = document.querySelector(".form__phone");
  inputPhoneEl.oninput = (event) => {
    let re = /\D+/gi;
    let v = event.target.value;
    v = v.replace(re, "");
    v.length <= 0
      ? (v = "")
      : v.length === 1
      ? (v = "+" + v)
      : v.length === 2
      ? (v = "+" + v[0] + "(" + v[1])
      : v.length === 3
      ? (v = "+" + v[0] + "(" + v[1] + v[2])
      : v.length === 4
      ? (v = "+" + v[0] + "(" + v[1] + v[2] + v[3])
      : v.length === 5
      ? (v = "+" + v[0] + "(" + v[1] + v[2] + v[3] + ")" + v[4])
      : v.length === 6
      ? (v = "+" + v[0] + "(" + v[1] + v[2] + v[3] + ")" + v[4] + v[5])
      : v.length === 7
      ? (v =
        "+" + v[0] + "(" + v[1] + v[2] + v[3] + ")" + v[4] + v[5] + v[6]) : v.length === 8
      ? (v = "+" + v[0] + "(" + v[1] + v[2] + v[3] + ")" + v[4] + v[5] + v[6] + "-" + v[7])
      : v.length === 9
      ? (v = "+" + v[0] + "(" + v[1] + v[2] + v[3] + ")" + v[4] + v[5] + v[6] + "-" + v[7] + v[8])
      : v.length === 10
      ? (v = "+" + v[0] + "(" + v[1] + v[2] + v[3] + ")" + v[4] + v[5] + v[6] + "-" + v[7] + v[8] + "-" + v[9])
      : (v = "+" + v[0] + "(" + v[1] + v[2] + v[3] + ")" + v[4] + v[5] + v[6] + "-" + v[7] + v[8] + "-" + v[9] + v[10]);
      event.target.value = v;
  };


  // timer

  // Задаём конкретную дату завершения акции
  // let countDownDate = new Date("Apr 01, 2021 0:00:00").getTime();

  //  или конкретное количество дней до окончания
  const countDays = 3;
  let countDownDate;
  // Обновляем дату каждую секунду используя setInterval
  let clockInterval = setInterval(function () {
    localStorage.getItem('countDownDate') != null ? countDownDate = localStorage.getItem('countDownDate') : (countDownDate = new Date().getTime() + countDays * 1000 * 60 * 60 * 24) && (localStorage.setItem('countDownDate', countDownDate));
    const now = new Date().getTime();
    const distance = countDownDate - now;
    
    // Вычисляем days, daysInscription, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    days = days <= 0 ? "0" : days;
    hours = hours < 10 ? "0" + hours : hours <= 0 ? "0" : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes <= 0 ? "0" : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds <= 0 ? "0" : seconds;

    // находим элементы на экране
    const daysEl = document.getElementById("timer__days");
    const daysEl2 = document.getElementById("timer__days2");
    const daysInscriptionEl = document.getElementById(
      "timer__days__inscription"
    );
    const daysInscriptionEl2 = document.getElementById(
      "timer__days__inscription2"
    );
    const hoursEl = document.getElementById("timer__hours");
    const minutesEl = document.getElementById("timer__minutes");
    const secondsEl = document.getElementById("timer__seconds");

    // присваиваем элементам значения
    daysEl.innerHTML = daysEl2.innerHTML = days;
    daysInscriptionEl.innerHTML = daysInscriptionEl2.innerHTML = getNumEnding(
      days,
      ["день", "дня", "дней"]
    );
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    // Если счётчик на нуле выводим надпись на экран
    if (distance <= 0) {
      localStorage.removeItem('countDownDate');
      // daysEl.innerHTML = "0";
      // hoursEl.innerHTML = "0";
      // minutesEl.innerHTML = "00";
      // secondsEl.innerHTML = "00";
      // clearInterval(clockInterval);
      // document.getElementById("form__timer__text").innerHTML =
        // "Акция завершена";
      }
    }, 1000);

    function getNumEnding(iNumber, aEndings) {
      let sEnding, i;
      iNumber = iNumber % 100;
      if (iNumber >= 11 && iNumber <= 19) {
        sEnding = aEndings[2];
      } else {
        i = iNumber % 10;
        switch (i) {
          case 1:
            sEnding = aEndings[0];
            break;
          case 2:
          case 3:
          case 4:
            sEnding = aEndings[1];
            break;
          default:
            sEnding = aEndings[2];
      }
    }
    return sEnding;
  }
};

