

const getloc = async () =>{
  const url = 'http://ip-api.com/json/?fields=status,country,city,lat,lon,timezone';
  const response = await fetch(url);
  const data = await response.json();
  // console.log(response);
  // console.log(data.lat);
  // console.log(data.lon);

  return data;
}


const getweather = async (lat, lon) =>{
  const api_key = '4fea99fa2d0f4e72f0fcb6c496dfc8af';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;

  const response = await fetch(url);
  const data = await response.json();



  return data;
  //console.log(data);
}


function getIcon(weMain){
  let icon;
  switch(weMain){
    case 'Thunderstorm':
      icon = `${weMain}.svg`;
      break;
    case 'Drizzle':
      icon = `${weMain}.svg`;
      break;
    case 'Rain':
      icon = `${weMain}.svg`
      break;
    case 'Snow':
      icon = `${weMain}`;
      break;
    case 'Clear':
      const DayOrNight = getDayOrNight();
      icon = `${weMain}-${DayOrNight}.svg`
      break;
    case 'Clouds':
      icon = `${weMain}.svg`
      break;
    case 'Atmosphere':
      icon = `${weMain}.png`
      break;
  }
  return icon;
}
function getDayOrNight(){
  let DayOrNight;
  var d = new Date();
  const hour = d.getHours();
  if (hour >= 6 && hour <= 19){
    DayOrNight = 'Day';

  }else {
    DayOrNight = 'Night';
  }
  return DayOrNight;
}

function getTemp(weTemp){
  const K = weTemp;
  const F = (K - 273.15) * 9/5 +32;
  const C = K - 273.15;

  return temp = {kel:Math.floor(K), far:Math.floor(F), cel:Math.floor(C)};
}

const loti = document.querySelector('.timezone');
const icon = document.querySelector('.icon');
const dese = document.querySelector('.degree-section');
const deg = document.querySelector('.degree-section h2');
const unit = document.querySelector('.degree-section span');
const tede = document.querySelector('.tempreture-description');





getloc()
  .then(locData => {
    //console.log(locData.lat);
    const timeZone = locData.timezone;
    loti.textContent = timeZone;
    return getweather(locData.lat,locData.lon);
  }).then(weData => {
   //console.log(weData);
    const weTemp= weData.main.temp;
    const weMain = weData.weather[0].main;
    const weDes = weData.weather[0].description;
    console.log(weTemp);
    console.log(weMain);
    console.log(weDes);
    const iconname = getIcon(weMain);
    icon.innerHTML= `<img src= "icons/${iconname}"></img>`
    deg.textContent = Math.floor(weTemp);
    unit.textContent = 'K';


    dese.addEventListener('click', (e) =>{
      if (unit.textContent == 'K'){
        deg.textContent = getTemp(weTemp).far;
        unit.textContent = 'F';
      }else if(unit.textContent == 'F'){
        deg.textContent = getTemp(weTemp).cel;
        unit.textContent = 'C';
      }else{
        deg.textContent = getTemp(weTemp).kel;
        unit.textContent = 'K';
      }
    })
    tede.textContent = weDes;
  })
