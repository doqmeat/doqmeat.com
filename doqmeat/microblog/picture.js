		function showPic(img, text) {
			var i;
			var pic = document.getElementsByClassName('picture');
			var picDiv = document.getElementById("picture-win");
			var picTitle = document.getElementsByClassName('picture-url');
			pic[0].src = img;
			pic[0].alt = text;
			picTitle[0].innerText = img;
			picDiv.style.display = "block";
		}

		function closePic() {
			var picDiv = document.getElementById("picture-win");
			picDiv.style.display = "none";
		}
