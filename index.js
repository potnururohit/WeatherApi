let inputEle = document.getElementById("location-input");
let tempEle = document.getElementById("temp-value");
let locEle = document.getElementById("location");
let weatherdescEle = document.getElementById("weather-desc");
let btnEle = document.getElementById("btn");

btnEle.onclick = function() {
  if (inputEle.value === "") {
    alert("Enter the location");
  } 
  else {
    const apikey = 'b4989aef833e403ff62e513468cf0a5b'
        const loc = inputEle.value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`;
    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`API request failed with status ${res.status} (${res.statusText})`);
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        const { name } = data;
        const { feels_like } = data.main;
        const { description } = data.weather[0];
        tempEle.innerText = Math.floor(feels_like - 273);
        locEle.innerText = name;
        weatherdescEle.innerText = description;
      })
      .catch(error => {
        console.error(error);
        alert("An error occurred. Please check the console for more details.");
      });

    inputEle.value = "";
  }
};