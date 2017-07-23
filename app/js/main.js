
// Mean Topics Modal
var topicModal = document.getElementById('myModal');
var btn = document.getElementById('openTopic');
var span = document.getElementsByClassName("close")[0];
var dockitModal = document.getElementById('dockitModal');
var dockBtn = document.getElementById('openDockit');
var spanDock = document.getElementsByClassName("dockClose")[0];
// user clicks image to open the modal
btn.onclick = function() {
  topicModal.style.display = "block";
}

// user click span to close the model
span.onclick = function() {
  topicModal.style.display = "none";

}

// click anywhere outside the modal closes it
window.onclick = function(event) {
  if (event.target == topicModal) {
    topicModal.style.display = "none";
  }
  if (event.target == dockitModal) {
    dockitModal.style.display = "none";
  }
}

// Dockit Modal
dockBtn.onclick = function() {
  dockitModal.style.display = "block";
}

spanDock.onclick = function() {
  dockitModal.style.display = "none";
}
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
