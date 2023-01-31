let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");
let redlight = 1,
  yellowlight = 0,
  greenlight = 0;
let stop;

function lightChange() {
  if (redlight === 1 && yellowlight === 0 && greenlight === 0) {
    red.style.opacity = "0.1";
    yellow.style.opacity = "1";
    redlight = 0;
    yellowlight = 1;
  } else if (yellowlight === 1 && redlight === 0 && greenlight === 0) {
    yellow.style.opacity = "0.1";
    green.style.opacity = "1";
    yellowlight = 0;
    greenlight = 1;
  } else if (yellowlight === 0 && redlight === 0 && greenlight === 1) {
    green.style.opacity = "0.1";
    red.style.opacity = "1";
    greenlight = 0;
    redlight = 1;
  }
}
function FunctionStart() {
  clearInterval(stop);
  stop = setInterval(lightChange, 1000);
  
}
function FunctionStop() {
  clearInterval(stop);
  
}
