// NUMBERS API NUMBER API //

// $(document).ready(function() {
//   $.ajax({
//     url: `https://1kfit61c36.execute-api.us-east-2.amazonaws.com/production/1990/year`,
//     headers: {
//       accessKey: key,
//       secretKey: key
//     },
//     success: function(res) {
//       console.log(res);
//     },
//     error: function(xhr, ajaxOptions, thrownError) {
//       //Add these parameters to display the required response
//       alert(xhr.status);
//       alert(xhr.responseText);
//     }
//   });
// });

//   var today = new Date();
//   var dd = Number(today.getDate());
//   var mm = Number(today.getMonth());
//   var obj = {};
//   $.ajax({
//     url: `https://1kfit61c36.execute-api.us-east-2.amazonaws.com/production/${mm}/${dd}/date`,
//     success: function(result) {
//       obj = result;
//       $("#numbersText").html(obj);
//     }
//   });
//   myInputBtn = $("#my-input-btn");
//   myInputBtn.on("click", function() {
//     var value = document.getElementById("my-input").value;

//     if (value) {
//       date = value.split(".");
//       day = date[0].replace(/ /g, "");
//       month = date[1].replace(/ /g, "");
//       year = date[2].replace(/ /g, "");
//       md = {};
//       ye = {};
//       $.ajax({
//         url: `https://1kfit61c36.execute-api.us-east-2.amazonaws.com/production/${month}/${day}/date`,
//         success: function(x) {
//           md = x;
//           $("#month-day-text").html(md);
//         }
//       }),
//         $.ajax({
//           url: `https://1kfit61c36.execute-api.us-east-2.amazonaws.com/production/${year}/year`,
//           success: function(y) {
//             ye = y;
//             $("#year-text").html(ye);
//           }
//         });
//     } else {
//       alert("Click on the 📅 (calendar) and choose a date first. ");
//     }
//   });
// });

// NUMBERS API NUMBER API  ENDS//
