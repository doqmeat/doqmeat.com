// selects element. i want to target the whole page so we going with body
let pageBody = document.querySelector("body").innerHTML;

// replace text using .replace throughout page body
let replacement = pageBody // /g means it will change each pattern it finds instead of only one instance
	.replace(/::repeat::/g, "⟳")
	.replace(/::finished::/g, "✔")
	.replace(/::ongoing::/g, "□")
	.replace(/::dropped::/g, "✘")
	.replace(/::one star::/g, "★☆☆☆☆")
	.replace(/::two stars::/g, "★★☆☆☆")
	.replace(/::three stars::/g, "★★★☆☆")
	.replace(/::four stars::/g, "★★★★☆")
	.replace(/::five stars::/g, "★★★★★");

document.querySelector("body").innerHTML = replacement;
