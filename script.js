function display1(value) {
  document.getElementById("screen").value += value;
}

function clearDisplay() {
  document.getElementById("screen").value = '';
}

function deleteLast() {
  const display = document.getElementById("screen");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const x = document.getElementById("screen").value;
  let y = eval(x);
  document.getElementById("screen").value = y;
  return y;
}