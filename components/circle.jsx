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

		circle.attr('transform', 'translate(' + this.getRandomPoint() + ',' + this.getRandomPoint() + ')');

		var animate = circle.transition().ease('elastic').duration(function(d, i) {
			return 2000 + Math.random() * -1000
		});

		animate.attr('transform', 'translate(0,0)');
	},

	render: function() {
		return <circle r={this.props.r} cx={this.props.cx} cy={this.props.cy} />
	}
});