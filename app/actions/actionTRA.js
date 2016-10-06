var axios = require('axios');
import { CheckReponse } from './responses';
import { AGO_URL, DATA_FEATUREID , SERVICE_NAME, TRA_FEATUREID} from '../constants/actionConstants';

import { START_POSITION, CATALOGING_UNIT_FROM_HUC12_END_POISTION } from '../constants/appConstants';

//  general functions and  helpers.  reuse functions
import {  getAGOGeographyLabel, getCurrentLevel } from '../utils/helpers';

//set base URL for axios
axios.defaults.baseURL = AGO_URL;

//get chart data for all
function ago_get_traxwalk_by_id(hucid, current_geography_level){

  //set default id
  var id = hucid;

  //get the lower level in the huc heirachy
  // var next_level = getNextLevel(current_geography_level);
  const level = getAGOGeographyLabel(current_geography_level).toUpperCase()
  // const level = 'HUC_12'

  //if current huc hierachy is set to huc12 we do not have a lower level in the heirachy
  //  but we want to show all the hucs in the current huc12's Cataloging unit
  //  so we need to get the first 8 characters, which is the Cataloging Unit
  // if(current_geography_level === 'HUC12'){
  //   id = hucid.substring(START_POSITION, CATALOGING_UNIT_FROM_HUC12_END_POISTION);
  // }


   //build the query to arcgis online api for getting the raw chart data
   const query_URL = '/' + SERVICE_NAME + '/FeatureServer/' + TRA_FEATUREID + '/query' +
                   '?where=id%3D%27' + id + '%27+and+type+%3D+%27' + level.toUpperCase() + '%27' +
                   '&objectIds=' +
                   '&time=' +
                   '&resultType=' +
                   'none&outFields=*' +
                   '&returnIdsOnly=false' +
                   '&returnCountOnly=false' +
                   '&returnDistinctValues=true' +
                   '&orderByFields=' +
                   '&groupByFieldsForStatistics=' +
                   '&outStatistics=' +
                   '&resultOffset=' +
                   '&resultRecordCount=' +
                   '&sqlFormat=none' +
                   '&f=pgeojson' +
                   '&token='

  //send the ajax request via axios
  return axios.get(query_URL);

}

//get chart data from data api
function ago_get_tra_by_ids( id_list){

  const id_in_list = "(" + id_list + ')'

  //build the query to arcgis online api for getting the raw chart data
  const query_URL = '/' + SERVICE_NAME + '/FeatureServer/' + DATA_FEATUREID + '/query' +
                    '?where=ID+in+' + id_in_list +
                    '&objectIds=' +
                    '&time='  +
                    '&resultType=none' +
                    '&outFields=*' +
                    '&returnIdsOnly=false' +
                    '&returnCountOnly=false' +
                    '&returnDistinctValues=true' +
                    '&orderByFields=' +
                    '&groupByFieldsForStatistics=' +
                    '&outStatistics=' +
                    '&resultOffset=' +
                    '&resultRecordCount=' +
                    '&sqlFormat=none' +
                    '&f=pgeojson' +
                    '&token='

 //send the ajax request via axios
 return axios.get(query_URL);

}

export function get_TRAData(hucid, current_geography_level){
  return (dispatch, getState) => {
    ago_get_traxwalk_by_id(hucid, current_geography_level)
      .then( tra_xwalk_response => {

        let tra_datas = {};
        let chart_all_tra = [];
        let group = {};

        tra_datas = CheckReponse(tra_xwalk_response,'AGO_API_ERROR');

        if(tra_datas.features){
          // console.log(tra_datas)

          let group = []

           tra_datas.features.map( feature => {

            const id = feature.properties.ID
            const tra_name = feature.properties.TRA_Name
            group.push({
              id,
              tra_name
            })

            //  if (group.indexOf(feature.properties.ID) < 0){
            //    group.push({id:feature.properties.ID})
            //    group[feature.properties.ID] = []
            //    group[feature.properties.ID].push({TRA_Name: feature.properties.TRA_Name})
            //  } else {
            //    group[feature.properties.ID].push({TRA_Name: feature.properties.TRA_Name})
            //  }



            //  if( group[feature.properties.ID]){
            //    group[feature.properties.ID].push({TRA_Name: feature.properties.TRA_Name})
            //  }
            //  group[feature.properties.ID].push({TRA_Name: x.properties.TRA_Name})

            //  if( group[feature.properties.ID] === group[feature.properties.ID] ){
            //    group[feature.properties.ID].push({TRA_Name: x.properties.TRA_Name})
            //  } else {
            //   //  group.push(feature.properties.ID).push({TRA_Name: x.properties.TRA_Name})
            //  }
            //     // group[feature.properties.ID].push({TRA_Name: x.properties.TRA_Name})
           })
          // group = tra_datas.features.reduce(function(acc, x) {
          //
          //   // first check if the given group is in the object
          //   acc[x.properties.ID] = acc[x.properties.ID] ?  acc[x.properties.ID ].push({TRA_Name: x.properties.TRA_Name}) :  [{TRA_Name: x.properties.TRA_Name}] ;
          //
          //   return acc;
          //
          //  }, {});

          //  console.log(group)

           //{"name": "test"}
           dispatch(tra_data('GET_TRA_DATA', group));
        }



        // let tra_id_list = ""


        // //if the tra_data  is returned
        // //  we need to get the chart data...
        // if(tra_datas.features){
        //   tra_datas.features.map( tra => {
        //
        //       //get tra xwalk this will retrieve the tra id's from the HUC id's
        //       //  the tra xwalk has already determined the spatial relationships between hucs and
        //       //  tra's so we do not have to
        //       const tra_id = tra.properties.TRA_Name;
        //       tra_id_list = tra_id_list + ',' + "'" + tra_id + "'"
        //     })
        //     tra_id_list = tra_id_list.substring(1,tra_id_list.length)
        //   }







      }).catch(error => { console.log('request failed', error); });
  }
}


//function to handle sending to reducer and store
function tra_data(type, data) {
  // return {
  //   type: type,
  //   chart_data: {id_json,level_json},
  //   receivedAt: Date.now()
  // }
  return {
   type: type,
   tra_data: {
     data
   },
   receivedAt: Date.now()
 }
}
