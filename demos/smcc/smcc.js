window.onload = function () {
	var s = Snap("#svg");
	var bigCircle = s.circle(150, 150, 100);
	bigCircle.attr({
		fill: "#bada55",
		stroke: "#000",
		strokeWidth: 5
	});
};