//	credit: https://www.w3schools.com/howto/howto_js_draggable.asp

//Make the DIV element draggagle:
function dragElement(a) {
	function f(a) {
		a = a || window.event, a.preventDefault(), d = a.clientX, e = a.clientY, document.onmouseup = h, document.onmousemove = g
	}

	function g(f) {
		f = f || window.event, f.preventDefault(), b = d - f.clientX, c = e - f.clientY, d = f.clientX, e = f.clientY, a.style.top = a.offsetTop - c + "px", a.style.left = a.offsetLeft - b + "px"
	}

	function h() {
		document.onmouseup = null, document.onmousemove = null
	}
	var b = 0,
		c = 0,
		d = 0,
		e = 0;
	document.getElementById(a.id + "header") ? document.getElementById(a.id + "header").onmousedown = f : a.onmousedown = f
}
dragElement(document.getElementById("catIMG"));
