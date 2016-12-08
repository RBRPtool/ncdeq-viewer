var React = require('react');
var PropTypes = React.PropTypes;

import { BarChart, Bar, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const tooltipstyle = {
  width: '100%',
  margin: 0,
  lineHeight: 24,
  border: '1px solid #f5f5f5',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  padding: 10,
};

const toolTipLabel = {
  margin: '0',
  color: '#666',
  fontWeight: '700',
};

const CustomToolTipSimpleBarCharts  = React.createClass({
  propTypes: {
    type: PropTypes.string,
    payload: PropTypes.array,
    label: PropTypes.string,
  },
  componentWillMount: function() {
    const background_bar = $('#simple-bar').find('.recharts-bar-cursor')

    $(background_bar).css({ fill: "none" })
  },
  render() {
    const { active } = this.props;
    let html_hov = '';
    if (active) {
      const { payload, label } = this.props;

      const thedata = payload.map( bar_segment => {

       const colors = this.props.get_keyColors(bar_segment.name)

        const toolTipName = {
          margin: '0',
          color: colors,
        }

        const toolTipValue = {
          fontWeight: '800',
        }

        const value = bar_segment.value ?  bar_segment.value.toString().substring(0,5) : 'N/A';
        const name = bar_segment.name + ": "

        return ( <p key={bar_segment.name} style={toolTipName}>{name}<span style={toolTipValue}>{value}</span></p>)
      })

      const background_bar = $('#simple-bar').find('.recharts-bar-cursor')

      $(background_bar).css({ fill: "none" })

      if (label === '1' || label === '2' ){
        $(background_bar).css({ fill: "none" })
        return (<div key={label+'blanktip'}/>)
      } else {
        $(background_bar).css({ fill: "#f1f1f1" })
      }

      const labelstr = label.toString();

      return (

        <div key={labelstr+'tooltip'} style={tooltipstyle}>
          <p style={toolTipLabel}>Cathcment: {`${labelstr}`}</p>
          {thedata}
      </div>

      );
    }

    return null;
  }
});

module.exports = CustomToolTipSimpleBarCharts;
