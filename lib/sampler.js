var DEPTH   = 2
var PADDING = 60
var SIZE    = 200
var SPEED   = 2000

class Sample {

  constructor(width, height) {
    this.height = height
    this.width  = width

    this.tick()
  }

  get map() {
    return this._data.map
  }

  tick() {
    this._data = []

    for (var i = 0; i < SIZE; i++) {
      var k = (Date.now() + i * this.height) / SPEED

      this._data[i] = {
        size : 2 + DEPTH + Math.sin(k) * DEPTH,
        x    : PADDING + ((this.width - PADDING * 2) / SIZE) * i,
        y    : PADDING + (this.height + Math.sin(k) * this.height)
      }
    }

    return this._data
  }

}

module.exports = Sample
