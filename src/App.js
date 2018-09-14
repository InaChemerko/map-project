import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Map from './components/Map'
import axios from 'axios'
import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'

class App extends Component {
 state = {
  venues: [],
  map: {},
  markers: [],
  query:''
    
  }
//&callback=initMap
componentDidMount(){
  this.getVenues()
    //this.loadMap("https://maps.googleapis.com/maps/api/js?key=AIzaSyBghIJChiunCVZ3w9qLgAQOcYh9NvSyUIY&v=3&callback=initMap")
    
    //window.initMap = this.initMap
    
  }

/*updateQuery = (query) => {
    this.setState({ query })    
  }*/

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

  initMap = () => {
   
   //create a map
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.448376, lng: -112.074036 },
        zoom: 13
      }) 


//create an infowindow
let infowindow = new window.google.maps.InfoWindow()

//display dinamic markers
let markers = this.state.venues.map(myVenue => {

  let contentString = `${myVenue.venue.name}`;

//create an infowindow
/*let infowindow = new window.google.maps.InfoWindow({
          content: contentString
        });*/


//create a marker
  let marker = new window.google.maps.Marker({
    position: { lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng },
    map: this.map,
    title: myVenue.venue.name
    //id: myVenue.venue.name
  })

//click on a marker
marker.addListener('click', function() {

  //change the content
  infowindow.setContent(contentString)

  //open an infowindow
          infowindow.open(this.map, marker);
        });

return marker;
})
/*let marker = new window.google.maps.Marker({
    position: { lat: 33.448376, lng: -112.074036 },
    map: this.map,
    title: 'Hello World!'
  }) */  

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

//open infowindow when click on item of list
  handleOnClick = ()=> {

  }


 loadMap = (url) => {
  let script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  document.body.appendChild(script)
}


  render() {
    console.log("tt", this.state)
    console.log("markers", this.state.markers)
    return (
      <div className="App">
        <List state={ this.state } venues={this.state.venues} query={this.state.query} markers={this.state.markers} updateQuery={ this.updateQuery }/>
        <Map state={ this.state } />        
      </div>
      
    );
  }

}



export default App;

