function convertToFahrenheit(c) {
  const fahrenheit = (9/5) * c + 32;
  return Number(fahrenheit.toFixed(1));
};

function convertToCelsius(f) {
  const celsius = (5/9) * (f - 32);
  return Number(celsius.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
