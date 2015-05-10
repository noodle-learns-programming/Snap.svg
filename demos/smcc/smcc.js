window.onload = function () {
	var s = Snap("#svg");
	var bigCircle = s.circle(50, 50, 10);
	bigCircle.attr({
		fill: "#bada55",
		stroke: "#000",
		strokeWidth: 5
	});
	/**
	 |------------------------------------------------
	 | Find an exist element.
	 |------------------------------------------------ 
	 */
	var superman = s.select("#superman").attr({
		'stroke' : 'green'
	});
	var move = function (dx, dy) {
        this.attr({
			transform: this.data('origTransform') + "T" + [dx, dy]
		});
	};
	var start = function (x, y, e) {
		console.log('start arguments: ', arguments);
		this.data('origPosition', [x, y]);
        this.data('origTransform', this.transform().local);
	};
	var stop = function () {
        console.log('finished dragging');
	};
	superman.drag(move, start, stop );
};