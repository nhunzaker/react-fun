/** @jsx React.DOM */

var DataSeries = React.createClass({
	getDefaultProps: function() {
		return {
			data: [],
			title: '',
			interpolate: 'linear'
		}
	},

	render: function() {
		var props  = this.props,
			yScale = props.yScale,
			xScale = props.xScale;

		var path = d3.svg.line()
			.x(function(d, i) { return xScale(i); })
			.y(function(d) { return yScale(d.y); })
			.interpolate(this.props.interpolate);

		var circles = this.props.data.map(function(d, i) {
			return <Circle key={i} cx={xScale(i)} cy={yScale(d.y)} r={d.magnitude} />;
		});

		return <g>
			<Line path={path(this.props.data)} />
			{circles}
		</g>;
	}
});