const chatbox = document.getElementById("chatbox");

function openChatbox() {
	chatbox.showModal();
}

chatbox.addEventListener("click", (event) => {
	if (event.target === chatbox) {
		chatbox.close();
	}
});
