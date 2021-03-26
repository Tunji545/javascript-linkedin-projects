const HOURHAND = document.querySelector("#hour");
const MINHAND = document.querySelector("#minute");
const SECHAND = document.querySelector("#second");

var date = new Date();
var hr = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + ( sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

function runTheClock() {

  hrPosition = hrPosition + (3/360)

  minPosition = minPosition + (6 / 60)

  secPosition = secPosition + 6;

  HOURHAND.style.transform = 'rotate(' + hrPosition + 'deg)';
  MINHAND.style.transform = 'rotate(' + minPosition + 'deg)';
  SECHAND.style.transform = 'rotate(' + secPosition + 'deg)';
}

var interval =setInterval(runTheClock, 1000);