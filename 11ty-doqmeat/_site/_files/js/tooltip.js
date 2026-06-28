tippy("[title]", {
	content(reference) {
		const title = reference.getAttribute("title");
		reference.removeAttribute("title");
		return title;
	},
	followCursor: true,
	theme: "des",
	interactive: false,
	maxWidth: 250,
});
