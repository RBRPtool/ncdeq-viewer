import { combineReducers } from 'redux';
import { routerReducer} from 'react-router-redux';

import { getLists } from '../actions/actionCreators';

//import each reducers
import {menuLists} from './getMenuLists';
import {chartDataByID, AllChartDataByID,chartData} from './ChartData';
import {CurrentID} from './setCurrentID';
import {geography_levels, change_geographyLevelActive} from './GeographyLevels';
import {mapConfig} from './MapConfig';
import {default_settings} from './DefaultSettings';


const rootReducer = combineReducers( { menuLists, chartDataByID, AllChartDataByID, chartData,CurrentID, geography_levels, change_geographyLevelActive, mapConfig, default_settings,routing: routerReducer} );

export default rootReducer;
