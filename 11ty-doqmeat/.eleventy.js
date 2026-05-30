const { DateTime } = require("luxon");
const tagCloud = require("eleventy-plugin-tag-cloud");

module.exports = function (eleventyConfig) {
	eleventyConfig.setServerPassthroughCopyBehavior("copy");

	// Forces Eleventy to merge tag arrays together instead of overwriting them
	// eleventyConfig.setDataDeepMerge(true);

	eleventyConfig.addPassthroughCopy("_files");

	// This will stop the default behaviour of foo.html being turned into foo/index.html
	eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");

	// default date format
	eleventyConfig.addGlobalData("date", "git Last Modified");

	// shortcode for year {% year %} --- not using it rn
	eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

	// custom page.date ----- {{ page.date | postDate }}
	// example: 01.may.26
	eleventyConfig.addFilter("postDate", (dateObj) => {
		let dateString = DateTime.fromJSDate(dateObj)
			.setZone("utc")
			.toFormat("dd.MMM.yy");
		return dateString.toLowerCase();
	});

	// custom page.date ----- {{ page.date | postFullDate }}
	// example: 2026-05-01
	eleventyConfig.addFilter("postFullDate", (dateObj) => {
		let dateString = DateTime.fromJSDate(dateObj)
			.setZone("utc")
			.toFormat("yyyy-MM-dd");
		return dateString;
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

	// tag cloud
	eleventyConfig.addFilter("tagCloud", tagCloud);
};
