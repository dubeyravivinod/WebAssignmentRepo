async function getWeather(){
    let search=document.getElementById('search');
    console.log(search.value);
    const res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`);
    const data=await res.json();
    console.log(data);
 
    document.getElementById('card').innerHTML=` <div class="cardheader">
    <h3>Weather of <span>${data.name}</span></h3>
 </div>
 <div class="cardbody">
    <div class="sky">Cloud : <span>${data.weather[0].main}</span></div>
    <div class="temp">Temprature : <span>${data.main.temp} C</span></div>
    <div class="wind">Wind Speed : <span>${data.wind.speed}km/h</span></div>
 </div>`
 
 }
