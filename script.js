const currentSymbol = document.getElementById("currency-one");
const afterSymbol = document.getElementById("currency-two");

const currentValue = document.getElementById("currency-one-number");
const afterValue = document.getElementById("currency-two-number");

const convert = document.getElementById("convert-button");
const formula = document.getElementById("formula");

function calculate() {
  const getCurrentSymbol = currentSymbol.value;
  const getAfterSymbol = afterSymbol.value;

  const getCurrentValue = parseFloat(currentValue.value);

  if (getCurrentSymbol === "Celcius" && getAfterSymbol === "Fahrenheit") {
    const total = getCurrentValue * 1.8 + 32;
    afterValue.value = total.toFixed(1);
    formula.style.display = "block";
    if (isNaN(getCurrentValue)) {
      afterValue.value = 32;
      formula.innerText = `Formula => ( 0°C x 1.8 ) + 32 = 32°F`;
    } else {
      formula.innerText = `Formula => ( ${getCurrentValue}°C x 1.8 ) + 32 = ${total.toFixed(
        1
      )}°F`;
    }
  }
  if (getCurrentSymbol === "Celcius" && getAfterSymbol === "Kelvin") {
    const total = getCurrentValue + 273.15;
    afterValue.value = total;
    formula.style.display = "block";
    if (isNaN(getCurrentValue)) {
      afterValue.value = 273.15;
      formula.innerText = `Formula => 0°C + 273.15 = 273.15 K`;
    } else {
      formula.innerText = `Formula => ${getCurrentValue}°C + 273.15 = ${total} K`;
    }
  }
  if (getCurrentSymbol === "Fahrenheit" && getAfterSymbol === "Celcius") {
    const total = ((getCurrentValue - 32) * 5) / 9;
    afterValue.value = total.toFixed(3);
    formula.style.display = "block";
    if (isNaN(getCurrentValue)) {
      afterValue.value = -17.78;
      formula.innerText = `Formula => (0°F - 32) x 5/9 = -17,78°C`;
    } else {
      formula.innerText = `Formula => (${getCurrentValue}°F - 32) x 5/9 = ${total.toFixed(
        3
      )}°C`;
    }
  }
  if (getCurrentSymbol === "Fahrenheit" && getAfterSymbol === "Kelvin") {
    const total = ((getCurrentValue - 32) * 5) / 9 + 273.15;
    afterValue.value = total.toFixed(3);
    formula.style.display = "block";
    if (isNaN(getCurrentValue)) {
      afterValue.value = 255.372;
      formula.innerText = `Formula => ((0°F - 32) x 5/9) + 273.15 = 255.372 K`;
    } else {
      formula.innerText = `Formula => ((${getCurrentValue}°F - 32) x 5/9) + 273.15 = ${total.toFixed(
        3
      )} K`;
    }
  }
  if (getCurrentSymbol === "Kelvin" && getAfterSymbol === "Celcius") {
    const total = getCurrentValue - 273.15;
    afterValue.value = total;
    formula.style.display = "block";
    if (isNaN(getCurrentValue)) {
      afterValue.value = -273.15;
      formula.innerText = `Formula => 0 K - 273.15 = 273.15°C`;
    } else {
      formula.innerText = `Formula => ${getCurrentValue} K - 273.15 = ${total}°C`;
    }
  }
  if (getCurrentSymbol === "Kelvin" && getAfterSymbol === "Fahrenheit") {
    const total = (getCurrentValue - 273.15) * 1.8 + 32;
    afterValue.value = total;
    formula.style.display = "block";
    if (isNaN(getCurrentValue)) {
      afterValue.value = -459.7;
      formula.innerText = `Formula => (0 K - 273.15) * 1.8) + 32 = -459.7°F`;
    } else {
      formula.innerText = `Formula => ((${getCurrentValue} - 273.15) * 1.8) + 32 = ${total}°F`;
    }
  }
  if (getCurrentSymbol == getAfterSymbol) {
    afterValue.value = getCurrentValue;
    formula.style.display = "none";
  }
}

convert.addEventListener("click", calculate);

currentValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    calculate();
  }
});

document.addEventListener("keypress", () => {
  currentValue.focus();
});

currentSymbol.addEventListener("change", () => {
  afterValue.value = "";
});
afterSymbol.addEventListener("change", () => {
  afterValue.value = "";
});
