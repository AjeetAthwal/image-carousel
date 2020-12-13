const slidesDiv = document.querySelector("#slides");

const slideNumber = slidesDiv.children.length;

document.documentElement.style.setProperty("--slide-number", slideNumber);

let selectedSlide = 0;

const nextSlide = (currentSlide) => {
  if (currentSlide === slideNumber - 1) return 0;
  return currentSlide + 1;
};

const prevSlide = (currentSlide) => {
  if (currentSlide === 0) return slideNumber - 1;
  return currentSlide - 1;
};

const chooseNextSlide = () => {
  selectedSlide = nextSlide(selectedSlide);
  const width = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--slide-width")
  );

  slidesDiv.style.right = selectedSlide * width + "px";
  return selectedSlide;
};

const choosePrevSlide = () => {
  selectedSlide = prevSlide(selectedSlide);
  const width = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue("--slide-width")
  );

  slidesDiv.style.right = selectedSlide * width + "px";
  return selectedSlide;
};
