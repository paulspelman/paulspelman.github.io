// IMAGE WIPE

function isInViewport (el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

var wipers = document.querySelectorAll('.wipe');

wipers.forEach((wipers => {

    var wipeOn = function (event) {
        if (isInViewport(wipers)) {
            wipers.classList.add('reveal-image');
        }
    };

window.addEventListener('load', wipeOn);
window.addEventListener('scroll', wipeOn);
window.addEventListener('resize', wipeOn);

}));