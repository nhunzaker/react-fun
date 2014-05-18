/** @jsx React.DOM */

var LineChart = React.createClass({
	getDefaultProps: function() {
		return {
			data: [],
			width: 600,
			height: 300
		}
	},

	getScaleX: function() {
		var props = this.props;

		return d3.scale.linear()
			.domain([0, props.data.length])
			.range([props.padding, props.width - props.padding]);
	},

	getScaleY: function() {
		var props = this.props;

		return d3.scale.linear()
			.domain([d3.max(props.data, function(d) { return d.y }), 0])
			.range([props.padding, props.height - props.padding]);
	},

	render: function() {
		var xScale = this.getScaleX();
		var yScale = this.getScaleY();

		return <Chart width={this.props.width} height={this.props.height}>
			<TrendLine data={this.props.data} xScale={xScale} yScale={yScale} ref="trendline" />
			<ScatterPlot data={this.props.data} xScale={xScale} yScale={yScale} ref="scatterplot" />
		</Chart>;
	}
});
