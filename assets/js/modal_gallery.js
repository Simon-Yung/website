
// Get the modal gallery by id

var modal = document.getElementById("ModalGallery");
var img = -1;
var currentImage = -1;
var modalCaption = document.getElementById("Caption");

// Modal

function openModalGallery(imageIDNumber) {
  currentImage = imageIDNumber;
  img = document.getElementById(imageIDNumber);
  if ( img == null ) {img = document.getElementById(-1);}
  var modalImg = document.getElementById("ImgModal");
  var captionText = document.getElementById("Caption");
  modal.style.display = "flex";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

//prev and next


function nextModal(n) {
  currentImage += n;
  img = document.getElementById(currentImage);
  if ( img == null ) { currentImage -= n; img = document.getElementById(currentImage);}
  var modalImg = document.getElementById("ImgModal");
  var captionText = document.getElementById("Caption");
  modal.style.display = "flex";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
}

// toggle caption
function toggleInfo() {
  if (modalCaption.style.display != "block") 
    { modalCaption.style.display = "block";}
  else
    { modalCaption.style.display = "none";}
}

	

// Get the element that closes the modal

function closeModalGallery() {

  modal.style.display = "none";
}