function round(number, digits) {
  return Math.round(number * digits) / digits;
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function renderStars(element, rating) {
  return (element.innerHTML = `
    <div class="film_rating" style="--rating:${
      rating / 2
    };" aria-label="Rating of this film is ${Math.round(
    rating / 2
  )} out of 5."></div>
`);
}

export { round, getRandomNumber, renderStars };
