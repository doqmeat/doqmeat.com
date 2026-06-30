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

	// custom page.date ----- {{ page.date | shortDate }}
	// example: 01.may.26
	eleventyConfig.addFilter("shortDate", (dateObj) => {
		let dateString = DateTime.fromJSDate(dateObj)
			.setZone("utc")
			.toFormat("dd.MMM.yy");
		return dateString.toLowerCase();
	});

	// custom page.date ----- {{ page.date | shortISODate }}
	// example: 260501
	eleventyConfig.addFilter("shortISODate", (dateObj) => {
		let dateString = DateTime.fromJSDate(dateObj)
			.setZone("utc")
			.toFormat("dd.MM.yy");
		return dateString;
	});

	// {{ string "yyyy-mm-dd" | string2date }}
	// returns dd.mon.yy
	eleventyConfig.addFilter("string2date", (dateString) => {
		const months = [
			"jan",
			"feb",
			"mar",
			"apr",
			"may",
			"jun",
			"jul",
			"aug",
			"sep",
			"oct",
			"nov",
			"dec",
		];
		let year = dateString.slice(2, 4); // returns the last 2 digits of the year
		let monthIndex = parseInt(dateString.slice(5, 7), 10) - 1;
		// returns the month - 1 to get the index of the month
		let month = months[monthIndex];
		let day = dateString.slice(8);
		return day + "." + month + "." + year;
	});

	// {{ string "yyyy-mm-dd" | string2fulldate }}
	// returns day month year
	eleventyConfig.addFilter("string2fulldate", (dateString) => {
		const months = [
			"january",
			"february",
			"march",
			"april",
			"may",
			"june",
			"july",
			"august",
			"september",
			"october",
			"november",
			"december",
		];
		let year = dateString.slice(0, 4); // returns the last 2 digits of the year
		let monthIndex = parseInt(dateString.slice(5, 7), 10) - 1;
		// returns the month - 1 to get the index of the month
		let month = months[monthIndex];
		let day = dateString.slice(8);
		return day + " " + month + " " + year;
	});

	// gamelog but ordered by published date
	eleventyConfig.addCollection("gamelogPublishedDate", (collectionApi) => {
		let gamelogs = collectionApi
			.getFilteredByTags("gamelog")
			.sort((item1, item2) => {
				return (
					item1.data.published_date.getTime() -
					item2.data.published_date.getTime()
				);
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
