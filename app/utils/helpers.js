//general functions used in multiple components, actions, and reducers

 //get the next level of geog for a geography level to use in ago api
//  example this gets all the hucs for a Cataloging unit
export function getNextLevel(geogLevel){
  switch (geogLevel) {
    case 'River Basins':
      return 2;
      break;
    case 'Cataloging Units':
      return 3;
      break;
    case 'HUC12':
      return 3;
      break;
    default:
      return 9999;
    }
};

//get the current level of geog for a geography level to use in ago api
//  example this gets all the hucs for a Cataloging unit
export function getCurrentLevel(geogLevel){
  switch (geogLevel) {
    case 'River Basins':
      return 1;
      break;
    case 'Cataloging Units':
      return 2;
      break;
    case 'HUC12':
      return 3;
      break;
    default:
      return 9999;
    }
};

//only needs this untill I change the data feed have named generically?
// or maybe control via yaml file....
export function getAGOGeographyLabel(geogLevel){
  switch (geogLevel) {
    case 'River Basins':
      return 'huc_6';
      break;
    case 'Cataloging Units':
      return 'huc_8';
      break;
    case 'HUC12':
      return 'huc_12';
      break;
    default:
      return 'huc_12';
    }
};

export function getNextLevelName(level){
  //next level is hardcoded need to make this data driven
  //move this to a helper?
  switch (level) {
    case 'River Basins':
      return 'Cataloging Units';
      break;
    case 'Cataloging Units':
      return 'HUC12';
      break;
    case 'HUC12':
      return '';
      break;
    case 'TRA':
      return 'TRA';
      break;
    default:
      return '';
  }
};

export function getFriendlyName_NextLevel(level){
  //next level is hardcoded need to make this data driven
  //move this to a helper?
  switch (level) {
    case 'River Basins':
      return 'Cataloging Unit';
      break;
    case 'Cataloging Units':
      return 'HUC 12';
      break;
    case 'HUC12':
      return 'HUC 12';
      break;
    case 'TRA':
      return 'TRA';
      break;
    default:
      return '';
  }
};


export function getFriendlyName(level){
  //next level is hardcoded need to make this data driven
  //move this to a helper?
  switch (level) {
    case 'River Basins':
      return 'River Basin';
      break;
    case 'Cataloging Units':
      return 'Cataloging Unit';
      break;
    case 'HUC12':
      return 'HUC 12';
      break;
    case 'TRA':
      return 'TRA';
      break;
    default:
      return '';
  }
};


export function getPrevLevelName(level){
  //next level is hardcoded need to make this data driven
  //move this to a helper?
  switch (level) {
    case 'River Basins':
      return '';
      break;
    case 'Cataloging Units':
      return 'River Basins';
      break;
    case 'HUC12':
      return 'Cataloging Units';
      break;
    default:
      return '';
  }
};

//only needs this untill I change the data feed have named generically?
// or maybe control via yaml file....
export function getCategoryName(geogLevel){
  switch (geogLevel) {
    case 'huc_6':
      return 'River Basins';
      break;
    case 'huc_8':
      return 'Cataloging Units';
      break;
    case 'huc_12':
      return 'HUC12';
      break;
    default:
      return 'River Basins';
    }
};


//only needs this untill I change the data feed have named generically?
// or maybe control via yaml file....
export function getAGOFeatureId(geogLevel){
  switch (geogLevel) {
    case 'River Basins':
      return '6';
      break;
    case 'Cataloging Units':
      return '5';
      break;
    case 'HUC12':
      return '4';
      break;
    default:
      return '4';
    }
};

//only needs this untill I change the data feed have named generically?
// or maybe control via yaml file....
export function get_matchEnd(geogLevel){
  switch (geogLevel) {
    case 'River Basins':
      return '6';
      break;
    case 'Cataloging Units':
      return '8';
      break;
    case 'HUC12':
      return '12';
      break;
    default:
      return '12';
    }
};


//only needs this untill I change the data feed have named generically?
// or maybe control via yaml file....
export function get_HUC(geogLevel){
  switch (geogLevel) {
    case 'River Basins':
      return 'HUC 6';
      break;
    case 'Cataloging Units':
      return 'HUC 8';
      break;
    case 'HUC12':
      return 'HUC 12';
      break;
    default:
      return 'HUC 12';
    }
};
