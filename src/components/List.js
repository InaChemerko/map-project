import React, { Component } from 'react';
//import sortBy from 'sort-by'
//import escapeRegExp from 'escape-string-regexp'
import iconMarkerBlue from '../blue-dot.png';
import iconMarkerRed from '../red-dot.png'


class List extends Component {

  state ={
    listIsOpen: true
  }

//open/close list
  toggleList = () => {
    this.setState(currentState => ({
      listIsOpen: !currentState.listIsOpen
    }))
  }

// open infoWindow and set/reset animation and icon of marker, when click on item of list
openonClick = (id, place) => {
  this.props.openInfoWindow(this.props.markers[id], place)
  this.props.markers[id].setIcon(iconMarkerBlue)
  this.props.markers[id].setAnimation(window.google.maps.Animation.BOUNCE)
  let myMarker = this.props.markers[id]
  //reset animation and set icon of marker to default state
  setTimeout(function() {
    myMarker.setIcon(iconMarkerRed)
    myMarker.setAnimation(null)
    }, 500);
   }
  
  render() {
//console.log(this.props.query)
//console.log("markers",this.props.markers)
//console.log("infwind",this.props.infoWindow)
let filteredData = this.props.venues.filter(filterMyVenue => filterMyVenue.venue.name.toLowerCase().indexOf(this.props.query.toLowerCase()) > -1)
		return(          
		<nav className="navbar">            
                        <div className="list">
                        <div className="list-search">
                          <input className="search" role="search" aria-label="search"
                          type="text"
            	          placeholder="Search "
            	          value={this.props.query}
            	          onChange={(event) => this.props.updateQuery(event.target.value)}/>
                        <span className="button" onClick={this.toggleList}>Filter</span> 
                        <h2>Phoenix cafes</h2></div>
                        <ul className={this.state.listIsOpen === true?"main-location":"hidden"} tabIndex="0" arial-label="navigation" role="navigation">
                        {filteredData.map((afterFilter, index) => {
                return <li className="filter" key={afterFilter.venue.id} tabIndex='0' onClick={()=> this.openonClick(index,afterFilter)}>{afterFilter.venue.name}</li>
            })}
            	          
            	          </ul>
                        </div>
                       </nav>                      
                 
			)
	}
}

export default List