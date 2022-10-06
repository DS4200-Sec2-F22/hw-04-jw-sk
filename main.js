let counter = 4;

function hover_over(point_id) {
    document.getElementById(point_id).style.fill= 'yellow';
}

function hover_out(point_id) {
    document.getElementById(point_id).style.fill= 'blueviolet';
}

function show(elem) {
    elem.classList.toggle('yes_border');
}


function addPoint() {
let objX = document.getElementById("xSelect");
  let xChord = objX.options[objX.selectedIndex].text;

  let objY = document.getElementById("ySelect");
  let yChord = objY.options[objY.selectedIndex].text;

  let svg = document.getElementById('frame')

  counter = counter + 1;
  let objID = "(" + xChord + "," + yChord + ")"
  svg.insertAdjacentHTML("beforeend", "<circle class= 'point'" + "' id='" + objID + "' cx='" + (50*xChord) + "' cy='" + (500 - 50*yChord) + "' r='10'/>");

  document.getElementById(objID).addEventListener("click", function(){
    showID(objID);});

  document.getElementById(objID).addEventListener("click", function(){
    show(this);});

  document.getElementById(objID).addEventListener("mouseover", function(){
    hover_over(objID);});

  document.getElementById(objID).addEventListener("mouseout", function(){
    hover_out(objID);});


}

function showID(myID) {
  document.getElementById("text-div").innerHTML = myID;
}

let button = document.getElementById("button1")
button.addEventListener('click', addPoint);
