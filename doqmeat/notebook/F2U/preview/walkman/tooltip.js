(function ($) {
	$(document).ready(function () {
		$("[title]").style_my_tooltips({
			tip_follows_cursor: true,
			tip_delay_time: 10,
			tip_fade_speed: 10,
			attribute: "title",
		});
	});
})(jQuery);
