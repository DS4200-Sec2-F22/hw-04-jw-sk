function addPoint() {
var objX = document.getElementById("xSelect");
  var xChord = objX.options[objX.selectedIndex].text;

  var objY = document.getElementById("ySelect");
  var yChord = objY.options[objY.selectedIndex].text;

  let svg = document.getElementById("frame")

  svg.innerHTML = svg.innerHTML + "<circle cx='" + (50*xChord) + "' cy='" + (500 - 50*yChord) + "' r='10'/>"
}

let button = document.getElementById("button1")
button.addEventListener('click', addPoint);