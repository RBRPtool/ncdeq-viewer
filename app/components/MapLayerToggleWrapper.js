var React = require('react');
var MapLayerToggleName = require('./MapLayerToggleName');
var MapLayerToggle = require('./MapLayerToggle');
var PropTypes = React.PropTypes;

var MapLayerToggleWrapper = React.createClass({
  render: function() {
    let layers = [];
    if (this.props.map_settings){
      layers = this.props.map_settings.layers;
    }

    //console.log(this.props.map_settings)
    layers.map(function(item) {
      console.log(item)
    })

    return (
      <div className="row">
        <MapLayerToggleName  text='Toggle Layers'/>
        { layers.map(function(item) {
           return (<MapLayerToggle  key={item.name} toggleText={item.name} layer={item.layer} />)
         }.bind(this))
      }
      </div>
      );
    }

  });

  module.exports = MapLayerToggleWrapper;
