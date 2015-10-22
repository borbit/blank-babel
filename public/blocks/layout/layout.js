var React = require('react')
var render = require('./layout.jsx')

module.exports = React.createClass({
  render() {
    return render.call(this)
  }
})
