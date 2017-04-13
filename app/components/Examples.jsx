var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p>Here are a few example locations to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Lafayette'>Lafayette, CA</Link>
          </li>
          <li>
            <Link to='/?location=San Francisco'>San Francisco, CA</Link>
          </li>
          <li>
            <Link to='/?location=Saratoga'>Saratoga, CA</Link>
          </li>
          <li>
            <Link to='/?location=Cabo San Lucas'>Cabo San Lucas, Mexico</Link>
          </li>
        </ol>
      </div>
    )
};

module.exports = Examples;
