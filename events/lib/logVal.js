"use strict";

var text = document.querySelector('.text');
var showKey = document.querySelector('.showkey');
var showKeyName = document.querySelector('.keyval');

//onkeydown
document.getElementById('demo').addEventListener('keyup', getVal);
function getVal() {
  console.log(document.getElementById('demo').value);
  text.innerHTML = document.getElementById('demo').value;
}

//alt key prop
document.getElementById('demo').addEventListener('keydown', altKeyIsPressed);
function altKeyIsPressed(e) {
  if (e.altKey) {
    showKey.innerHTML = 'The alt key has been pressed';
  } else {
    showKey.innerHTML = 'The alt key was not pressed';
  }
}

//key prop
document.getElementById('demo').addEventListener('keydown', displayKey);
function displayKey(e) {
  var btnName = e.key;

  //display what key has been pressed
  console.log("you've pressed " + btnName);

  //will only show text when 'S' is pressed
  if (btnName == 'S' || btnName == 's') {
    showKeyName.innerHTML = "you've pressed 'S' key ";
  }
}
document.getElementById('demo').addEventListener('keyup', keyCount);

//determine how many times the key has been pressed
function keyCount(e) {
  var count = [];
  var btnName = e.key;
  count[btnName] = (count[btnName] | 0) + 1;
  console.log(count[btnName]);
  if (btnName == 'S' || btnName == 's') {
    count[btnName] = (count[btnName] | 0) + 1;
    //console.log(count[btnName]);
    //document.querySelector('.key_press_count').innerHTML = ++count;
  }
}