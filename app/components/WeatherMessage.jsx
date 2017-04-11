var React = require('react');

var WeatherMessage = (props) => {
  return (
    <p>The weather in {props.location} is {props.temp}</p>
  )
};

module.exports = WeatherMessage;
