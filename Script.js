const input = document.querySelector("input")
const btn = document.getElementById("btn")
const icon = document.getElementById("icon")
const weather = document.getElementById("weather")
const temperature = document.getElementById("temperature")
const description = document.getElementById("description")

console.log("Script.js file is loaded!");
btn.addEventListener("click", ()=>{
    let city = input.value;
    getWeather(city);
})
function getWeather(city){
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84a84fb479d1a1b7d77f2b0ee1c7eaea
    `)
    .then(response => response.json())
    .then(data => {
    console.log(data);
    // Process your weather data here
    const iconCode = data.weather[0].icon;
    document.getElementById("icon").innerHTML = '<img src ="https://openweathermap.org/img/wn/50n.png" width="200" height="200" >';
    
    console.log(iconCode);
    const wc = data.name;
    weather.innerHTML = `${wc}`;
    const temp = (data.main.temp-273).toFixed(2);
    console.log(temp);
    temperature.innerHTML = `${temp}C`;
    
    const desc = data.weather[0].description;
    console.log(desc);
    description.innerHTML = `${desc}`;
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });


}
