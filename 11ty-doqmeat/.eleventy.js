const { DateTime } = require("luxon");

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
	eleventyConfig.addFilter("postDate", (dateObj) => {
		return DateTime.fromJSDate(dateObj).toFormat("dd.MMM.yy");
	});
};
