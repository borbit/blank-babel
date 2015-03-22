var React = require('react')
      
module.exports = React.createClass({
  render() {
    return <li className="list__item">{this.props.title}</li>
  }
})