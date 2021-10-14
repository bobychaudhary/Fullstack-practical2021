var x = document.getElementById("hh");
function subtraction() {
  var value = x.innerHTML;
  if (value - 1 >= 0) {
    x.innerText = value - 1;
  }
}
function addition() {
  var value = x.innerHTML;
  x.innerText = parseInt(value) + 1;
}
