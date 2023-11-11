const form = document.querySelector("form");
console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault(); //prevent submit

  const height = parseInt(document.querySelector("#height").value); // get value from input tag
  const weight = parseInt(document.querySelector("#weight").value);

  const result = document.querySelector("#results");
  if (height < 0 || height === "" || isNaN(height)) {
    result.innerHTML = `Please give corrent height ${height}`;
  } else if (weight < 0 || weight === "" || isNaN(weight)) {
    result.innerHTML = `Please give corrent weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    result.innerHTML = `${bmi}`;

    const msg = document.querySelector("#msg");
    if (bmi < 18.6) {
      msg.innerHTML = "You are under wieght";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      msg.innerHTML = "Normal wieght";
    } else {
      msg.innerHTML = "Over weight";
    }
  }
});
