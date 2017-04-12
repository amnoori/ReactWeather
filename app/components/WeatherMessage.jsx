var React = require('react');

var WeatherMessage = (props) => {
  return (
    <p>The weather in {props.location} is {props.temp} F.</p>
  )
};

module.exports = WeatherMessage;
