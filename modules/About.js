var React = require('react');
require('../scss/bootstrap.scss');

var About = React.createClass({
  render: function() {
    return (
        <div className="container theme-showcase" role="main">
          <div className="jumbotron">
            <h1>Theme example</h1>
            <p>This is a template showcasing the optional theme stylesheet included in Bootstrap. Use it as a starting point to create something more unique by building on or modifying it.</p>
          </div>
    
            <div className="page-header">
                <h1>Buttons</h1>
            </div>
            <p>
                <button type="button" className="btn btn-lg btn-default">Default</button>
                <button type="button" className="btn btn-lg btn-primary">Primary</button>
                <button type="button" className="btn btn-lg btn-success">Success</button>
                <button type="button" className="btn btn-lg btn-info">Info</button>
                <button type="button" className="btn btn-lg btn-warning">Warning</button>
                <button type="button" className="btn btn-lg btn-danger">Danger</button>
                <button type="button" className="btn btn-lg btn-link">Link</button>
              </p>
              <p>
                <button type="button" className="btn btn-default">Default</button>
                <button type="button" className="btn btn-primary">Primary</button>
                <button type="button" className="btn btn-success">Success</button>
                <button type="button" className="btn btn-info">Info</button>
                <button type="button" className="btn btn-warning">Warning</button>
                <button type="button" className="btn btn-danger">Danger</button>
                <button type="button" className="btn btn-link">Link</button>
              </p>
              <p>
                <button type="button" className="btn btn-sm btn-default">Default</button>
                <button type="button" className="btn btn-sm btn-primary">Primary</button>
                <button type="button" className="btn btn-sm btn-success">Success</button>
                <button type="button" className="btn btn-sm btn-info">Info</button>
                <button type="button" className="btn btn-sm btn-warning">Warning</button>
                <button type="button" className="btn btn-sm btn-danger">Danger</button>
                <button type="button" className="btn btn-sm btn-link">Link</button>
              </p>
              <p>
                <button type="button" className="btn btn-xs btn-default">Default</button>
                <button type="button" className="btn btn-xs btn-primary">Primary</button>
                <button type="button" className="btn btn-xs btn-success">Success</button>
                <button type="button" className="btn btn-xs btn-info">Info</button>
                <button type="button" className="btn btn-xs btn-warning">Warning</button>
                <button type="button" className="btn btn-xs btn-danger">Danger</button>
                <button type="button" className="btn btn-xs btn-link">Link</button>
              </p>
            <div className="page-header">
              <h1>Tables</h1>
            </div>
            <div className="row">
              <div className="col-md-6">
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-md-6">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                  <table className="table table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan="2">1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@TwBootstrap</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-md-6">
                  <table className="table table-condensed">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td colSpan="2">Larry the Bird</td>
                        <td>@twitter</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            <div className="page-header">
              <h1>Labels</h1>
            </div>
            <h1>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h1>
            <h2>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h2>
            <h3>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h3>
            <h4>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h4>
            <h5>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h5>
            <h6>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </h6>
            <p>
              <span className="label label-default">Default</span>
              <span className="label label-primary">Primary</span>
              <span className="label label-success">Success</span>
              <span className="label label-info">Info</span>
              <span className="label label-warning">Warning</span>
              <span className="label label-danger">Danger</span>
            </p>


        </div>
    );
  }
});

module.exports = About;
