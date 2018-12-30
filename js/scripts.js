// NodeList.prototype.forEach() polyfill - MDN
 
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

// Image Wipe On

function wipeOn() {
var wipers = document.querySelectorAll('.wipe');
wipers.forEach(function(wipers) {
    var rect = wipers.getBoundingClientRect();
    if (rect.top < (window.innerHeight || document.documentElement.clientHeight)) {
        wipers.classList.add('reveal-image');
    }
});
};
window.addEventListener('load', wipeOn);
window.addEventListener('scroll', wipeOn);
window.addEventListener('resize', wipeOn);