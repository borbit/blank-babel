(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var React = require("react");
var List = require("../../blocks/list/list");

var items = [{ title: "List item 1" }, { title: "List item 2" }, { title: "List item 3" }, { title: "List item 4" }];

React.render(React.createElement(List, { items: items }), document.getElementById("list"));

},{"../../blocks/list/list":2,"react":undefined}],2:[function(require,module,exports){
"use strict";

var React = require("react");
var ListItem = require("./list__item");

module.exports = React.createClass({
  displayName: "exports",

  render: function render() {
    var items = this.props.items.map(function (item) {
      return React.createElement(ListItem, { title: item.title });
    });
    return React.createElement(
      "ul",
      { className: "list" },
      items
    );
  }
});

},{"./list__item":3,"react":undefined}],3:[function(require,module,exports){
"use strict";

var React = require("react");

module.exports = React.createClass({
  displayName: "exports",

  render: function render() {
    return React.createElement(
      "li",
      { className: "list__item" },
      this.props.title
    );
  }
});

},{"react":undefined}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvc2VyZ2Vib3JiaXQvV29ya3NwYWNlL2JsYW5rLWJhYmVsL3B1YmxpYy9wYWdlcy9pbmRleC9pbmRleC5qcyIsIi9Vc2Vycy9zZXJnZWJvcmJpdC9Xb3Jrc3BhY2UvYmxhbmstYmFiZWwvcHVibGljL2Jsb2Nrcy9saXN0L2xpc3QuanMiLCIvVXNlcnMvc2VyZ2Vib3JiaXQvV29ya3NwYWNlL2JsYW5rLWJhYmVsL3B1YmxpYy9ibG9ja3MvbGlzdC9saXN0X19pdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDNUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUE7O0FBRTVDLElBQUksS0FBSyxHQUFHLENBQ1YsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFDLEVBQ3RCLEVBQUMsS0FBSyxFQUFFLGFBQWEsRUFBQyxFQUN0QixFQUFDLEtBQUssRUFBRSxhQUFhLEVBQUMsRUFDdEIsRUFBQyxLQUFLLEVBQUUsYUFBYSxFQUFDLENBQ3ZCLENBQUE7O0FBRUQsS0FBSyxDQUFDLE1BQU0sQ0FBQyxvQkFBQyxJQUFJLElBQUMsS0FBSyxFQUFFLEtBQUssQUFBQyxHQUFFLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBOzs7OztBQ1ZwRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDNUIsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBOztBQUV0QyxNQUFNLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUM7OztBQUNqQyxRQUFNLEVBQUEsa0JBQUc7QUFDUCxRQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUs7QUFDekMsYUFBTyxvQkFBQyxRQUFRLElBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEFBQUMsR0FBRyxDQUFBO0tBQ3ZDLENBQUMsQ0FBQTtBQUNGLFdBQU87O1FBQUksU0FBUyxFQUFDLE1BQU07TUFBRSxLQUFLO0tBQU0sQ0FBQTtHQUN6QztDQUNGLENBQUMsQ0FBQTs7Ozs7QUNWRixJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7O0FBRTVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzs7O0FBQ2pDLFFBQU0sRUFBQSxrQkFBRztBQUNQLFdBQU87O1FBQUksU0FBUyxFQUFDLFlBQVk7TUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7S0FBTSxDQUFBO0dBQzFEO0NBQ0YsQ0FBQyxDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0JylcbnZhciBMaXN0ID0gcmVxdWlyZSgnLi4vLi4vYmxvY2tzL2xpc3QvbGlzdCcpXG5cbnZhciBpdGVtcyA9IFtcbiAge3RpdGxlOiAnTGlzdCBpdGVtIDEnfSxcbiAge3RpdGxlOiAnTGlzdCBpdGVtIDInfSxcbiAge3RpdGxlOiAnTGlzdCBpdGVtIDMnfSxcbiAge3RpdGxlOiAnTGlzdCBpdGVtIDQnfVxuXVxuXG5SZWFjdC5yZW5kZXIoPExpc3QgaXRlbXM9e2l0ZW1zfS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpKVxuXG4iLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpXG52YXIgTGlzdEl0ZW0gPSByZXF1aXJlKCcuL2xpc3RfX2l0ZW0nKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIHZhciBpdGVtcyA9IHRoaXMucHJvcHMuaXRlbXMubWFwKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gPExpc3RJdGVtIHRpdGxlPXtpdGVtLnRpdGxlfSAvPlxuICAgIH0pXG4gICAgcmV0dXJuIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+e2l0ZW1zfTwvdWw+XG4gIH1cbn0pIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKVxuICAgICAgXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwibGlzdF9faXRlbVwiPnt0aGlzLnByb3BzLnRpdGxlfTwvbGk+XG4gIH1cbn0pIl19
