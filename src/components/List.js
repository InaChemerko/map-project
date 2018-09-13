import React, { Component } from 'react';
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'


class List extends Component {

  //state ={ }

  /*updateQuery = (query) => {
    this.setState({query})    
  }*/

  

  render() {
console.log(this.props.query)
		return(          
		<nav className="navbar">            
                        <div className="list">
                          <input className="search"
                          type="text"
            	          placeholder="Search "
            	          value={this.props.query}
            	          onChange={(event) => this.props.updateQuery(event.target.value)}/>
                        <span className="button">Filter</span>
            	          <ul className="main-location">
                        {this.props.venues.filter(filterMyVenue => filterMyVenue.venue.name.toLowerCase().indexOf(this.props.query.toLowerCase()) > -1)
              .map((afterFilter) => {
                return <li tabIndex='0' className="filter" key={afterFilter.venue.id}>{afterFilter.venue.name}</li>
            })}
            	          
            	          </ul>
                        </div>
                       </nav>                      
                 
			)
	}
}

export default List