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
		var origPosition = this.data('origPosition');
		console.log(origPosition);
		var x = origPosition[0] + dx - 50;
		var y = origPosition[1] + dy - 50;
		var m = new Snap.Matrix();
			m.translate(x, y);
		this.attr({
			//transform: this.transform().localMatrix.translate(x, y)
			//transform: this.transform().globalMatrix.translate(dx, dy)
			//transform: this.transform().diffMatrix.translate(dx, dy)
			transform: m
		});
		return;
        this.attr({
			transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
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