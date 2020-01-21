$(document).scroll(function() {
  if (checkVisible($(".projects"))) {
    $(".projects").css("background", "#000");
    $(".projects").css("transition", "1s");
    $(".hidden").css("background", "#000");
    $(".hidden").css("transition", "1s");
    $(".w").css("color", "#fff");
    $(".w").css("color", "1s");
    $(".wp").css("color", "#fff");
    $(".wp").css("color", "1s");
    $(".two").css("background", "#000");
    $(".two").css("transition", "1s");
    $(".one").css("background", "#000");
    $(".one").css("transition", "1s");
    $(".card").css("transform", "scale(1)");
    $(".card").css("transition", "1s");
  } else {
    $(".projects").css("background", "#fff");
    $(".projects").css("transition", "1s");
    $(".hidden").css("background", "#fff");
    $(".hidden").css("transition", "1s");
    $(".w").css("color", "#fff");
    $(".w").css("color", "1s");
    $(".wp").css("color", "#fff");
    $(".wp").css("color", "1s");
    $(".two").css("background", "#fff");
    $(".two").css("transition", "1s");
    $(".one").css("background", "#fff");
    $(".one").css("transition", "1s");
    $(".card").css("transform", "scale(0.5)");
    $(".card").css("transition", "1s");
  }
});
$(document).scroll(function() {
  if (checkVisible($(".ds-bp"))) {
    $(".three").css("background", "#fff");
    $(".three").css("transition", "1s");
    $(".four").css("background", "#fff");
    $(".four").css("transition", "1s");
    $("input").css("background", "#fff");
    $("input").css("opacity", ".8");
    $("input").css("transition", "1s");
    $("textarea").css("background", "#fff");
    $("textarea").css("transition", "1s");
    $("textarea").css("opacity", ".8");
    $(".bottom").css("background", "#fff");
    $(".bottom").css("transition", "1s");
  } else {
    $(".three").css("background", "#000");
    $(".three").css("transition", "1s");
    $(".four").css("background", "#000");
    $(".four").css("transition", "1s");
    $("input").css("background", "#000");
    $("input").css("transition", "1s");
    $("textarea").css("background", "#000");
    $("textarea").css("transition", "1s");
    $(".bottom").css("background", "#000");
    $(".bottom").css("transition", "1s");
  }
});
$(document).scroll(function() {
  if (checkVisible($(".viewport"))) {
    $(".projects").css("background", "#000");
    $("projects").css("transition", ".1s");
  }
});

function checkVisible(elm, eval) {
  eval = eval || "visible";
  var vpH = $(window).height(), // Viewport Height
    st = $(window).scrollTop(), // Scroll Top
    y = $(elm).offset().top,
    elementHeight = $(elm).height();

  if (eval == "visible") return y < vpH + st && y > st - elementHeight;
  if (eval == "above") return y < vpH + st;
}
