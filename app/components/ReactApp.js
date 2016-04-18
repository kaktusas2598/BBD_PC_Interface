/** @jsx React.DOM */

//var React = require('react/addons');
var React = require('react');

/* create factory with griddle component */
var Griddle = React.createFactory(require('griddle-react'));
var RaisedButton = require('material-ui/lib/raised-button');

//var Grid = require('react-flexbox-grid');
var Grid = require('react-bootstrap/lib/Grid');
var Col = require('react-bootstrap/lib/Col');
var Row = require('react-bootstrap/lib/Row');

var fakeData = require('../data/fakeData.js').fakeData;
var columnMeta = require('../data/columnMeta.js').columnMeta;
var resultsPerPage = 200;

var ReactApp = React.createClass({

      componentDidMount: function () {
        console.log(fakeData);

      },
      render: function () {
        return (
            <Grid fluid={true} >
                <Col xs={6} md={4} />
                <Col xs={6} md={4}>
                    <RaisedButton primary={true} label="Default" />
                </Col>
            </Grid>

        )
      }
  });

/*          <div id="table-area">
<Griddle results={fakeData}
                      columnMetadata={columnMeta}
                      resultsPerPage={resultsPerPage}
                      tableClassName="table"/>
          </div>
*/
/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;
