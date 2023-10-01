const panoramaImage = new PANOLENS.ImagePanorama("/pages/projectos/edificio/vr1.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
  autoRotate: true,
  autoRotateSpeed: 0.3,
});

viewer.add(panoramaImage);
