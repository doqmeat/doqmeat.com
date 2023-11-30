//from this site! https://www.geeksforgeeks.org/how-to-switch-between-multiple-css-stylesheets-using-javascript//

function toggleTheme() {

			var sheet = document.getElementsByClassName('theme')[0];

			if (sheet.getAttribute('href') == '/blog/light.css') {
				sheet.setAttribute('href', '/blog/dark.css');
			} else {
				sheet.setAttribute('href', '/blog/light.css');
			}
		}