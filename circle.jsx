/** @jsx React.DOM */

var Circle = React.createClass({
	getDefaultProps: function() {
		return {
			r: 1,
			cx: 0,
			cy: 0
		};
	},

	getRandomPoint: function() {
		return Math.random() * 1000 - 500;
	},

	componentDidMount: function() {
		var circle = d3.select(this.getDOMNode())

		circle.attr({
			cx: this.getRandomPoint(),
			cy: this.getRandomPoint(),
			opacity: 0
		})

		var animate = circle.transition().ease('elastic').duration(function(d, i) {
			return 2000 + Math.random() * -1000
		});

		animate.attr({
			cx: this.props.cx,
			cy: this.props.cy,
			opacity: 1
		});
	},

	render: function() {
		return <circle r={this.props.r} cx={this.props.cx} cy={this.props.cy} />
	}
});