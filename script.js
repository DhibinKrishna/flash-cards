let currentIndex = 0;
const carousel = document.querySelector(".carousel");
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50;

const data = [
  {
    src: "./images/fruits/apple.png",
    width: "512",
    height: "512",
    alt: "Apple",
  },
  {
    src: "./images/fruits/banana.png",
    width: "512",
    height: "512",
    alt: "Banana",
  },
  {
    src: "./images/fruits/orange.png",
    width: "512",
    height: "512",
    alt: "Orange",
  },
  {
    src: "./images/fruits/papaya.png",
    width: "512",
    height: "512",
    alt: "Papaya",
  },
  {
    src: "./images/fruits/grapes.png",
    width: "512",
    height: "512",
    alt: "Grapes",
  },
  {
    src: "./images/fruits/guava.png",
    width: "512",
    height: "512",
    alt: "Guava",
  },
  {
    src: "./images/fruits/pineapple.png",
    width: "341",
    height: "512",
    alt: "Pineapple",
  },
  {
    src: "./images/fruits/pomegranate.png",
    width: "512",
    height: "512",
    alt: "Pomegranate",
  },
  {
    src: "./images/fruits/watermelon.png",
    width: "512",
    height: "512",
    alt: "Watermelon",
  },
  {
    src: "./images/fruits/jackfruit.png",
    width: "512",
    height: "512",
    alt: "Jackfruit",
  },
];

carousel.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function onLoad() {
  const img = document.createElement("img");
  img.id = "img";
  img.src = data[0].src;
  img.width = data[0].width;
  img.height = data[0].height;
  img.alt = data[0].alt;
  carousel.appendChild(img);
  const title = document.getElementById("title");
  title.innerHTML = data[0].alt;
}

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex >= data.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = data.length - 1;
  }

  // carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  const img = document.getElementById("img");
  const title = document.getElementById("title");
  img.style.opacity = "0";
  title.style.opacity = "0";

  setTimeout(() => {
    img.style.opacity = "1";
    title.style.opacity = "1";
    img.src = data[currentIndex].src;
    img.width = data[currentIndex].width;
    img.height = data[currentIndex].height;
    img.alt = data[currentIndex].alt;
    title.innerHTML = data[currentIndex].alt;
  }, 300);
}

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) > swipeThreshold) {
    if (swipeDistance > 0) {
      moveSlide(-1); // Swiped right
    } else {
      moveSlide(1); // Swiped left
    }
  }
}
