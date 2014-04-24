/** @jsx React.DOM */

var ScatterPlot = React.createClass({
	getDefaultProps: function() {
		return { data: [] }
	},

	render: function() {
		var xScale = this.props.xScale;
		var yScale = this.props.yScale;

		var circles = this.props.data.map(function(d, i) {
			return <Circle key={i} cx={xScale(i)} cy={yScale(d.y)} r={d.magnitude} />;
		});

		return <g>{circles}</g>;
	}
});