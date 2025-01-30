const convertToCelsius = function (tempFahrenheit) {
  const tempCelsius = (tempFahrenheit - 32) / 1.8;
  const roundTempCelsius = Math.round(tempCelsius * 10) / 10
  return roundTempCelsius;
};

const convertToFahrenheit = function (tempCelsius) {
  const tempFahrenheit = (tempCelsius * 1.8) + 32;
  const roundTempFahrenheit = Math.round(tempFahrenheit * 10) / 10
  return roundTempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
