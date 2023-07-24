const key = "135eddbf3c1d0708d90cc4ff6fa75f0b";
var loc;
var main;
var temp;
var description;
var precipitation;
var humidity;
var speed;
var flag1 = false;
var icontype;


function errorf(){
  $("#startuptext").animate({opacity:0}, 200);
  setTimeout(function(){
    $("#startuptext").html("Something went wrong");
    $("#startuptext").animate({opacity:1}, 300);
  }, 200);
}

function sma(){
  var d1 = new Date();
  var d2 = new Date(Date.now()-259200000);
  
  var todayd = d1.getFullYear()+"-"+(d1.getMonth()+1)+"-"+d1.getDate();
  var pastd = d2.getFullYear()+"-"+(d2.getMonth()+1)+"-"+d2.getDate();
  var d1f;
  var d2f;
  var d3f;
  var location_ = $("#searchbar").val();
  location_.trim();
  location_ = location_.replace(" ", "+")
  fetch("https://api.weatherapi.com/v1/history.json?key=8fe75676a228422496a142506232503&hour=24&q="+location_+"&dt="+pastd+"&end_dt="+todayd)
  .then(response => response.json())
  .then(data => {
    d1f = data.forecast.forecastday[1].day.avgtemp_c;
    d2f = data.forecast.forecastday[2].day.avgtemp_c;
    d3f = data.forecast.forecastday[3].day.avgtemp_c;
    var sma_ = (d1f + d2f + d3f)/3;
    sma_ = Math.round(sma_, 2);
    $("#atomtext").animate({opacity:0}, 200);
    $("#inbutton").animate({opacity:0}, 200);
  setTimeout(function(){
    document.getElementById("atomtext").style.left = "5vw";
    document.getElementById("inbutton").style.visibility = "hidden";
    $("#atomtext").html("Prediction For Tomorrow: "+sma_+"°C");
    $("#atomtext").animate({opacity:1}, 300);
    document.getElementById("predictbutton").style.justifyContent = "centre";
  }, 200);

  })
  .catch(error => errorf());
}

function fetchweather(){
  const anime1 = 650;
  const anime2 = 950;

  if(flag1 == false){
    //Nothing
  }
  else{
    document.getElementById("preframe").style.visibility = "visible";
    $("#startuptext").html("Loading");
    $("#preframe").animate({opacity:1}, anime2-550);
    $("#startupicon").animate({opacity:1}, anime1-550);
    $("#startuptext").animate({opacity:1}, anime1-550);
  }
  var location_ = $("#searchbar").val();
  location_.trim();
  location_ = location_.replace(" ", "+")
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+location_+"&units=metric&appid=135eddbf3c1d0708d90cc4ff6fa75f0b")
  .then(response => response.json())
  .then(data => {
    loc = data.name;
    temp  = data.main.temp;
    temp = (Math.round(temp * 100) / 100).toFixed(1);
    description = data.weather[0].main;
    humidity = data.main.humidity;
    speed  = data.wind.speed;

    var icon = data.weather["0"].icon;
    if (icon === "01d") {
      icontype = "weather-icons-dev/weather-icons-dev/production/line/svg/clear-day.svg";
    } else if (icon === "01n") {
      icontype = "weather-icons-dev/weather-icons-dev/production/line/svg/clear-night.svg";
    } else if (icon === "02d" || icon === "02n") {
      icontype = "weather-icons-dev/weather-icons-dev/production/line/svg/cloudy.svg";
    } else if (icon === "03d" || icon === "03n" || icon === "04d" || icon === "04n") {
      icontype = "weather-icons-dev/weather-icons-dev/production/line/svg/overcast-day.svg";
    } else if (icon === "09d" || icon === "09n") {
      icontype = "weather-icons-dev/weather-icons-dev/production/line/svg/drizzle.svg";
    } else if (icon === "10d" || icon === "10n") {
      icontype = "weather-icons-dev/weather-icons-dev/production/line/svg/rain.svg";
    } else if (icon === "11d" || icon === "11n") {
      icontype = "weather-icons-dev/weather-icons-dev/production/line/svg/thunderstorms-day-rain.svg";
    } else if (icon === "13d" || icon === "13n") {
      icontype = "weather-icons-dev/weather-icons-dev/production/line/svg/snowflake.svg";
    } else if (icon === "50d" || icon === "50n") {
      icontype = "weather-icons-dev/weather-icons-dev/production/line/svg/mist.svg";
    } else {
      icontype = "";
    }

    if(data.hasOwnProperty("rain")){
      precipitation = data.rain["1h"];
    }
    else{
      precipitation = "0.0";
      parseFloat(precipitation);
    }

    setTimeout(function(){
      $("#mainicon").attr("src",icontype);
      $("#location").html(loc);
      $("#temp").html(temp+"°C");
      $("#desc").html(description);
      $("#precip2").html(precipitation+"mm");
      $("#hum2").html(humidity+"%");
      $("#wind2").html(speed+"m/s");
      $("#atomtext").html("Atom");
      document.getElementById("atomtext").style.left = "0vw";
      document.getElementById("atomtext").style.opacity = 1;
      document.getElementById("inbutton").style.visibility = "visible";
      document.getElementById("inbutton").style.opacity = 1;
    }, 250);

    //console.log(data);
    //alert(`Temperature: ${temp}°C`);
    //alert(`Description: ${description}`);
    //alert(`Precipitation: ${precipitation} mm`);
    //alert(`Humidity: ${humidity}%`);
    //alert(`Wind: ${speed} m/s`);

    if(flag1 == true){
      $("#startupicon").animate({opacity:0}, anime1);
      $("#startuptext").animate({opacity:0}, anime1);
      $("#preframe").animate({opacity:0}, anime2);
      setTimeout(function(){
        document.getElementById("preframe").style.visibility = "hidden";
      }, 500);
  
    }
    else{
      $("#startuptext").animate({opacity:0}, anime1);
      $("#startupicon").animate({opacity:0}, anime1);
      $("#preframe").animate({opacity:0}, anime2);
      flag1 = true;
      setTimeout(function(){
        document.getElementById("preframe").style.visibility = "hidden";
      }, 500);
  
    }
    
  })
  .catch(error => errorf());
}

$('#predictbutton').click(function(){  
  sma();
});

$("#marker").click(function(){
  fetchweather();
});