var React = require('react');
import MapContainer from '../containers/MapContainer'
//zoom={this.props.zoom} latitude={this.props.latitude} longitude={this.props.longitude}
var PropTypes = React.PropTypes;

var MapWrapper = React.createClass({
  propTypes: {
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
    mapHeight: PropTypes.number.isRequired,
    handleMapMoveEnd: PropTypes.func.isRequired,
    HandleMapZoomEnd: PropTypes.func.isRequired,
    rowPadding: PropTypes.number
  },
  render: function() {
    var pad = this.props.rowPadding ? 1 : this.props.rowPadding;
    return (
        <MapContainer rowPadding={pad} mapHeight={this.props.mapHeight} HandleMapZoomEnd={this.props.HandleMapZoomEnd} handleMapMoveEnd={this.props.handleMapMoveEnd}  />
    );
  }
});

module.exports = MapWrapper;
