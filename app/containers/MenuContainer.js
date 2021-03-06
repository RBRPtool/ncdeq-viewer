import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

//import actions
import { set_defaults, set_search_method, get_MenuList, get_ChartData, get_TRAData, change_geographyLevelActive,
         change_geographyLevelFilter, handleSearchChange, update_ChartVisiblity,
         set_mapToPoint, get_LayerInfo_ByValue, update_HeaderVis, get_all_geometries } from '../actions/actionCreators'

//import components
import MenuComponent from '../components/MenuComponent'

//either rename the properties or rename it also in main
const mapStateToProps = (state,props) => {
  let DefaultMenuLists = state.menuLists.lists;
  let geography_levels = state.geography_levels.geography_levels;
  let charts = state.chartData;
  let map_settings = state.mapConfig.mapconfig;
  let leafletMap = state.leafletMap;
  let layerInfo = state.mapConfig.layerinfo;
  let traPointInfo = state.mapConfig.traPointInfo;
  let huc8Info = state.mapConfig.huc8Info;
  let searchMethod = state.mapConfig.searchMethod;
  let traInfo = state.mapConfig.traInfo;

  return {
    DefaultMenuLists,
    charts,
    geography_levels,
    map_settings,
    leafletMap,
    layerInfo,
    traPointInfo,
    traInfo,
    tra_data: state.traData.tra_data,
    huc8Info,
    searchMethod,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    get_MenuList: bindActionCreators(get_MenuList, dispatch),
    update_ChartVisiblity: bindActionCreators(update_ChartVisiblity, dispatch),
    change_geographyLevelActive: bindActionCreators(change_geographyLevelActive,dispatch),
    change_geographyLevelFilter: bindActionCreators(change_geographyLevelFilter,dispatch),
    get_ChartData: bindActionCreators(get_ChartData,dispatch),
    get_TRAData: bindActionCreators(get_TRAData,dispatch),
    handleSearchChange: bindActionCreators(handleSearchChange, dispatch),
    set_mapToPoint: bindActionCreators(set_mapToPoint, dispatch),
    get_LayerInfo_ByValue: bindActionCreators(get_LayerInfo_ByValue, dispatch),
    set_search_method: bindActionCreators(set_search_method,dispatch),
    update_HeaderVis: bindActionCreators(update_HeaderVis, dispatch),
    get_all_geometries: bindActionCreators(get_all_geometries, dispatch),
    set_defaults: bindActionCreators(set_defaults, dispatch),

  }
}

const MenuContainer = connect(
      mapStateToProps,
      mapDispatchToProps
    )(MenuComponent)

export default MenuContainer
