$(function () {
  // header. slider

  $(".slider__inner").slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  });

  // button back to top

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#btn__top").fadeIn();
    } else {
      $("#btn__top").fadeOut();
    }
  });

  $("#btn__top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 800);
    return false;
  });

  // timer

  // Set the date we're counting down to
  let countDownDate = new Date("Mar 4, 2021 0:00:00").getTime();

  // Update the count down every 1 second
  let clockInterval = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element
    let daysEl = document.getElementById("timer__days");
    let daysEl2 = document.getElementById("timer__days2");
    let hoursEl = document.getElementById("timer__hours");
    let minutesEl = document.getElementById("timer__minutes");
    let secondsEl = document.getElementById("timer__seconds");

    days = days <= 0 ? "0" : days;
    hours = hours < 10 ? "0" + hours : hours <= 0 ? "0" : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes <= 0 ? "0" : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds <= 0 ? "0" : seconds;

    daysEl.innerHTML = days;
    daysEl2.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;

    // If the count down is finished, write some text
    if (distance <= 0) {
      daysEl.innerHTML = "0";
      hoursEl.innerHTML = "0";
      minutesEl.innerHTML = "00";
      secondsEl.innerHTML = "00";
      clearInterval(clockInterval);
      document.getElementById("form__timer__text").innerHTML =
        "Акция завершена";
    }
  }, 1000);
});
