var Chart   = require('./components/linechart')
var React   = require('react')
var Sampler = require('../lib/sampler')

var height = 200
var width  = window.innerWidth

var sample = new Sampler(width, height)

var chart  = React.render(<Chart data={ sample.tick() } height={ height } width={ width } />, container)

function loop() {
  chart.setProps({
    data: sample.tick()
  })

  requestAnimationFrame(loop);
}

requestAnimationFrame(loop)
