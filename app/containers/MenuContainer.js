var React = require('react');
var MenuComponent = require('../components/MenuComponent');

var PropTypes = React.PropTypes;

var MenuContainer = React.createClass({
  defaultItems: function(){
    return ([
      {name:'River Basins' },
      {name:'Cataloging Units'},
      {name:'HUC'}
    ])
  },
  componentDidMount: function() {
    //var input = document.getElementById('searchTextField');
    //var options = {componentRestrictions: {country: 'us'}};
    //new google.maps.places.Autocomplete(input, options);
  },

  getStateObject: function(){

    var obj = {};
    var items = this.defaultItems();

    items.map(function(item) {
      obj[ item.name ] = false;
    })

    return obj
  },
  getInitialState: function () {
    return this.getStateObject();
  },
  resetMenus: function(){
    //set all to false
    this.setState(this.getStateObject())
  },
  handleMenuClick: function(val,e) {
    console.log(val)
    //reset menu
    this.resetMenus();

    //change state to active for clicke menu
    this.setState({
      [val]: true,
    })

  },
  getActive: function(val){
    return  (this.state[val] ? 'active item' : 'item')
  },
  render: function() {
    return (
      <MenuComponent
        handleSearchChange={this.props.handleSearchChange}
        handleMenuClick={this.handleMenuClick}
        handleChange={this.handleChange}
        getActive={this.getActive}
        items = {this.defaultItems()}/>
    );
  }

});

module.exports = MenuContainer;
