var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var li = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}
function createListElement() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  var del = document.createElement("button");
  del.appendChild(document.createTextNode("Delete"));
  li.appendChild(del);
  del.onclick = removeParent;

  var done = document.createElement("button");
  done.appendChild(document.createTextNode("Done"));
  li.appendChild(done);
  done.onclick = doneParent;
}
function removeParent(evt) {
  evt.target.parentNode.remove();
}
function doneParent(evt) {
  event.target.parentNode.classList.toggle("done");
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
