// IMAGE WIPE

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).on("load resize scroll",function(e){

    $('.wipe').each(function () {
        if (isScrolledIntoView(this) === true) {
            $(this).addClass('reveal-image');
        }
    });

});