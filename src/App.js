import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Map from './components/Map'

class App extends Component {
/*state = {
    mapIsReady: false,
    query: '',
    zoom: 15,
    map: {},
    defaultLocation: {
      title: 'Seattle',
      location: { lat: 47.6062, lng: -122.3321 },
      venudeID: ''
    }
  };*/
  // Load the Google Maps API
//var map;

     // TODO: Complete the following function to initialize the map
     /*function initMap() {
       // TODO: use a constructor to create a new map JS object. You can use the coordinates
       // we used, 40.7413549, -73.99802439999996 or your own!
       map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7413549, lng: -73.99802439999996},
        zoom: 13
       });
     }*/


  render() {
    return (
      <div className="App">
        <List />
        <Map />
      </div>
    );
  }
}

export default App;
