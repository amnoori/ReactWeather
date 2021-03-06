var React = require('react');

var About = (props) => {
  return (
    <div className="text-center">
      <h1 className="page-title">About</h1>
      <p>This is a test application created in React.</p>
      <p>Weather data is courtesy of <a href='http://openweathermap.org' target="_blank">Open Weather Map</a>.</p>
    </div>
  )
};

module.exports = About;
