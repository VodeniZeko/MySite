// NUMBERS API NUMBER API //

$(document).ready(function() {
  var today = new Date();
  var dd = Number(today.getDate());
  var mm = Number(today.getMonth());
  $.ajax({
    url: `http://numbersapi.com/${mm}/${dd}/date`,
    success: function(result) {
      $("#numbersText").html(result);
    }
  });
  myInputBtn = $("#my-input-btn");
  myInputBtn.on("click", function() {
    var value = document.getElementById("my-input").value;

    if (value) {
      date = value.split(".");
      day = date[0].replace(/ /g, "");
      month = date[1].replace(/ /g, "");
      year = date[2].replace(/ /g, "");

      $.ajax({
        url: `http://numbersapi.com/${month}/${day}/date`,
        success: function(x) {
          $("#month-day-text").html(x);
        }
      }),
        $.ajax({
          url: `http://numbersapi.com/${year}/year`,
          success: function(y) {
            $("#year-text").html(y);
          }
        });
    } else {
      alert("Click on the 📅 (calendar) and choose a date first. ");
    }
  });
});

// NUMBERS API NUMBER API  ENDS//
