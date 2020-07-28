// NUMBERS API NUMBER API //
require("dotenv").config();
$(document).ready(function() {
  const API_KEY = process.env.NUMBERS_API;
  console.log(API_KEY);
  let today = new Date();
  let dd = Number(today.getDate());
  let mm = Number(today.getMonth());
  let settings = {
    async: true,
    crossDomain: true,
    url: `https://numbersapi.p.rapidapi.com/${mm}/${dd}/date?fragment=true&json=true`,
    method: "GET",
    headers: {
      "x-rapidapi-host": "numbersapi.p.rapidapi.com",
      "x-rapidapi-key": API_KEY
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
  let value = document.getElementById("my-input").value;

  if (value) {
    date = value.split(".");
    day = date[0].replace(/ /g, "");
    month = date[1].replace(/ /g, "");
    year = date[2].replace(/ /g, "");

    const dayPicker = d => {
      switch (d) {
        case "1":
          return d + "st";
          break;
        case "2":
          return d + "nd";
          break;
        case "3":
          return d + "rd";
          break;
        default:
          return d + "th";
      }
    };

    const monthPicker = m => {
      switch (m) {
        case "1":
          return "January";
          break;
        case "2":
          return "February";
          break;
        case "3":
          return "March";
          break;
        case "4":
          return "April";
          break;
        case "5":
          return "May";
          break;
        case "6":
          return "June";
          break;
        case "7":
          return "July";
          break;
        case "8":
          return "August";
          break;
        case "9":
          return "September";
          break;
        case "10":
          return "October";
          break;
        case "11":
          return "November";
          break;
        default:
          return "December";
      }
    };
    let seeDate = {
      async: true,
      crossDomain: true,
      url: `https://numbersapi.p.rapidapi.com/${month}/${day}/date?fragment=true&json=true`,
      method: "GET",
      headers: {
        "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        "x-rapidapi-key": API_KEY
      }
    };

    $.ajax(seeDate).done(function(res2) {
      preDate = "On " + " " + monthPicker(month) + " " + dayPicker(day) + ",";
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
        "x-rapidapi-key": API_KEY
      }
    };

    $.ajax(seeYear).done(function(res3) {
      preYear = "In " + " " + year + ",";
      myYear = preYear + " " + res3.text;
      $("#year-text").html(myYear);
    });
  } else {
    alert("Click on 📅 (calendar icon) and choose the date first. ");
  }
});

// NUMBERS API NUMBER API  ENDS//
