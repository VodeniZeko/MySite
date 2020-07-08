var autoSwap = setInterval(swap, 1500);

//pause slideshow and reinstantiate on mouseout
$(".carousel").hover(
  function() {
    clearInterval(autoSwap);
  },
  function() {
    autoSwap = setInterval(swap, 1500);
  }
);

//global variables
var items = [];
var startItem = 1;
var position = 0;
var itemCount = $(".carousel li.items").length;
var leftpos = itemCount;
var resetCount = itemCount;

//unused: gather text inside items class
$("li.items").each(function(index) {
  items[index] = $(this).text();
});
//swap images function
function swap(action) {
  var direction = action;

  //moving carousel backwards
  if (direction == "counter-clockwise") {
    var leftitem = $(".left-pos").attr("id") - 1;
    if (leftitem == 0) {
      leftitem = itemCount;
    }

    $(".right-pos")
      .removeClass("right-pos")
      .addClass("back-pos");
    $(".main-pos")
      .removeClass("main-pos")
      .addClass("right-pos");
    $(".left-pos")
      .removeClass("left-pos")
      .addClass("main-pos");
    $("#" + leftitem + "")
      .removeClass("back-pos")
      .addClass("left-pos");

    startItem--;
    if (startItem < 1) {
      startItem = itemCount;
    }
  }

  //moving carousel forward
  if (direction == "clockwise" || direction == "" || direction == null) {
    function pos(positionvalue) {
      if (positionvalue != "leftposition") {
        //increment image list id
        position++;

        //if final result is greater than image count, reset position.
        if (startItem + position > resetCount) {
          position = 1 - startItem;
        }
      }

      //setting the left positioned item
      if (positionvalue == "leftposition") {
        //left positioned image should always be one left than main positioned image.
        position = startItem - 1;

        //reset last image in list to left position if first image is in main position
        if (position < 1) {
          position = itemCount;
        }
      }

      return position;
    }

    $("#" + startItem + "")
      .removeClass("main-pos")
      .addClass("left-pos");
    $("#" + (startItem + pos()) + "")
      .removeClass("right-pos")
      .addClass("main-pos");
    $("#" + (startItem + pos()) + "")
      .removeClass("back-pos")
      .addClass("right-pos");
    $("#" + pos("leftposition") + "")
      .removeClass("left-pos")
      .addClass("back-pos");

    startItem++;
    position = 0;
    if (startItem > itemCount) {
      startItem = 1;
    }
  }
}

//next button click function
$("#next").click(function() {
  swap("clockwise");
});

//prev button click function
$("#prev").click(function() {
  swap("counter-clockwise");
});

//if any visible items are clicked
// $("li").click(function() {
//   if ($(this).attr("class") == "items left-pos") {
//     swap("counter-clockwise");
//   } else {
//     swap("clockwise");
//   }
// });

