var React = require('react');

var WeatherMessage = (props) => {
  return (
    <h3 className='text-center'>The weather in {props.location} is {props.temp} F.</h3>
  )
};

module.exports = WeatherMessage;
