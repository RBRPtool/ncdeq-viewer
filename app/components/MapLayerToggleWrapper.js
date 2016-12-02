var React = require('react');
var MapLayerToggleName = require('./MapLayerToggleName');
var MapLayerToggle = require('./MapLayerToggle');
var PropTypes = React.PropTypes;
import Divider from '../components/Divider'
import {
  BOX_BORDER,
  SPACING
} from '../constants/appConstants'


var MapLayerToggleWrapper = React.createClass({
  componentDidMount: function() {
    $('.ui.accordion').accordion();
  },
  get_display_names: function(layer_name){

    let display_name = "";

    switch (layer_name) {
      case 'catchment':
        display_name = "Catchment"
        break;

      case 'tra':
        display_name = "Targeted Resource Area (TRA)"
        break;

      case 'point':

        display_name = "Point Marker"
        break;

      case 'huc6':
        display_name = "Cataloging Unit (HUC 8)"
        break;

      case 'huc8':
        display_name = "Cataloging Unit (HUC 8)"
        break;

      case 'HUC 12':
        display_name = "HUC 12"
        break;

      case 'HUC12':
        display_name = "HUC 12"
        break;

      case 'huc12':
        display_name = "HUC 12"
        break;

      case 'Cataloging Units':
        display_name = "Cataloging Units (HUC 8)"
        break;

      case 'River Basins':
        display_name = "River Basin (HUC 6)"
        break;


      default:
        display_name = layer_name
        break;
    };
    return display_name;
  },
  create_toggles: function(layers){
    //create geojson layer toggles
    return layers.map( item => {
      if(item.layer){
        return (<MapLayerToggle
          key={item.name}
          toggleText={item.name}
          layer={item.layer}
          get_display_names={this.get_display_names}
          leafletMap={this.props.leafletMap.leafletMap}
          />)
        }
      })
    },
    check_toggles_valid: function(component){
      let valid = false
      component.map( item => {
        if(item){
          valid = true
        }
      })
      return valid
    },
  render: function() {
    let layers = [];

    //get tile layers
    if (this.props.map_settings){
      layers = this.props.map_settings.layers;
    }

    //create geojson layer toggle
    const tilelayer_component = this.create_toggles(layers)

    let geojson_layers  = []
    if(this.props.geojson_layers){
      geojson_layers = this.props.geojson_layers
    }

    //make the name and layer a generic object arrat
    let data_array = []
    Object.keys(geojson_layers).forEach(key => {
      if(key.toUpperCase() != 'NAME'){
        data_array.push({name:key,layer:geojson_layers[key]})
      }
    })

    //create geojson layer toggle
    const geojson_component = this.create_toggles(data_array)

    const gj_valid = this.check_toggles_valid(geojson_component)

    const space = (<span>&nbsp;</span>)

    return (
      <div className="ui inverted segment" style={{padding:"0px 5px 0px 5px",marginRight:"4px"}}>
        <div className="ui vertical inverted fluid accordion">
          <div className="item">
            <div className="title" style={{fontWeight: "700",fontSize: "1rem"}}>
                <i className="dropdown left floated icon"></i>
                <i className="list layout icon"></i>
                Toggle Layers
            </div>
            <div className="content">
              <Divider />
              <MapLayerToggleName text='Base Map Layers'/>
              {tilelayer_component}
              <div style={{paddingBottom:SPACING}}></div>
              {gj_valid &&
                <div>
                  <Divider />
                  <MapLayerToggleName text='Highlighted Map Layers'/>
                  {geojson_component}
                </div>
              }
              <div style={{paddingBottom:SPACING}}></div>
            </div>
          </div>
        </div>
      </div>

      );
    }

  });
  // <div className="row" style={{backgroundColor:"rgba(255,255,255,.75)",border:BOX_BORDER,padding:SPACING}}>
  //   <h2 className="" >Toggle Layers</h2>
  // </div>
  module.exports = MapLayerToggleWrapper;
