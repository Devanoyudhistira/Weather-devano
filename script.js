const form = document.querySelector("form");
const input = form.querySelector("input");
const main = document.querySelector("main");
const home = document.getElementById("home-page");
const start = document.getElementById("started");
const homechild = document.querySelectorAll(".anak");
const searchtext = document.querySelector("#searchtext");
const citydetail = document.querySelector("#city-detail");
const cityname = document.querySelector("#city");
const error = document.querySelector("#error-404");
const currweather = document.querySelector('#currweather')
const temp = document.querySelector('#temp');
const detail = document.querySelector('#detail');
const weathericon = document.querySelector('#weathericon')

main.classList.add('hidden')

document.querySelector('#close').addEventListener('click',() => {
 location.reload()
})

start.addEventListener("click", () => {
  homechild.forEach((e, i) => {
    e.classList.add("duration-400");
    setTimeout(() => {
      e.classList.add("translate-x-[100vw]");
    }, i * 300);
  });
  home.classList.add("hidden");
  main.classList.remove("hidden");
  // searchtext.classList.add('animate-slideup')
});

form.addEventListener("submit", (e) => {
  form.classList.add("hidden");
  e.preventDefault();
  let city = input.value;
  searchtext.classList.add("hidden");
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a5b581a7e9f05ec992261b0c738adf21`
  )
    .then((Response) => Response.json())
    .then((json) => {
      if (json.cod === "404") {
        citydetail.classList.remove("hidden");
        error.classList.remove("hidden");
      }
      switch (json.weather[0].main) {
        case "Clear":
          error.classList.add("hidden");
          citydetail.classList.remove("hidden");
          cityname.textContent = city;
          detail.classList.remove('hidden');
          main.classList.replace('neutral','sunny');
          weathericon.src = 'img/sun.png'
          break;
        case "Clouds":
          error.classList.add("hidden");
          citydetail.classList.remove("hidden");
          cityname.textContent = city;
          detail.classList.remove('hidden');
          main.classList.replace('neutral','cloud')
          weathericon.src = 'img/weather.png';
          currweather.classList.replace('text-slate-100','text-sky-600');
          break;
        case "Rains":
          error.classList.add("hidden");
          citydetail.classList.remove("hidden");
          cityname.textContent = city;
          detail.classList.remove('hidden')
          main.classList.replace('neutral','rain')
          weathericon.src = 'img/haze.png'
          break;
        case "Haze":
          error.classList.add("hidden");
          citydetail.classList.remove("hidden");
          cityname.textContent = city;
          detail.classList.remove('hidden')
          main.classList.replace('neutral','hazes')
          weathericon.src = 'img/haze.png';
          currweather.classList.replace('text-slate-100','text-sky-600');
          break;
      }
      temp.textContent = `${parseFloat(json.main.temp)} °C`;
      currweather.textContent = json.weather[0].description;
      document.querySelector('#humidity').textContent = `${json.main.humidity} %`
      document.querySelector('#feels').textContent =  `${json.main.feels_like} °C`
      document.querySelector('#wind').textContent = `${json.wind.speed} Km/H`

    });
});
