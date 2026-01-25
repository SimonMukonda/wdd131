// Footer: Current Year + Last Modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempC, windKmh) {
  return (
    13.12 +
    0.6215 * tempC -
    11.37 * Math.pow(windKmh, 0.16) +
    0.3965 * tempC * Math.pow(windKmh, 0.16)
  ).toFixed(1);
}

const temp = 10; // Celsius
const windSpeed = 5; // km/h
let windChillText = "N/A";

if (temp <= 10 && windSpeed > 4.8) {
  windChillText = calculateWindChill(temp, windSpeed) + " °C";
}

document.getElementById("windchill").textContent = windChillText;
