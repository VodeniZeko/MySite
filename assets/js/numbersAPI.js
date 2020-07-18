// NUMBERS API NUMBER API //

$(document).ready(function() {
  var rapidApiKey = config.MY_KEY;
  var today = new Date();
  var dd = Number(today.getDate());
  var mm = Number(today.getMonth());
  var settings = {
    async: true,
    crossDomain: true,
    url: `https://numbersapi.p.rapidapi.com/${mm}/${dd}/date?fragment=true&json=true`,
    method: "GET",
    headers: {
      "x-rapidapi-host": "numbersapi.p.rapidapi.com",
      "x-rapidapi-key": rapidApiKey
    }
  };

  $.ajax(settings).done(function(res) {
    pre = "On today's date, ";
    text = pre + res.text;
    $("#numbersText").html(text);
  });
});

myInputBtn = $("#my-input-btn");
myInputBtn.on("click", function() {
  let rapidApiKey = config.MY_KEY;
  let value = document.getElementById("my-input").value;

  if (value) {
    date = value.split(".");
    day = date[0].replace(/ /g, "");
    month = date[1].replace(/ /g, "");
    year = date[2].replace(/ /g, "");
    md = {};
    ye = {};
    // TODO: make the dates readable such as 3rd and months are being
    // actual names of months instead of integers
    let seeDate = {
      async: true,
      crossDomain: true,
      url: `https://numbersapi.p.rapidapi.com/${month}/${day}/date?fragment=true&json=true`,
      method: "GET",
      headers: {
        "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        "x-rapidapi-key": rapidApiKey
      }
    };

    $.ajax(seeDate).done(function(res2) {
      preDate = "On " + " " + day + " " + month + ",";
      myDate = preDate + " " + res2.text;
      $("#month-day-text").html(myDate);
    });

    let seeYear = {
      async: true,
      crossDomain: true,
      url: `https://numbersapi.p.rapidapi.com/${year}/year?fragment=true&json=true`,
      method: "GET",
      headers: {
        "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        "x-rapidapi-key": rapidApiKey
      }
    };

    $.ajax(seeYear).done(function(res3) {
      preYear = "In " + " " + year + ",";
      myYear = preYear + " " + res3.text;
      $("#year-text").html(myYear);
    });
  } else {
    alert("Click on the 📅 (calendar) and choose a date first. ");
  }
});

// NUMBERS API NUMBER API  ENDS//
