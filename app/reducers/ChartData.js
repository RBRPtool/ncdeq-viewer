export function chartData(state = [], action) {
  switch (action.type) {
    case 'GET_CHART_DATA':
      return { ...state, chart_data:  action.chart_data, chart_visibility: action.chart_visibility}
    case 'SET_CHART_VISIBILITY':
      return { ...state, chart_data:  action.chart_data, chart_visibility: action.chart_visibility}
    case 'GET_CHART_LEVELS':
      return {...state, chart_levels: action.chart_levels}
    case 'UPDATE_CHART_LEVEL':
      return {...state, chart_levels: action.chart_levels}
    default:
      return state
  }
}

export function CATCHMENTDATA(state = [], action){
  switch (action.type) {
    case 'GET_CATCHMENT_DATA':
      return {...state, CATCHMENTData: action.CATCHMENTData, catchment_chart_ar: action.catchment_chart_ar}
    default:
      return state
  }
}

export function NLCDDATA(state = [], action){
  switch (action.type) {
    case 'GET_NLCD_DATA':
      return {...state, ncld_chart_data: action.ncld_chart_data}
    case 'GET_NLCD_DATA_HUC12':
      return {...state, ncld_chart_data_huc12: action.ncld_chart_data}
    default:
      return state
  }
}

export function active_function(state = [], action){
  switch (action.type) {
    case 'SET_ACTIVE_FUNCTION':
      return {...state, active_function: action.active_function}
    default:
      return state
  }
}

export function chart_buttons(state = [], action){
  switch (action.type) {
    case 'GET_CHART_BUTTONS':
      return {...state, chart_buttons: action.chart_buttons}
    default:
      return state
  }
}

export function chart_limit(state = [], action){
  switch (action.type) {
    case 'CHART_LIMIT':
      return {...state, chart_limit: action.chart_limit}
    default:
      return state
  }
}


export function fetching_chart(state = [], action){
  switch (action.type) {
    case 'FETCHING_CHART':
      return {...state, fetching_chart: action.fetching}
    default:
      return state
  }
}
