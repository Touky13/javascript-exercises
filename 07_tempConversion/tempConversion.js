const convertToCelsius = function(fahrenheit) {

  const fahrenheitToCelsius = (fahrenheit - 32) * 5/9;

  if (Number.isInteger(fahrenheitToCelsius)) {
    return fahrenheitToCelsius;
  } else {
    return Number(fahrenheitToCelsius.toFixed(1));
  }
};

const convertToFahrenheit = function(celsius) {

  const celsiusToFahrenheit = celsius * 9/5 +32;

  if (Number.isInteger(celsiusToFahrenheit)) {
  return celsiusToFahrenheit;
  } else {
    return Number(celsiusToFahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
