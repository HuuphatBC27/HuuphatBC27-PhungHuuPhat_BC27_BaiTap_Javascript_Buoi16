function baitap4() {
  var content = "";
  for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      content +=
        "<label style='background-color : red ; width : 100% ; color :#fff ; text-align : center ; font-size :20px'>" +
        "Div Chẳn :" +
        i +
        "</label>" +
        "<br>";
    } else {
      content +=
        "<label style='background-color : blue; width : 100% ; color :#fff ; text-align : center ; font-size : 20px '>" +
        "Div Lẻ :" +
        i +
        "</label>" +
        "<br>";
    }
  }
  document.getElementById("bt4").style.display = "block";
  document.getElementById("bt4").innerHTML = content;
  console.log(content);
}
