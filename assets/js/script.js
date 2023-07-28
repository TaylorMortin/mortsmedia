var modal = document.getElementById("modal");
    var closeButton = document.getElementsByClassName("close")[0];

    var links = document.getElementsByClassName("modal-link");
    var modalImage = document.getElementById("modal-image");

    function openModal(imageSrc) {
      modal.style.display = "block";
      modalImage.src = imageSrc;
    }

    function closeModal() {
      modal.style.display = "none";
    }

    Array.from(links).forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        openModal(this.href);
      });
    });

    closeButton.addEventListener("click", closeModal);

    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        closeModal();
      }
    });

    // Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("photo_img");
var modalImg = document.getElementById("modal-img");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}