
// Get the modal gallery by id

var modal = document.getElementById("ModalGallery");
var img = 0;
// boooooobs

function openModalGallery(imageIDNumber) {
  img = document.getElementById(imageIDNumber);
  if ( img == null ) {img = document.getElementById(-1);}
  var modalImg = document.getElementById("ImgModal");
  var captionText = document.getElementById("Caption");
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}
	

// Get the element that closes the modal

function closeModalGallery() {

  modal.style.display = "none";
}
//var closeButton = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal

//closeButton.onclick = function() { 
//  modal.style.display = "none";
//  img = 0;
//}

