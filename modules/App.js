var React = require('react');
var {Link, RouteHandler} = require('react-router');

require('../scss/bootstrap.scss');
require('../css/starter-template.css');
require('../css/bootstrap-theme.min.css');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-inverse navbar-fixed-top">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="home">BootstrApp</Link>
              </div>
              <div id="navbar" className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                  <li><Link activeClassName="active" to="home">Home</Link></li>
                  <li><Link activeClassName="active" to="about" >About</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
