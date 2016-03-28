var React = require('react');
var MapLayerToggleName = require('./MapLayerToggleName');
var MapLayerToggle = require('./MapLayerToggle');
var SearchBar = require('./Search');
var PropTypes = React.PropTypes;

var MapLayerToggleWrapper = React.createClass({

  render: function() {
    return (
        <div className="row top-toggles">
          <MapLayerToggleName  text='Toggle Layers'/>
          <MapLayerToggle  toggleText='Layer One'/>
        </div>
      );
    }

  });

  module.exports = MapLayerToggleWrapper;
