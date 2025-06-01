// tag filters for archive

const allLogs = document.getElementsByTagName("li");
const amountSpan = document.getElementById("amountLogs");
amountSpan.innerHTML = allLogs.length;
function showLog(tag) {
	// wrapping this in an if statement idgaf
	if (tag == "") {
		// selects all logs
		for (i = 0; i < allLogs.length; i++) {
			allLogs[i].style.display = "list-item";
		}
	} else {
		// selects any tags
		let actualTag = "li." + tag;
		let tagSelected = document.querySelectorAll(actualTag);
		for (i = 0; i < allLogs.length; i++) {
			allLogs[i].style.display = "none";
		}
		for (i = 0; i < tagSelected.length; i++) {
			tagSelected[i].style.display = "list-item";
		}
	}
}
