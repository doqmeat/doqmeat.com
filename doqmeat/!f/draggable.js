// credit: https://stackoverflow.com/questions/14695933/draggable-div-with-classname

!(function (a) {
	"use strict";
	function e(b) {
		function f(a) {
			(e.style.left = a.clientX - c + "px"),
				(e.style.top = a.clientY - d + "px");
		}
		function g() {
			a.removeEventListener("mousemove", f),
				a.removeEventListener("mouseup", g);
		}
		var c = b.clientX - this.offsetLeft,
			d = b.clientY - this.offsetTop,
			e = this;
		a.addEventListener("mouseup", g), a.addEventListener("mousemove", f);
	}
	var d,
		b = a.getElementsByClassName("draggable"),
		c = b.length;
	for (d = 0; d < c; d += 1) b[d].addEventListener("mousedown", e);
})(document);
