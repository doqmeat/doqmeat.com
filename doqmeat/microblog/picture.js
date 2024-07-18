		function showPic(img, text, caption) {
			var pic = document.getElementById("picture");
			var picDiv = document.getElementById("picture-win");
			var picTitle = document.getElementById("picture-title");
			var picCaption = document.getElementById("picture-caption");
			var link = document.getElementById("pic-link");
			link.href = img;
			pic.src = img;
			pic.alt = text;
			picTitle.innerText = img;
			picCaption.innerText = caption;
			picDiv.style.display = "block";
		}

		function toggleclick(window) {
			var popup = document.getElementById(window);
			if (popup.style.display === "block") {
				popup.style.display = "none";
			} else {
				popup.style.display = "block";
			}
		}
