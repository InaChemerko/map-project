import React, { Component } from 'react';
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'


class List extends Component {

  state ={
    listIsOpen: true
  }

  toggleList = () => {
    this.setState(currentState => ({
      listIsOpen: !currentState.listIsOpen
    }))
  }

  /*updateQuery = (query) => {
    this.setState({query})    
  }*/
//this.props.venues.filter(filterMyVenue => filterMyVenue.venue.name.toLowerCase().indexOf(this.props.query.toLowerCase()) > -1)
  

  render() {
console.log(this.props.query)

let filteredData = this.props.venues.filter(filterMyVenue => filterMyVenue.venue.name.toLowerCase().indexOf(this.props.query.toLowerCase()) > -1)
		return(          
		<nav className="navbar">            
                        <div className="list">
                          <input className="search"
                          type="text"
            	          placeholder="Search "
            	          value={this.props.query}
            	          onChange={(event) => this.props.updateQuery(event.target.value)}/>
                        <span className="button" onClick={this.toggleList}>Filter</span>
            	          <ul className={this.state.listIsOpen === true?"main-location":"hidden"}>
                        {filteredData.map((afterFilter) => {
                return <li tabIndex='0' className="filter" key={afterFilter.venue.id}>{afterFilter.venue.name}</li>
            })}
            	          
            	          </ul>
                        </div>
                       </nav>                      
                 
			)
	}
}

export default List