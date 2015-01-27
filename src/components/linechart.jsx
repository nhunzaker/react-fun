var React       = require('react')
var ScatterPlot = require('./scatterplot')

var Chart = React.createClass({

  render: function() {
    return (
      <svg height={ this.props.width } width={ this.props.width } >
        <ScatterPlot data={ this.props.data } />
      </svg>
    )
  }
})

module.exports = Chart
