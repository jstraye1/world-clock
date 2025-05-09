function updateTime() {
  //New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM D, YYYY");
    newYorkTimeElement.innerHTML = `${newYorkTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
  //Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector(".date");
    let berlinTimeElement = berlinElement.querySelector(".time");
    let berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTime.format("MMMM D, YYYY");
    berlinTimeElement.innerHTML = `${berlinTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
  let taipeiElement = document.querySelector("#taipei");
  if (taipeiElement) {
    let taipeiDateElement = taipeiElement.querySelector(".date");
    let taipeiTimeElement = taipeiElement.querySelector(".time");
    let taipeiTime = moment().tz("Asia/Taipei");

    taipeiDateElement.innerHTML = taipeiTime.format("MMMM D, YYYY");
    taipeiTimeElement.innerHTML = `${taipeiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  function updateDropdownTime() {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
      cityTimeZone = moment.tz.guess();
    }
    let cityTime = moment().tz(cityTimeZone);
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let citiesElement = document.querySelector("#cities-container");
    citiesElement.innerHTML = `<div class="cities">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <a href="/">Back to Home</a>`;
  }
  updateDropdownTime();
  setInterval(updateDropdownTime, 1000);
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
