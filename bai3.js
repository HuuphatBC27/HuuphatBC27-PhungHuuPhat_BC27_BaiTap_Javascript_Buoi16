function factorial() {
  var number4 = +document.getElementById("number3").value;
  var factorial = 1;
  for (var i = 1; i <= number4; i++) {
    factorial *= i;
  }
  document.getElementById(
    "audition"
  ).innerHTML = `số giai thừa là  : ${factorial}`;
  document.getElementById("audition").style.display = "block";
}
