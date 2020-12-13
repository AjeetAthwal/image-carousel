const mainDiv = document.querySelector("#container");

console.log(mainDiv.children);
console.log(mainDiv.childNodes);

console.log([].slice.call(mainDiv.children));

const slideNumber = [].slice
  .call(mainDiv.children)
  .reduce((accumulator, current) => {
    if (current.dataset.slideNumber !== undefined) accumulator++;
    return accumulator;
  }, 0);

let selectedSlide = 0;

const nextSlide = (currentSlide) => {
  if (currentSlide === slideNumber - 1) return 0;
  return currentSlide + 1;
};

const prevSlide = (currentSlide) => {
  if (currentSlide === 0) return slideNumber - 1;
  return currentSlide - 1;
};

const chooseNextSlide = (currentSlide) => {
  mainDiv
    .querySelector(`[data-slide-number="${currentSlide}"]`)
    .classList.toggle("visible");
  selectedSlide = nextSlide(currentSlide);
  mainDiv
    .querySelector(`[data-slide-number="${selectedSlide}"]`)
    .classList.toggle("visible");
  return selectedSlide;
};

const choosePrevSlide = (currentSlide) => {
  mainDiv
    .querySelector(`[data-slide-number="${currentSlide}"]`)
    .classList.toggle("visible");
  selectedSlide = prevSlide(currentSlide);
  mainDiv
    .querySelector(`[data-slide-number="${selectedSlide}"]`)
    .classList.toggle("visible");
  return selectedSlide;
};
