import { combineReducers } from 'redux';

import { setChartVisibility } from '../actions/actions';

const testdata = 'test'
function test() {
  return {testdata}
}

const rootReducer = combineReducers( {test} );

export default rootReducer;
