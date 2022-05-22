function ketQua() {
  var sum = 0;
  //   var i = 0;
  var total = 10000;
  //   c1 :
  //   while ((total = 10000)) {
  //     i++;
  //     sum += i;
  //     if (sum > total) {
  //       break;
  //     }
  //   }
  //   console.log(i);
  // c2 :
  for (var i = 0; sum < total; i++) {
    sum += i;
    if (sum > total) {
      break;
    }
  }
  document.getElementById("text").innerHTML = `số nguyên nhỏ nhất là : ${i}`;
  document.getElementById("text").style.display = "block";
}
