
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import MainComponent from '../components/MainComponent';

function mapStateToProps(state) {
  let DefaultMenuLists = state.menuLists.lists;
  let current_id = state.CurrentID.current_id;
  let geography_levels = state.geography_levels.geography_levels;
  let chart_data = state.chartData.chart_data;


  return {
    DefaultMenuLists,
    current_id,
    geography_levels,
    chart_data
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default App;
