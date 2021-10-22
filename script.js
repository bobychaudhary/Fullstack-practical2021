var x = document.getElementById("h");
function sub() {
  var val = x.innerHTML;
  if (val - 1 >= 0) {
    x.innerHTML = val - 1;
  } else {
    x.disabled = true;
  }
}
function add() {
  var val = x.innerHTML;

  x.innerHTML = parseInt(val) + 1;
}
