import React, { Component } from 'react';
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'


class List extends Component {

  state ={
    query:''
  }

  updateQuery = (query) => {
    this.setState({query})    
  }

  

  render() {
console.log(this.props)
		return(          
		<nav className="navbar">            
                        <div className="list">
                          <input className="search"
                          type="text"
            	          placeholder="Search "
            	          value={this.state.query}
            	          onChange={(event) => this.updateQuery(event.target.value)}/>
            	          <button>x</button>
            	          <ul className="main-location">
                        {this.props.venues.filter(filterMyVenue => filterMyVenue.venue.name.toLowerCase().indexOf(this.state.query.toLowerCase()) > -1)
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