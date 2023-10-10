const counter = document.getElementById("counter");
const counterName = "counter";

onload(setInterval(setCounter, 1000));

function setCounter() {
  const counter = sessionStorage.getItem(counterName);
  if (counter) {
    sessionStorage.setItem(counterName, parseInt(counter) + 1);
  } else {
    sessionStorage.setItem(counterName, 0);
  }
  showCounter();
}

function showCounter() {
  counter.innerText = sessionStorage.getItem(counterName);
}
