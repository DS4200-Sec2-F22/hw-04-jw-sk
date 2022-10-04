var counter = 4;

document.getElementById("circle-1").addEventListener("click", function(){
    showID("circle-1");});

document.getElementById("circle-2").addEventListener("click", function(){
    showID("circle-2");});

document.getElementById("circle-3").addEventListener("click", function(){
    showID("circle-3");});

document.getElementById("circle-4").addEventListener("click", function(){
    showID("circle-4");});



function addPoint() {
var objX = document.getElementById("xSelect");
  var xChord = objX.options[objX.selectedIndex].text;

  var objY = document.getElementById("ySelect");
  var yChord = objY.options[objY.selectedIndex].text;

  let svg = document.getElementById("frame")

  counter = counter + 1;
  var objID = "circle-" + counter
  svg.insertAdjacentHTML("beforeend", "<circle id='" + objID + "' cx='" + (50*xChord) + "' cy='" + (500 - 50*yChord) + "' r='10'/>");

  document.getElementById(objID).addEventListener("click", function(){
    showID(objID);});
}

function showID(myID) {
  document.getElementById("text-div").innerHTML = myID;
}

let button = document.getElementById("button1")
button.addEventListener('click', addPoint);