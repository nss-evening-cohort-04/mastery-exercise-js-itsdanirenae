
var button = document.getElementById("button");

button.addEventListener("click", userInput);

  var objectHolder = {
    rowsEntered : "",
    characterEntered : "",
  }

function userInput() {
  objectHolder.rowsEntered = document.getElementById("rows").value;
  objectHolder.characterEntered = document.getElementById("character").value;
  buildPyramid(objectHolder)
}

function buildPyramid(myInput) {
  var growTree = "";
  for (var i = 0; i < myInput.rowsEntered; i++) {
    var characterz = myInput.characterEntered.repeat(i*2+1)
    var numSpacez = ((myInput.rowsEntered*2-1) - (i*2+1)) / 2;
    var spacez = " ".repeat(numSpacez);
    console.log(spacez + characterz);
  }
}




