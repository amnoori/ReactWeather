var React = require('react');

var About = (props) => {
  return (
    <div className="text-center">
      <h1>About This Application</h1>
      <p>This is a test application created in React</p>
      <p>Weather data is courtesy of <a href='http://openweathermap.org' target="_blank">OpenWeatherMap</a></p>
    </div>
  )
};

module.exports = About;
