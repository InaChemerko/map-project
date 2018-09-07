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
// Style the markers a bit. This will be our listing marker icon.
        
//let defaultIcon = makeMarkerIcon('0091ff');

        // Create a "highlighted location" marker color for when the user
        // mouses over the marker.
        //let highlightedIcon = makeMarkerIcon('FFFF24');

        // The following group uses the location array to create an array of markers on initialize.
        /*initMarker = () => {
    
  


        for (let i = 0; i < this.props.locations.length; i++) {
          // Get the position from the location array.
          let position = this.props.locations[i].location;
          let title = this.props.locations[i].title;
          // Create a marker per location, and put into markers array.
          let marker = new window.google.maps.Marker({
            position: position,
            title: title,
            animation: window.google.maps.Animation.DROP,
            icon: this.makeMarkerIcon('0091ff') //defaultIcon,
            //idMarker: i
          });
          // Push the marker to our array of markers.
          this.props.markers.push(marker);
          // Create an onclick event to open the large infowindow at each marker.
          //marker.addListener('click', function() {
            //populateInfoWindow(this, largeInfowindow);
          //});
          // Two event listeners - one for mouseover, one for mouseout,
          // to change the colors back and forth.
          marker.addListener('mouseover', function() {
            this.setIcon (this.makeMarkerIcon('FFFF24'));//(highlightedIcon);
          });
          marker.addListener('mouseout', function() {
            this.setIcon(this.makeMarkerIcon('0091ff'));//(defaultIcon);
          });
        }
      }

makeMarkerIcon = (markerColor) => {
  var markerImage = new window.google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new window.google.maps.Size(21, 34),
          new window.google.maps.Point(0, 0),
          new window.google.maps.Point(10, 34),
          new window.google.maps.Size(21,34));
        return markerImage;
}
/*function makeMarkerIcon(markerColor) {
        var markerImage = new window.google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new window.google.maps.Size(21, 34),
          new window.google.maps.Point(0, 0),
          new window.google.maps.Point(10, 34),
          new window.google.maps.Size(21,34));
        return markerImage;
      } */


  render() {
  

		return(                      
            <div id="map" style={{ width: '100%',  height: 600 }} ref={div => {this.container = div}}>
            </div>                     
                 
			)
	}
}

export default Map