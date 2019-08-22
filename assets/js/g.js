$(window).scroll(function() {
    if (checkVisible($('.text-muted'))) {
    	$('.item').css("background", 'fff');
        $('.item').css("opacity",.4);
        $('.item').css('transition', '1.5s');
        $('.a, .b, .c, .d, .e, .f, .g, .h').css('color', 'transparent');
        $('.a, .b, .c, .d, .e, .f, .g, .h').css('transition', '.5s');
    } else {
        $('.item').css("background", '#f2f2f2');
        $('.item').css("opacity",1);
        $('.item').css('transition', '1.5s');
        $('.a, .b, .c, .d, .e, .f, .g, .h').css('color', '#989898');
        $('.a, .b, .c, .d, .e, .f, .g, .h').css('transition', '.5s');

    }
});

function checkVisible( elm, eval ) {
    eval = eval || "visible";
    var vpH = $(window).height(), // Viewport Height
        st = $(window).scrollTop(), // Scroll Top
        y = $(elm).offset().top,
        elementHeight = $(elm).height();
    
    if (eval == "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
    if (eval == "above") return ((y < (vpH + st)));
}

