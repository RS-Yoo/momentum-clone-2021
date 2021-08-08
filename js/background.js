const images = ["0.gif", "1.gif", "2.gif", "3.gif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.setAttribute("id", "bg-image");
document.body.appendChild(bgImage);
