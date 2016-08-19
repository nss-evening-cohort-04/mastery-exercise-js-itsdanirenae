
var button = document.getElementById("button");
button.addEventListener("click", noEntry);

var pushIt = document.getElementById("character");
pushIt.addEventListener("keypress", pushReturn);

var pushItAgain = document.getElementById("rows");
pushItAgain.addEventListener("keypress", pushReturn);

function pushReturn(e){
  if (e.keyCode == 13){
   noEntry()
 }
}

function noEntry(){
    if(!character.value) {
      alert("Enter something!")
  }
    else if(!rows.value) {
      alert("Enter something!")
  }
    else{
      userInput();
  }
 }


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


