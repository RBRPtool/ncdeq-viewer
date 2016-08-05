var React = require('react');
var PropTypes = React.PropTypes;

import { BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { scaleOrdinal, schemeCategory10 } from 'd3-scale';
import { getAGOFeatureId} from '../utils/helpers';
import { HUC12_MAP_FEATUREID } from '../constants/actionConstants';


var ChartTest = React.createClass({
  propTypes: {
    title: PropTypes.string,
  },
  getDefaultProps: function() {
    return {
      title:'Title'
    };
  },
  handleClick(constructor, name, data, index, test, d) {
    this.props.get_LayerInfo_ByValue(name, HUC12_MAP_FEATUREID)
    // const id = $("#data").html(name);

    //super hacky way to get values into webpage.
    // need to pass chart data for other levels so we can "drilldown"
    const props = constructor.props.BarChartData_D3
    let props_filtered = props.filter(item => {
      return item.name === name
    })
    let values = ''
    props_filtered.map( chartclickvalues => {
      for (var prop in chartclickvalues) {
        if (chartclickvalues.hasOwnProperty(prop)) {
          if(typeof chartclickvalues[prop] === 'object'){
            values = values + prop + ": " + JSON.stringify(chartclickvalues[prop]) + "<BR />"
          }else{
            values = values + prop + ": " + chartclickvalues[prop] + "<BR />"
          }
        }
      }

    })
    $("#data").html(values);
  },
  componentDidUpdate: function(prevProps, prevState) {
  },
  render: function() {
    //build chart data component and when there is no data returned
    //  Tell user no chart data Available
    let title;
    if (this.props.baseline_filter){
      // title =  <div key="1" >ALL HUC's in the Cataloging Unit {this.props.baseline_filter.substring(0,8)}</div>
      // title =  title + <div key="2" >Click on the Chart to go to the HUC <strong>OR</strong> Place you mouse cursor over bar to get more information</div>
      if(this.props.BarChartData_D3.length === 0){
        title = "No Data was found HUC's for the HUC " + this.props.baseline_filter + "! Try to click the map, choose a HUC, or Search for a location again."
      } else {
        title = "This chart displays ALL HUC's in the Cataloging Unit " + this.props.baseline_filter.substring(0,8) + ". Click on the Chart to go to the HUC OR Place you mouse cursor over bar to get more information."
      }

    } else {
      title = "No Charts Available Yet Please Click on the map, choose a HUC, or Search for a location"
    }
    $('#description').html(title);

    return (

      <div >

           <div id="chart" style={{float:"left"}} >
        {/* only render if data is passed  */}
        { this.props.BarChartData_D3 &&

          <BarChart width={1000} height={200} data={this.props.BarChartData_D3} margin={{top: 20, right: 30, left: 20, bottom: 5}} >
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip coordinate={{x:500,y:540}} />
            <Legend />
            <Bar dataKey="Total Water Quality Baseline" stackId="a" fill="#fdc086"  >
              {
                this.props.BarChartData_D3.map((entry, index) => (
                  <Cell ref={entry.name}
                        cursor="pointer"
                        fill={entry.name === this.props.baseline_filter ? '#fc9636' : '#fdc086' }
                        key={`cell-${index}`}
                        id={entry.name}
                        onClick={this.handleClick.bind(null,this,entry.name )}  />
                ))
              }
            </Bar>
            <Bar dataKey="Total Hydrology Baseline" stackId="a" fill="#beaed4" >
              {
                this.props.BarChartData_D3.map((entry, index) => (
                  <Cell ref={entry.name}
                        cursor="pointer"
                        fill={entry.name === this.props.baseline_filter ? '#9479b9' : '#beaed4' }
                        key={`cell-${index}`}
                        id={entry.name}
                        onClick={this.handleClick.bind(null,this,entry.name)}/>
                ))
              }
            </Bar>
            <Bar dataKey="Total Habitat Baseline" stackId="a" fill="#7fc97f" >
              {
                this.props.BarChartData_D3.map((entry, index) => (
                  <Cell ref={entry.name}
                        cursor="pointer"
                        fill={entry.name === this.props.baseline_filter ? '#44a244' : '#7fc97f' }
                        key={`cell-${index}`}
                        id={entry.name}
                        onClick={this.handleClick.bind(null,this,entry.name)} />
                ))
              }
            </Bar>
          </BarChart>

        }
      </div>
      <div className="ui basic segment">
        <div id="data" style={{float:"right",width:225}}>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = ChartTest;
