var React = require('react')
var ListItem = require('./list__item')

module.exports = React.createClass({
  render() {
    var items = this.props.items.map((item) => {
      return <ListItem title={item.title} />
    })
    return <ul className="list">{items}</ul>
  }
})