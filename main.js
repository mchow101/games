$(document).ready(function() {
	'use strict';
	paper.install(window);
	paper.setup(document.getElementById('myCanvas'));

	var c = Shape.Circle(400, 400, 80);
	c.fillColor = 'black';
	var text = new PointText(400, 400);
	text.justification = 'center';
	text.fillColor = 'white';
	text.fontSize = 20;
	text.content = 'Hello World!';

	var tool = new Tool();
	tool.onMouseDown = function(event) {
		var c = Shape.Circle(event.point, 20);
		if(event.point.x > 400) {
			if(event.point.y > 400) {
				c.fillColor = 'pink';
			}
			else {
				c.fillColor = 'red';
			}
		}
		else {
			if(event.point.y > 400) {
				c.fillColor = 'blue';
			}
			else {
				c.fillColor = 'orange';
			}
		}
	}
	paper.view.draw();
	console.log('file loaded');
});