"use strict";

var text = document.querySelector('.text');
var showKey = document.querySelector('.showkey');

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