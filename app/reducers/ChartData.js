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
