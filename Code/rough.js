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
    sma_ = Math.round(sma_, 1);
    $("#atomtext").animate({opacity:0}, 200);
    $("#inbutton").animate({opacity:0}, 200);
  setTimeout(function(){
    document.getElementById("inbutton").style.visibility = "Hidden";
    $("#atomtext").html("Prediction For Tomorrow: "+sma_+"°C");
    $("#atomtext").animate({opacity:1}, 300);
  }, 200);

  })
  .catch(error => errorf());