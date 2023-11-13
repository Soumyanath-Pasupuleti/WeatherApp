const apiKey = "c6c0fcadbd80a4d50c986d1be5ed2495";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchinput = document.querySelector('.searchinput');
const searchbutton = document.querySelector('button');

const daytype = document.querySelector('.currentemptype');


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data =  await response.json();
    console.log(data);
    
    document.querySelector('.currentlocation').innerHTML = data.name; 
    document.querySelector('.currentemp').innerHTML = data.main.temp + '°C'; 
    document.querySelector('.humper').innerText =   data.main.humidity + '%';
    document.querySelector('.windper').innerText =   data.wind.speed + 'Km/h';
    document.querySelector('.vis').innerText = data.visibility+ 'Km/h';

    if(data.weather[0].description == 'smoke'){
        daytype.innerHTML = 'Smoke';
    }else if(data.weather[0].description == 'clear sky'){
        daytype.innerHTML = 'Clear Sky';
    }else if(data.weather[0].description == 'clear sky'){
        daytype.innerHTML = 'Clear Sky'
    }else if(data.weather[0].description == 'mist'){
        daytype.innerHTML = 'mist'
    }else if(data.weather[0].description == 'rain'){
        daytype.innerHTML = 'rain'
        
    }
}

searchbutton.addEventListener('click',() =>{
        checkWeather(searchinput.value);
})


