/** @jsx React.DOM */

var Chart = React.createClass({
	getDefaultProps: function() {
		return {
			padding: 60,
			height: 500,
			width: 500
		};
	},

	render: function() {
		return <svg width={this.props.width} height={this.props.height}>
			<g transform={'translate(' + (this.props.padding / 2) + ', 0)'}>
				{this.props.children}
			</g>
		</svg>;
	}
});