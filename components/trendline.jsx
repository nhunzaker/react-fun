/** @jsx React.DOM */

var TrendLine = React.createClass({
	getDefaultProps: function() {
		return {
			data: [],
			title: '',
			interpolate: 'linear'
		}
	},

	getPath: function() {
		var yScale = this.props.yScale;
		var xScale = this.props.xScale;

		return d3.svg.line()
			.x(function(d, i) { return xScale(i);   })
			.y(function(d, i) { return yScale(d.y); })
			.interpolate(this.props.interpolate);
	},

	render: function() {
		return <Line path={this.getPath()(this.props.data)} />
	}
});