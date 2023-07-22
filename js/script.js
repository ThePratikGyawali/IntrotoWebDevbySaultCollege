// below JavaScript codes are written by taking help from online resources, not by Pratik Gyawali himself fully. 

function convert() {
  const choiceInput = parseInt(document.getElementById("choice").value);
  const valueInput = parseFloat(document.getElementById("value").value);
  let result = "";

  switch (choiceInput) {
    case 1:
      result = weightConversion(valueInput);
      break;
    case 2:
      result = distanceConversion(valueInput);
      break;
    case 3:
      result = temperatureConversion(valueInput);
      break;
    default:
      result = "Invalid choice. Please enter 1, 2, or 3.";
      break;
  }

  document.getElementById("conversionResult").innerText = result;
}

function weightConversion(pounds) {
  if (isNaN(pounds)) return "Invalid input. Please enter a valid number.";
  const kilograms = pounds * 0.45359237;
  return pounds + " Pounds is equal to " + kilograms.toFixed(2) + " Kilograms.";
}

function distanceConversion(miles) {
  if (isNaN(miles)) return "Invalid input. Please enter a valid number.";
  const kilometers = miles * 1.60934;
  return miles + " Miles is equal to " + kilometers.toFixed(2) + " Kilometers.";
}

function temperatureConversion(fahrenheit) {
  if (isNaN(fahrenheit)) return "Invalid input. Please enter a valid number.";
  const celsius = (fahrenheit - 32) * (5 / 9);
  return fahrenheit + " Fahrenheit is equal to " + celsius.toFixed(2) + " Celsius.";
}
