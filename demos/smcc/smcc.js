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
		console.log('----------------------------');
		console.log(this.data('origTransform'));
		console.log(this.data('origTransform') ? "T" : "t");
		console.log([dx, dy]);
		console.log('===>');
		console.log(this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]);
        this.attr({
			transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
		});
	};
	var start = function () {
        this.data('origTransform', this.transform().local);
	};
	var stop = function () {
        console.log('finished dragging');
	};
	superman.drag(move, start, stop );
};