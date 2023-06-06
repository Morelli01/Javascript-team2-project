function round(number, digits) {
  return Math.round(number * digits) / digits;
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {
  round,
  getRandomNumber
}