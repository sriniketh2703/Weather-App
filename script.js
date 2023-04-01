// // // * DOM essentials
const inputArea = document.querySelector("input");

const CurrentConditionBtn = document.querySelector(".currentConditionBtn");
const imgContainer = document.querySelector(".img-container");
const img = document.querySelector(".img");

const paragraph = document.querySelectorAll(".child");
const imgPara = document.querySelector(".img-text");

const headers = {
  key: "6f7c9367d3844b90b3d131222233103",
};

CurrentConditionBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const URL = `http://api.weatherapi.com/v1/current.json?key=${headers.key}&q=${inputArea.value}&aqi=no`;

  fetch(URL, { headers })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // Process the data here
      console.log(data);
      document.querySelector("section").style.opacity = 1;
      img.src = `${data.current.condition.icon}`;
      img.alt = `${data.current.condition.text}`;
      imgContainer.style.opacity = 1;
      imgPara.textContent = `The weather is "${data.current.condition.text}"`;

      paragraph[0].textContent = `Date: ${
        data.current.last_updated.split(" ")[0]
      }`;
      paragraph[1].textContent = `Location: ${data.location.name}, ${data.location.country}`;
      paragraph[2].textContent = `Current Temperature: ${data.current.temp_c}C`;
      paragraph[3].textContent = `Humidity: ${data.current.humidity}%`;
      inputArea.value = "";

      * Manually reloading the page after 10 seconds.
      setTimeout(() => {
        window.location.reload();
      }, 10000);
    })
    .catch((error) => {
      console.log(" The error is " + error);
    });
});
