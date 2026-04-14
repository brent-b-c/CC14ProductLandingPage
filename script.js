const learnMoreButton = document.getElementById('learnMoreButton');
const exploreButton = document.getElementById('exploreButton');
const message = document.getElementById('message');
const galleryImage = document.getElementById('galleryImage');

// Learn More Button
if (learnMoreButton && message) {
    learnMoreButton.addEventListener("click", function () {
        message.textContent = 'The Toyota Fortuner offers premium materials, strong performance, and a comfortable driving experience.';
    });
}

if (exploreButton && message) {
    exploreButton.addEventListener("click", function () {
        message.textContent = 'Explore the Toyota Fortuner and discover its features, specifications, and bold design.';
    });
}
if (galleryImages.length > 0) {
    galleryImages.forEach(function (img) {
      img.addEventListener("click", function () {
        galleryImages.forEach(function (image) {
          image.style.transform = "scale(1)";
          image.style.border = "none";
        });
  
        this.style.transform = "scale(1.03)";
        this.style.border = "4px solid #81A6C6";
      });
    });
  }