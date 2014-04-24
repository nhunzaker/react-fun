/** @jsx React.DOM */

var Line = React.createClass({
	getDefaultProps: function() {
		return {
			path: ''
		}
	},

	componentDidMount: function() {
		var line = d3.select(this.getDOMNode())

		line.attr('opacity', '0')

		line.transition().duration(500).delay(1700).attr({
			cx: this.props.cx,
			cy: this.props.cy,
			opacity: 1
		});
	},

	render: function() {
		return <path d={this.props.path} />;
	}
});