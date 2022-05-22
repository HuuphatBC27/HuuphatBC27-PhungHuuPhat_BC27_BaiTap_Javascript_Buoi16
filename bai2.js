function result() {
  var numberX = +document.getElementById("number1").value;
  var numberN = +document.getElementById("number2").value;
  var sum = 0;
  for (var i = 1; i <= numberN; i++) {
    sum += numberX ** i;
  }
  console.log(sum);

  document.getElementById(
    "display"
  ).innerHTML = `số nguyên nhỏ nhất là : ${sum}`;
  document.getElementById("display").style.display = "block";
}
