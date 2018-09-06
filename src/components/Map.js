import React, { Component } from 'react';


class Map extends Component {


  componentDidMount(){
    if(!window.google) {
      console.error("Error: not load yet"); //Google API not load yet
    } else {
      this.initMap(); //render the map
    }
  }

   initMap = () => {
    //const container = document.getElementById('map');
    new window.google.maps.Map(this.container, {
      center: {lat: 33.448376, lng: -112.074036}, //Phoenix
      zoom: 13
    })
  }
/*var map;

     // TODO: Complete the following function to initialize the map
     function initMap() {
       // TODO: use a constructor to create a new map JS object. You can use the coordinates
       // we used, 40.7413549, -73.99802439999996 or your own!
       map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7413549, lng: -73.99802439999996},
        zoom: 13
       });
     } */

  render() {

		return(                      
            <div id="map" style={{ width: '100%',  height: 600 }} ref={div => {this.container = div}}>
            </div>                     
                 
			)
	}
}

export default Map