/** @jsx React.DIM */

var LineChart = React.createClass({
	getDefaultProps: function() {
		return {
			data: [],
			width: 600,
			height: 300
		}
	},

	render: function() {
		var data   = this.props.data;
		var size   = { width: this.props.width, height: this.props.height };
		var xScale = d3.scale.linear()
					   .domain([0, data.length])
					   .range([this.props.padding, this.props.width - this.props.padding]);

		var yScale = d3.scale.linear()
					   .domain([d3.max(data, function(d) { return d.y }), 0])
					   .range([this.props.padding, this.props.height - this.props.padding]);

		return <Chart padding={this.props.padding} width={this.props.width} height={this.props.height}>
			<DataSeries data={data} size={size} xScale={xScale} yScale={yScale} ref="series"/>
		</Chart>;
	}
});
