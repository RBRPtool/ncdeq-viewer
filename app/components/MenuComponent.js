var React = require('react');
var MenuItemComponent = require('../components/MenuItemComponent');
var PropTypes = React.PropTypes;

var MenuComponent = React.createClass({
  propTypes: {
    handleSearchChange: PropTypes.func.isRequired,
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired
  },
  componentDidMount: function() {
    //var input = document.getElementById('searchTextField');
    //var options = {componentRestrictions: {country: 'us'}};
    //new google.maps.places.Autocomplete(input, options);

    this.props.getMenus();

  },
  //only needs this untill I change the data feed have named generically?
  // or maybe control via yaml file....
  getCategoryName: function(geogLevel){
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
  },
  getLevel: function(){

    //filter the levels to get the active tab
    const ActiveTabObject = this.props.geography_levels.filter( key =>{
      return key.active === true;
    })

    //set default active tab - as Highest level
    let activeTab = 'River Basins'
    if (ActiveTabObject.length > 0){
      //get the active tab and convert the name to the name used in the app.
      //  this will eventually be driven by config or data....???
      activeTab = this.getCategoryName(ActiveTabObject[0].geography_label);
    }

    return activeTab
  },
  getNextLevel: function(level){
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
      default:
        return '';
    }

  },
  //only needs this untill I change the data feed have named generically?
  // or maybe control via yaml file....
  get_AGOLevel: function(geogLevel){
        //move this to a helper?
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
  },
  updateFilterState(level,value){

    var nextLevel = this.getNextLevel(level);

    //set filter and active state for next level(s)
    if(nextLevel){

      //kind of hacky--how to do this in redux?
      $('#search-select-'+nextLevel.replace(' ','_')).dropdown('set text','Choose a ' + nextLevel)

      //recursive call to update all level filters
      return this.updateFilterState(nextLevel,value)
    } else{
      return
    }
  },
  menuChange: function(e){

    var level = this.getLevel();
    this.updateFilterState(level,e.target.value);

    this.props.setCurrentID(e.target.value);
    this.props.getChartDataByID(e.target.value);
    this.props.getAllChartDataByID(e.target.value,level);
    this.props.change_geographyLevelFilter(e.target.value,level)

  },
  handleMenuClick: function(val,e) {

    //get current geography level
    var level = this.getLevel();

    //set current geography level in redux state store
    this.props.change_geographyLevelActive(val);

  },
  getActive: function(val){

    const level = this.get_AGOLevel(val)
    //can I make this a generic function since I am using same logic over.
    //filter the levels to get the current passed level
    const FilterObject = this.props.geography_levels.filter( key =>{
      return key.geography_label === level;
    })

    //set default
    let isActive = false;
    if (FilterObject.length > 0){
      //get active boolen
      isActive = FilterObject[0].active;
    }

    //return active setting
    return (isActive ? 'active item' : 'item');

  },
  getFilter: function(val){
    const level = this.get_AGOLevel(val)

    //filter the levels to get the current passed level
    const FilterObject = this.props.geography_levels.filter( key =>{
      return key.geography_label === level;
    })

    //set default
    let theFilter = ''
    if (FilterObject.length > 0){
      //get the Filter
      theFilter = FilterObject[0].filter;
    }

    return theFilter;

  },
  render: function() {
    return (
      <div className="ui pointing menu"  >
        <div className="header item">
          &nbsp;
        </div>

          { this.props.CompleteMenuLists &&
            this.props.CompleteMenuLists.map(function(item) {
              return (
                <MenuItemComponent key={item.name} name={item.name} lists={item.lists} activeValue={item.activeValue} getFilter={this.getFilter} getActive={this.getActive} handleMenuClick={this.handleMenuClick} menuChange={this.menuChange}/>
              )
            }.bind(this))
          }

          <a className="item" id="menu-placeholder-River_Basins" >
            <select className="ui search selection dropdown"   >
              <option value="">Choose a River Basins</option>
            </select>
          </a>
          <a className="item" id="menu-placeholder-Cataloging_Units" >
            <select className="ui search selection dropdown"  >
              <option value="">Choose a Cataloging Unit</option>
            </select>        </a>
          <a className="item" id="menu-placeholder-HUC12" >
            <select className="ui search selection dropdown"  >
              <option value="">Choose a HUC12</option>
            </select>
          </a>

        <div className="header item" >
          &nbsp;
        </div>
        <div className="left menu">
          <div className="item">
            <div className="ui transparent icon input">
              <input className="mapSearch" type="text" placeholder="Search to zoom..." onChange={this.props.handleSearchChange.bind(null,this)} />
              <i className="search link icon"></i>
            </div>
          </div>
        </div>
      </div>


    );
  }

});

module.exports = MenuComponent;
