function openLightbox(imageSrc) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = imageSrc;
  }
  
  function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
  }
  
  function selectImage() {
    alert("You have selected this image!");
    closeLightbox();
  }
  
  console.log(document.querySelectorAll('.u-gallery-item').length);
  