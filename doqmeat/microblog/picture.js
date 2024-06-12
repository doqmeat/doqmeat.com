		function showPic(img, text, caption) {
			var pic = document.getElementById("picture");
			var picDiv = document.getElementById("picture-win");
			var picTitle = document.getElementById("picture-title");
			var picCaption = document.getElementById("picture-caption");
			pic.src = img;
			pic.alt = text;
			picTitle.innerText = img;
			picCaption.innerText = caption;
			picDiv.style.display = "block";
		}