// featured/portfolio videos loads on click to save initial load time
$("#video-allay").on("click", function() {
  $(this)
    .html(
      '<iframe src="/assets/video/allay.mp4?autoplay=1" width="500" height="360" frameborder="0" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
$("#video-trim").on("click", function() {
  $(this)
    .html(
      '<iframe src="/assets/video/trim.mp4?autoplay=1" width="500" height="360" frameborder="0" allowfullscreen></iframe>'
    )
    .css("background", "none");
});

$("#video-trim4").on("click", function() {
  $(this)
    .html(
      '<iframe src="/assets/video/trim4.mp4?autoplay=1" width="500" height="360" frameborder="0" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
$("#video-trimed1").on("click", function() {
  $(this)
    .html(
      '<iframe src="/assets/video/trimed1.mp4?autoplay=1" width="500" height="360" frameborder="0" allowfullscreen></iframe>'
    )
    .css("background", "none");
});

$("#video-trimm3").on("click", function() {
  $(this)
    .html(
      '<iframe src="/assets/video/trimm3.mp4?autoplay=1" width="500" height="360" frameborder="0" allowfullscreen></iframe>'
    )
    .css("background", "none");
});

// Modal videos loads on click to save initial load time

$(".firstVideo").on("click", function() {
  $("#1")
    .html(
      '<iframe src="/assets/video/soundEffects.mp4"?autoplay=1" width="auto" height="300" frameborder="0" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
$(".secondVideo").on("click", function() {
  $("#2")
    .html(
      '<iframe src="/assets/video/trim4.mp4"?autoplay=1" width="auto" height="300" frameborder="0" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
$(".thirdVideo").on("click", function() {
  $("#3")
    .html(
      '<iframe src="/assets/video/trimed1.mp4"?autoplay=1" width="auto" height="300" frameborder="0" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
$(".fourthVideo").on("click", function() {
  $("#4")
    .html(
      '<iframe src="/assets/video/trimm3.mp4"?autoplay=1" width="auto" height="300" frameborder="0" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
$(".fifthVideo").on("click", function() {
  $("#5")
    .html(
      '<iframe src="/assets/video/trim.mp4"?autoplay=1" width="auto" height="300" frameborder="0" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
$(".sixthVideo").on("click", function() {
  $("#6")
    .html(
      '<iframe src="/assets/video/allay.mp4"?autoplay=1" width="auto" height="300" frameborder="0" allowfullscreen></iframe>'
    )
    .css("background", "none");
});
$(".seventhVideo").on("click", function() {
  $("#7")
    .html(
      '<iframe src="/assets/video/soon.mp4"?autoplay=1" width="auto" height="300" frameborder="0" allowfullscreen></iframe>'
    )
    .css("background", "none");
});

// toggle dark mode on and off and persisting with local storage

$(document).ready(function() {
  $(
    "#header,#title,#wavy,#work,#time,.las,.copy,.water-button,.mask-door-left, .mask-door-right ,body, section, span, h1, h2, p"
  ).removeClass("dark");
  $(".switch")
    .text(`\u263C`)
    .css({ color: "#FCEC6D" });
});

$(".switch").on("click", function() {
  if (
    $(
      "#header,#title,#wavy,#work,#time,.las,.copy, .water-button,.mask-door-left, .mask-door-right,body, section, span, h1, h2, p"
    ).hasClass("dark")
  ) {
    $(
      "#header,#title,#wavy,#work,#time,.las,.copy,.water-button,.mask-door-left, .mask-door-right,body, section, span, h1, h2, p"
    ).removeClass("dark");
    $(".switch")
      .text(`\u263C`)
      .prop("title", "switch to dark mode")
      .css({ color: "#FCEC6D" });
    localStorage.setItem("mode", "light");
  } else {
    $(
      "#header,#title,#wavy,#work,#time,.las,.copy,.water-button,.mask-door-left, .mask-door-right,body, section, span, h1, h2, p"
    ).addClass("dark");
    $(".switch")
      .text(`\u263E`)
      .prop("title", "switch to light mode")
      .css({ color: "#f2f2f2" });
    localStorage.setItem("mode", "dark");
  }
});

$(document).ready(function() {
  if (localStorage.getItem("mode") === "dark") {
    $(
      "#header,#title,#wavy,#work,#time,.las,.copy,.water-button,.mask-door-left, .mask-door-right,body, section, span, h1, h2, p"
    ).addClass("dark");
    $(".switch")
      .text(`\u263E`)
      .prop("title", "switch to light mode")
      .css({ color: "#f2f2f2" });
  } else if (localStorage.getItem("mode") === "light") {
    $(
      "#header,#title,#wavy,#work,#time,.las,.copy, .water-button,.mask-door-left, .mask-door-right, body, section, span, h1, h2, p"
    ).removeClass("dark");
    $(".switch")
      .text(`\u263C`)
      .prop("title", "switch to dark mode")
      .css({ color: "#FCEC6D" });
  }
});
