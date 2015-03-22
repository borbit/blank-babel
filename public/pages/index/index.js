var React = require('react')
var List = require('../../blocks/list/list')

var items = [
  {title: 'List item 1'},
  {title: 'List item 2'},
  {title: 'List item 3'},
  {title: 'List item 4'}
]

React.render(<List items={items}/>, document.getElementById('list'))

