const slidesDiv = document.querySelector("#slides");

const slideNumber = slidesDiv.children.length;

const arrowDivs = document.querySelectorAll(".arrow");

const navSliders = document.querySelectorAll(".nav-slider");

document.documentElement.style.setProperty("--slide-number", slideNumber);

document.querySelector(".nav-slider").classList.toggle("active");

let selectedSlide = 0;

const nextSlide = (currentSlide) => {
  if (currentSlide === slideNumber - 1) return 0;
  return currentSlide + 1;
};

const prevSlide = (currentSlide) => {
  if (currentSlide === 0) return slideNumber - 1;
  return currentSlide - 1;
};

const toggleNavSliders = (oldSlide, newSlide) => {
  navSliders[oldSlide].classList.toggle("active");
  navSliders[newSlide].classList.toggle("active");
};

const chooseNextSlide = () => {
  const oldSlide = selectedSlide;
  selectedSlide = nextSlide(selectedSlide);
  toggleNavSliders(oldSlide, selectedSlide);
  const width = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--slide-width")
  );

  slidesDiv.style.right = selectedSlide * width + "px";
  return selectedSlide;
};

const choosePrevSlide = () => {
  const oldSlide = selectedSlide;
  selectedSlide = prevSlide(selectedSlide);
  toggleNavSliders(oldSlide, selectedSlide);
  const width = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--slide-width")
  );

  slidesDiv.style.right = selectedSlide * width + "px";
  return selectedSlide;
};

const chooseSlide = (chosenSlide) => {
  const oldSlide = selectedSlide;
  selectedSlide = chosenSlide;
  toggleNavSliders(oldSlide, selectedSlide);
  const width = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--slide-width")
  );

  slidesDiv.style.right = selectedSlide * width + "px";
  return selectedSlide;
};

const changePic = (e) => {
  const currentDiv = e.currentTarget;
  const currentDivClassList = currentDiv.classList;
  if (currentDivClassList.contains("right-arrow")) {
    chooseNextSlide();
    return;
  }
  if (currentDivClassList.contains("left-arrow")) {
    choosePrevSlide();
    return;
  }

  const chosenSlide = parseInt(currentDiv.dataset.slideNumber);
  chooseSlide(chosenSlide);
};

arrowDivs.forEach((element) => element.addEventListener("click", changePic));

navSliders.forEach((element) => element.addEventListener("click", changePic));
