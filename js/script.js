// below JavaScript codes are written by using online resources, not by Pratik Gyawali himself

function convert() {
  const userInput = parseInt(document.getElementById("conversionInput").value);
  let result = "";

  switch (userInput) {
    case 1:
      result = weightConversion();
      break;
    case 2:
      result = distanceConversion();
      break;
    case 3:
      result = temperatureConversion();
      break;
    default:
      result = "Invalid choice. Please enter 1, 2, or 3.";
      break;
  }

  document.getElementById("conversionResult").innerText = result;
}

function weightConversion() {
  const pounds = parseFloat(prompt("Enter the weight in Pounds:"));
  if (isNaN(pounds)) return "Invalid input. Please enter a valid number.";
  const kilograms = pounds * 0.45359237;
  return pounds + " Pounds is equal to " + kilograms.toFixed(2) + " Kilograms.";
}

function distanceConversion() {
  const miles = parseFloat(prompt("Enter the distance in Miles:"));
  if (isNaN(miles)) return "Invalid input. Please enter a valid number.";
  const kilometers = miles * 1.60934;
  return miles + " Miles is equal to " + kilometers.toFixed(2) + " Kilometers.";
}

function temperatureConversion() {
  const fahrenheit = parseFloat(prompt("Enter the temperature in Fahrenheit:"));
  if (isNaN(fahrenheit)) return "Invalid input. Please enter a valid number.";
  const celsius = (fahrenheit - 32) * (5 / 9);
  return fahrenheit + " Fahrenheit is equal to " + celsius.toFixed(2) + " Celsius.";
}
