let currentIndex = 0;
const carousel = document.getElementById("carousel");
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
  colours: [
    {
      code: "#FF0000",
      name: "Red",
    },
    {
      code: "#00FF00",
      name: "Green",
    },
    {
      code: "#0000FF",
      name: "Blue",
    },
    {
      code: "#FFFF00",
      name: "Yellow",
    },
    {
      code: "#FFFFFF",
      name: "White",
    },
    {
      code: "#000000",
      name: "Black",
    },
    {
      code: "#808080",
      name: "Grey",
    },
    {
      code: "#FF7518",
      name: "Orange",
    },
    {
      code: "#800080",
      name: "Purple",
    },
    {
      code: "#FFC0CB",
      name: "Pink",
    },
    {
      code: "#FF9A8A",
      name: "Peach",
    },
    {
      code: "#B2A4D4",
      name: "Lavender",
    },
    {
      code: "#8B4513",
      name: "Brown",
    },
    {
      code: "#00FFFF",
      name: "Cyan",
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

function selectCategory(selectedCategory) {
  category = selectedCategory;
  initialize();
  currentIndex = 0;
  document.getElementById("home").style.display = "none";
  document.getElementById("content").style.display = "flex";
}

function initialize() {
  const title = document.getElementById("title");

  if (category === "colours") {
    const colourDiv = document.createElement("div");
    colourDiv.id = "colourDiv";
    colourDiv.style.backgroundColor = data[category][0].code;
    carousel.appendChild(colourDiv);
    title.innerHTML = data[category][0].name;
  } else {
    const img = document.createElement("img");
    img.id = "img";
    img.src = data[category][0].src;
    img.alt = data[category][0].alt;
    img.onload = () => {
      title.innerHTML = data[category][0].alt;
    };
    carousel.appendChild(img);
  }
}

function goHome() {
  document.getElementById("home").style.display = "flex";
  document.getElementById("content").style.display = "none";
  const img = document.getElementById("img");
  img?.remove();
  const colourDiv = document.getElementById("colourDiv");
  colourDiv?.remove();
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

  const title = document.getElementById("title");

  if (category === "colours") {
    const colourDiv = document.getElementById("colourDiv");
    colourDiv.style.backgroundColor = data[category][currentIndex].code;
    title.innerHTML = data[category][currentIndex].name;
  } else {
    const img = document.getElementById("img");
    img.style.opacity = "0.5";
    title.style.opacity = "0.5";

    img.src = data[category][currentIndex].src;
    img.alt = data[category][currentIndex].alt;
    img.onload = () => {
      img.style.opacity = "1";
      title.style.opacity = "1";
      title.innerHTML = data[category][currentIndex].alt;
    };
  }
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
