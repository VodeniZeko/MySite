(function($) {
  var $window = $(window),
    $body = $("body"),
    $nav = $("#nav");

  // Breakpoints.
  breakpoints({
    wide: ["961px", "1880px"],
    normal: ["961px", "1620px"],
    narrow: ["961px", "1320px"],
    narrower: ["737px", "960px"],
    mobile: [null, "736px"]
  });

  // ELEVATOR BUTTON AND MUSIC  STARTS//
  const btn = $("#backToTheTop");
  function playsound(e) {
    const left_door = document.querySelector(".door-left");
    const right_door = document.querySelector(".door-right");

    elevatorMusic.currentTime = 1;
    elevatorMusic.play();
    left_door.classList.add("an-stop-left");
    right_door.classList.add("an-stop-right");
    setTimeout(() => {
      ding.play();
      left_door.classList.remove("an-stop-left");
      right_door.classList.remove("an-stop-right");
    }, 10000);
  }

  btn.on("click", function(e) {
    e.preventDefault();
    playsound();
    $("html, body").animate({ scrollTop: 0 }, 10000);
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      btn.addClass("show");
    } else if ($(window).scrollTop() < 10) {
      elevatorMusic.pause();
    } else {
      btn.removeClass("show");
    }
  });

  // ELEVATOR BUTTON AND MUSIC  ENDS//

  // Play initial animations on page load.

  $window.on("load", function() {
    window.setTimeout(function() {
      $body.removeClass("is-preload");
    }, 100);
  });

  // Nav.
  var $nav_a = $nav.find("a");

  $nav_a
    .addClass("scrolly")
    .on("click", function(e) {
      var $this = $(this);

      // External link? Bail.
      // if ($this.attr('href').charAt(0) != '#')
      // 	return;

      // Prevent default.
      e.preventDefault();

      // Deactivate all links.
      $nav_a.removeClass("active");

      // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
      $this.addClass("active").addClass("active-locked");
    })
    .each(function() {
      var $this = $(this),
        id = $this.attr("href"),
        $section = $(id);

      // No section for this link? Bail.
      if ($section.length < 1) return;

      // Scrollex.
      $section.scrollex({
        mode: "middle",
        top: "-15vh",
        bottom: "-5vh",
        initialize: function() {
          // Deactivate section.
          // $section.addClass('inactive');
        },
        enter: function() {
          // Activate section.
          $section.removeClass("inactive");

          // No locked links? Deactivate all links and activate this section's one.
          if ($nav_a.filter(".active-locked").length == 0) {
            $nav_a.removeClass("active");
            $this.addClass("active");
          }

          // Otherwise, if this section's link is the one that's locked, unlock it.
          else if ($this.hasClass("active-locked"))
            $this.removeClass("active-locked");
        }
      });
    });

  // Scrolly.
  $(".scrolly").scrolly();

  // Header (narrower + mobile).

  // Toggle.
  $(
    '<div id="headerToggle">' +
      '<a href="#header" class="toggle"></a>' +
      "</div>"
  ).appendTo($body);

  // Header.
  $("#header").panel({
    delay: 500,
    hideOnClick: true,
    hideOnSwipe: true,
    resetScroll: true,
    resetForms: true,
    side: "left",
    target: $body,
    visibleClass: "header-visible"
  });
  // DATE FOR THE BOTTOM OF THE WEBSITE //

  months = [
    "January",
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  // var d=new Date();
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  var d = new Date();
  d.getFullYear();
  //date
  var date = document.getElementById("date");
  date.append(d.getFullYear());
  //updated time
  var theDate = new Date(document.lastModified);
  var time = document.getElementById("time");
  theDate.setTime(theDate.getTime() + 60 * 60);
  with (theDate) {
    time.append(
      "Last updated " +
        weekday[getDay()] +
        " " +
        getDate() +
        " " +
        months[getMonth()] +
        " " +
        d.getFullYear()
    );
  }
  /*'+getHours()+':'+getMinutes()+" GMT" this to add time as well */

  // DATE FOR THE BOTTOM OF THE WEBSITE ENDS//

  $("contact").submit(function(e) {
    e.preventDefault();
    var $form = $(this);
    $.post($form.attr("action"), $form.serialize()).then(function() {
      alert("Thank you!");
    });
  });
})(jQuery);
