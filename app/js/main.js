
// Mean Topics Modal
var topicModal = document.getElementById('myModal');
var btn = document.getElementById('openTopic');
var span = document.getElementsByClassName("close")[0];

// Dockit Modal
var dockitModal = document.getElementById('dockitModal');
var dockBtn = document.getElementById('openDockit');
var spanDock = document.getElementsByClassName("dockClose")[0];

// Online Lending Modal
var lendingModal = document.getElementById('lendingModal');
var lendBtn = document.getElementById('openLending');
var spanLend = document.getElementsByClassName('lendClose')[0];

// About Modal
var aboutModal = document.getElementById('aboutModal');
var aboutBtn = document.getElementById('openAbout');
var spanAbout = document.getElementsByClassName('aboutClose')[0];

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
  if (event.target == lendingModal) {
    lendingModal.style.display = "none";
  }
  if (event.target == aboutModal) {
    aboutModal.style.display = "none";
  }
}

// Dockit Modal
dockBtn.onclick = function() {
  dockitModal.style.display = "block";
}

spanDock.onclick = function() {
  dockitModal.style.display = "none";
}

// Lending Modal
lendBtn.onclick = function() {
  lendingModal.style.display = "block";
}

spanLend.onclick = function() {
  lendingModal.style.display = "none";
}

// About Modal
aboutBtn.onclick = function() {
  aboutModal.style.display = "block";
}

spanAbout.onclick = function() {
  aboutModal.style.display = "none";
}
