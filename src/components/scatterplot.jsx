var React = require('react')

var ScatterPlot = React.createClass({

  getCircle: function(point, i) {
    return <circle key={ i } cx={ point.x } cy={ point.y } r={ point.size } />
  },

  render: function() {
    return <g>{ this.props.data.map(this.getCircle) }</g>
  }

})

module.exports = ScatterPlot
