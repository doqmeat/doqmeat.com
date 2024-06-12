		function showPic(img, text, caption) {
			var pic = document.getElementsByClassName("picture");
			var picDiv = document.getElementById("picture-win");
			var picTitle = document.getElementsByClassName("picture-title");
			var picCaption = document.getElementsByClassName("picture-caption");
			pic[0].src = img;
			pic[0].alt = text;
			picTitle[0].innerText = img;
			picCaption[0].innerText = caption;
			picDiv.style.display = "block";
		}

		function closePic() {
			var picDiv = document.getElementById("picture-win");
			picDiv.style.display = "none";
		}
