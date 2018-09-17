import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Map from './components/Map'
import axios from 'axios'
import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import iconMarkerRed from './red-dot.png';
import iconMarkerBlue from './blue-dot.png';

class App extends Component {
 state = {
  venues: [],
  map: {},
  markers: [],
  infoWindow: [],
  query:''
    
  }
//&callback=initMap
componentDidMount(){
  this.getVenues()
    //this.loadMap("https://maps.googleapis.com/maps/api/js?key=AIzaSyBghIJChiunCVZ3w9qLgAQOcYh9NvSyUIY&v=3&callback=initMap")
    
    //window.initMap = this.initMap
    
  }


renderMap = () => {
  this.loadMap("https://maps.googleapis.com/maps/api/js?key=AIzaSyBghIJChiunCVZ3w9qLgAQOcYh9NvSyUIY&v=3&callback=initMap")
window.initMap = this.initMap

}

getVenues = () => {
  const endPoint = "https://api.foursquare.com/v2/venues/explore?"
  const parameters = {
    client_id: "T2NFWF0KPILX42AMYNIGSTDCVTOPVVCVRLVLMZHSATQ4BTMV",
    client_secret: "0QHIFNP3GJO25MFWCHKFXCMF1DOZYXSY4LEKYOBGXQNEO24L",
    query: "food",
    near: "Phoenix",
    v: "20182507"
  }

  axios.get(endPoint + new URLSearchParams(parameters))
  .then(response => {
    this.setState({
      venues: response.data.response.groups[0].items
    }, this.renderMap())
    //console.log(response)
  })
  .catch(error => {
    console.log("error " + error)
  })
}


openInfoWindow = (marker, place) => {
  let contentString = `<div id="window" tabindex="1">
  <div class="header">${place.venue.name}</div>
  <div class="content">${place.venue.location.formattedAddress}</div>
  </div>`;
    this.state.infoWindow.setContent(contentString);
    this.state.infoWindow.open( this.state.map, marker);     
  }

  initMap = () => {
   
   //create a map
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.448376, lng: -112.074036 },
        zoom: 13
      }) 

      //let myMap = this.map

this.setState({ map: this.map })
//create an infowindow
let infoWindow = new window.google.maps.InfoWindow()
this.setState({ infoWindow })

//display dinamic markers
let markers = this.state.venues.map(myVenue => {

  let contentString = `<div id="window" tabindex="1">
  <div class="header">${myVenue.venue.name}</div>
  <div class="content">${myVenue.venue.location.formattedAddress}</div>
  </div>`;

 
//create a marker
  let marker = new window.google.maps.Marker({
    position: { lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng },
    map: this.map,
    title: myVenue.venue.name,
    icon: iconMarkerRed,
    id: myVenue.venue.name
  })

 

  
marker.addListener('mouseover', function() {
        marker.setIcon(iconMarkerBlue)
        marker.setAnimation(window.google.maps.Animation.BOUNCE)        
      })


  marker.addListener('mouseout', function() {
    marker.setIcon(iconMarkerRed)
      marker.setAnimation(null);
      })

  marker.addListener('click', function() {
//this.openInfoWindow(marker, contentString)
for (let i = 0; i < markers.length; i++) {
          markers[i].setAnimation(null);
        }
  //change the content
  infoWindow.setContent(contentString)

  //open an infowindow
          infoWindow.open(this.map, marker);
        })
return marker;
})

  this.setState({ markers: markers }) 
  }; 
  
updateQuery = (query) => {
    this.setState({ query })
    this.setAppropriateMarker(query)    
  }

setAppropriateMarker =(query) => {
  if (query.trim() === "") {
    this.state.markers.forEach(marker => marker.setVisible(true))
    return true;
  } else {
    let newVenues = this.state.venues.filter(myVenue => {
          return myVenue.venue.name.toLowerCase().indexOf(query.toLowerCase()) > -1
      })
    //newVenues.forEach(myVenue => this.state.markers.filter(marker => marker.title === myVenue.venue.name).map(marker => marker.setVisible(true)))
    newVenues.forEach(myVenue => this.state.markers.filter(marker => marker.title !== myVenue.venue.name).map(marker => marker.setVisible(false)))
    newVenues.forEach(myVenue => this.state.markers.filter(marker => marker.title === myVenue.venue.name).map(marker => marker.setVisible(true)))
  }
  }

  

 loadMap = (url) => {
  let script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  document.body.appendChild(script)
}

  
  render() {
    //console.log("tt", this.state)
    //console.log("markers", this.state.markers)
    //console.log("info", this.state.infoWindow)
    //console.log("info", this.state.map)
    return (
      <div className="App">
        <List state={ this.state } venues={this.state.venues} query={this.state.query} markers={this.state.markers} updateQuery={ this.updateQuery } openInfoWindow = {this.openInfoWindow} infoWindow={this.state.infoWindow} map={this.state.map}/>
        <Map state={ this.state } />        
      </div>
      
    );
  }

}



export default App;

