var axios = require('axios');

//import actions and action contstants
import { CheckReponse } from './responses';
import * as MenuLists from './actionMenuLists';
import * as ChartData from './actionChartData';
import * as GeographyLevels from './actionGeographyLevels';
import * as MapConfig from './actionMap';
import * as ActionDefault from './actionDefault';
import * as ActionLeaflet from './actionLeaflet'
import * as ActionTRA from './actionTRA'
import * as constants from './constants'

//create a const for each action so it can be imported and connected components
//menu actions
export const get_MenuList = MenuLists.get_MenuList;

//GeographyLevels Actions (really menus also)
export const get_GeographyLevels = GeographyLevels.get_GeographyLevels;
export const change_geographyLevelActive = GeographyLevels.change_geographyLevelActive;
export const change_geographyLevelFilter = GeographyLevels.change_geographyLevelFilter;

//chart data and state actions
export const update_ChartVisiblity = ChartData.update_ChartVisiblity;
export const get_ChartData = ChartData.get_ChartData;
export const get_TRAData = ActionTRA.get_TRAData;
export const get_ChartLevels = ChartData.get_ChartLevels;
export const update_ChartLevels = ChartData.update_ChartLevels;
export const get_nlcd_data = ChartData.get_nlcd_data;
export const get_nlcd_data_huc12 = ChartData.get_nlcd_data_huc12;
export const get_catchment_data = ChartData.get_catchment_data;
export const set_active_function = ChartData.get_active_function;
export const get_chart_buttons = ChartData.get_chart_buttons;

//map data and state actions
export const get_defaultMapData = MapConfig.get_defaultMapData;
export const HandleMapEnd = MapConfig.HandleMapEnd;
export const set_MapLayers = MapConfig.set_MapLayers;
export const set_mapToPoint = MapConfig.set_mapToPoint;
export const handleSearchChange = MapConfig.handleSearchChange;
export const get_LayerInfo_ByPoint = MapConfig.get_LayerInfo_ByPoint;
export const get_LayerInfo_ByValue = MapConfig.get_LayerInfo_ByValue;
export const set_search_method = MapConfig.set_search_method;
export const get_tra_info = MapConfig.get_tra_info;
export const get_LayerGeom_ByValue = MapConfig.get_LayerGeom_ByValue;
export const set_active_hover = MapConfig.set_active_hover;
export const get_all_geometries = MapConfig.get_all_geometries;

//default app actions
export const set_defaults = ActionDefault.set_defaults;
export const update_HeaderVis = ActionDefault.update_HeaderVis;
export const set_LeafletMap = ActionLeaflet.set_LeafletMap;
export const use_imagery = ActionLeaflet.use_imagery;

export const set_constants = constants.set_constants;
