let currentIndex = 0;
const carousel = document.querySelector(".carousel");
let touchStartX = 0;
let touchEndX = 0;
const swipeThreshold = 50;
let category = "animals";

const data = {
  fruits: [
    {
      src: "./images/fruits/apple.png",
      alt: "Apple",
    },
    {
      src: "./images/fruits/banana.png",
      alt: "Banana",
    },
    {
      src: "./images/fruits/orange.png",
      alt: "Orange",
    },
    {
      src: "./images/fruits/mango.png",
      alt: "Mango",
    },
    {
      src: "./images/fruits/papaya.png",
      alt: "Papaya",
    },
    {
      src: "./images/fruits/grapes.png",
      alt: "Grapes",
    },
    {
      src: "./images/fruits/guava.png",
      alt: "Guava",
    },
    {
      src: "./images/fruits/pineapple.png",
      alt: "Pineapple",
    },
    {
      src: "./images/fruits/pomegranate.png",
      alt: "Pomegranate",
    },
    {
      src: "./images/fruits/watermelon.png",
      alt: "Watermelon",
    },
    {
      src: "./images/fruits/jackfruit.png",
      alt: "Jackfruit",
    },
    {
      src: "./images/fruits/strawberry.png",
      alt: "Strawberry",
    },
    {
      src: "./images/fruits/avocado.png",
      alt: "Avocado",
    },
  ],
  animals: [
    {
      src: "./images/animals/cat.png",
      alt: "Cat",
    },
    {
      src: "./images/animals/dog.png",
      alt: "Dog",
    },
    {
      src: "./images/animals/elephant.png",
      alt: "Elephant",
    },
    {
      src: "./images/animals/lion.png",
      alt: "Lion",
    },
    {
      src: "./images/animals/giraffe.png",
      alt: "Giraffe",
    },
  ],
};

carousel.addEventListener("touchstart", (e) => {
  touchStartX = e.touches[0].clientX;
});

carousel.addEventListener("touchend", (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function initialize() {
  const img = document.createElement("img");
  const title = document.getElementById("title");
  img.id = "img";
  img.src = data[category][0].src;
  img.alt = data[category][0].alt;
  carousel.appendChild(img);
  title.innerHTML = data[category][0].alt;
}

function selectCategory(selectedCategory) {
  category = selectedCategory;
  initialize();
  currentIndex = 0;
  document.getElementById("home").style.display = "none";
  document.getElementById("content").style.display = "flex";
}

function goHome() {
  document.getElementById("home").style.display = "flex";
  document.getElementById("content").style.display = "none";
  const img = document.getElementById("img");
  img.remove();
  const title = document.getElementById("title");
  title.innerHTML = "";
  currentIndex = 0;
}

function moveSlide(direction) {
  currentIndex += direction;

  if (currentIndex >= data[category].length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = data[category].length - 1;
  }

  const img = document.getElementById("img");
  const title = document.getElementById("title");
  img.style.opacity = "0.5";
  title.style.opacity = "0.5";

  setTimeout(() => {
    img.style.opacity = "1";
    title.style.opacity = "1";
    img.src = data[category][currentIndex].src;
    img.alt = data[category][currentIndex].alt;
    title.innerHTML = data[category][currentIndex].alt;
  }, 150);
}

function handleSwipe() {
  const swipeDistance = touchEndX - touchStartX;

  if (Math.abs(swipeDistance) > swipeThreshold) {
    if (swipeDistance > 0) {
      moveSlide(-1); // Swiped right
    } else {
      moveSlide(+1); // Swiped left
    }
  }
}
