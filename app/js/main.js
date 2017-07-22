
// get the model
var modal = document.getElementById('myModal');

// get the image that opens the modal
var btn = document.getElementById('openTopic');

// get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// user clicks image to open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// user click span to close the model
span.onclick = function() {
  modal.style.display = "none";
}

// click anywhere outside the modal closes it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
