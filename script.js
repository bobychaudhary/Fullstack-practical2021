var a = document.getElementById("value");
if (parseInt(a.innerText) == 0) {
  document.getElementById("b1").disabled = true;
}
function increment() {
  if (parseInt(a.innerText) != 0)
    document.getElementById("b1").disabled = false;
  a.innerText = parseInt(a.innerText) + 1;
}
function decrement() {
    if (parseInt(a.innerText) <= 1)
      document.getElementById("b1").disabled = true;
  a.innerText = parseInt(a.innerText) - 1;
}
