const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
	// eleventyConfig.setServerPassthroughCopyBehavior("copy");

	// Forces Eleventy to merge tag arrays together instead of overwriting them
	// eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addPassthroughCopy("_files");

	// This will stop the default behaviour of foo.html being turned into foo/index.html
	eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

	// default date format
	eleventyConfig.addGlobalData("date", "Last Modified");

	// shortcode for year {% year %} --- not using it rn
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	// girl i am tired
	eleventyConfig.addFilter("gamepics", (dir) => {
		return "/_files/pages/vgs/games/" + dir + "/";
	});

	// unslug a string {{ string-yup | unSlugify }}
	// output: "string yup"
	eleventyConfig.addFilter("unSlugify", (str) => {
		const regexPattern = /[-_]/g;
		return str.replace(regexPattern, " ");
	});

	// converts a string into multicolor
	eleventyConfig.addFilter("multicolor", (str) => {
		const colors = ["#78b07e", "#c9aa55", "#7092b8", "#c7959b", "#9778aa"];
		let newstring = "";
		for (let i = 0; i < str.length; i++) {
			newstring += `<span style="color:${colors[i % 5]}">${str[i]}</span>`;
		}
		return newstring;
	});

	// custom page.date ----- {{ page.date | shortDate }}
	// example: 01.may.26
	eleventyConfig.addFilter("shortDate", (dateObj) => {
		let dateString = DateTime.fromJSDate(dateObj)
			.setZone("utc")
			.toFormat("dd.MMM.yy");
		return dateString.toLowerCase();
	});

	// custom page.date ----- {{ page.date | ISODate }}
	// example: 260501
	eleventyConfig.addFilter("ISODate", (dateObj) => {
		let dateString = DateTime.fromJSDate(dateObj)
			.setZone("utc")
			.toFormat("yyMMdd");
		return dateString;
	});

	// gamelog but ordered by published date
	eleventyConfig.addCollection("gamelogPublishedDate", (collectionApi) => {
		let gamelogs = collectionApi
			.getFilteredByTags("gamelog")
			.sort(
				(item1, item2) =>
					item1.data.published_date.getTime() -
					item2.data.published_date.getTime(),
			);
		return gamelogs;
	});

	// gamelog but ordered by file name
	eleventyConfig.addCollection("gamelogFiles", (collectionApi) => {
		let gamelogs = collectionApi.getFilteredByTags("gamelog").sort((a, b) => {
			let file1 = a.page.fileSlug;
			let file2 = b.page.fileSlug;
			if (file1 < file2) {
				return -1;
			} else if (file1 > file2) {
				return 1;
			} else {
				return 0;
			}
		});
		return gamelogs;
	});

	// Generates a list of unique tags found ONLY inside the journal folder
	eleventyConfig.addCollection("journalTags", (collectionApi) => {
		const journal = collectionApi.getFilteredByGlob("journal/**");
		const tagSet = new Set(); // its a set so there's no repetition in the tags
		// for each item in that folder
		journal.forEach((item) => {
			if (item.data.tags) {
				//checks if it's an array
				const tags = Array.isArray(item.data.tags)
					? item.data.tags
					: [item.data.tags];
				tags.forEach((tag) => {
					// i don't want these ones
					if (!["all", "log", "subpage"].includes(tag)) {
						tagSet.add(tag);
					}
				});
			}
		});
		// returns an array from the tags collected
		return Array.from(tagSet);
	});

	// Generates a list of unique tags found ONLY inside the vgs/games folder
	eleventyConfig.addCollection("gamelogTags", (collectionApi) => {
		const gamelog = collectionApi.getFilteredByGlob("vgs/games/**");
		const tagSet = new Set();
		gamelog.forEach((item) => {
			if (item.data.tags) {
				const tags = Array.isArray(item.data.tags)
					? item.data.tags
					: [item.data.tags];
				tags.forEach((tag) => {
					if (!["all", "gamelog"].includes(tag)) {
						tagSet.add(tag);
					}
				});
			}
		});
		// returns an array from the tags collected
		return Array.from(tagSet);
	});

	return {
		dir: {
			output: "../_site",
		},
	};
};
