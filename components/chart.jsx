/** @jsx React.DOM */

var Chart = React.createClass({
	getDefaultProps: function() {
		return {
			height: 500,
			width: 500
		};
	},

	getStyle: function() {
		return {
			height: this.props.height,
			width: this.props.width
		}
	},

	render: function() {
		return <svg style={this.getStyle()}>{this.props.children}</svg>;
	}
});