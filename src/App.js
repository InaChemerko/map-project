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

  initMap = () => {
   
   //create a map
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.448376, lng: -112.074036 },
        zoom: 13
      }) 


//create an infowindow
let infowindow = new window.google.maps.InfoWindow()

//display dinamic markers
this.state.venues.map(myVenue => {

  let contentString = `${myVenue.venue.name}`;

//create an infowindow
/*let infowindow = new window.google.maps.InfoWindow({
          content: contentString
        });*/


//create a marker
  let marker = new window.google.maps.Marker({
    position: { lat: myVenue.venue.location.lat, lng: myVenue.venue.location.lng },
    map: this.map,
    //title: myVenue.venue.name
  })

//click on a marker
marker.addListener('click', function() {

  //change the content
  infowindow.setContent(contentString)

  //open an infowindow
          infowindow.open(this.map, marker);
        });


})
/*let marker = new window.google.maps.Marker({
    position: { lat: 33.448376, lng: -112.074036 },
    map: this.map,
    title: 'Hello World!'
  }) */   
  }; 



  loadMap = (url) => {
  //let container = window.document.getElementsByTagName('script')[0]
  let script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  //container.parentNode.insertBefore(script, container)
  document.body.appendChild(script)
}




/*updateQuery = query => {
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      this.setState(state => ({
        venues: state.venues.filter(myVenue =>
          match.test(myVenue.venue.name)
        ),
        zoom: 15,
        query: query,
        //setEvents: false
      }));
    } else {
      this.setState({
        venues: this.state.venues,
        query: ''
      });
    }
  };*/





  /*componentDidMount(){
    this.renderMap()
    window.initMap = this.initMap
  }




renderMap = () => {
  this.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBghIJChiunCVZ3w9qLgAQOcYh9NvSyUIY&v=3&callback=initMap")
}

  initMap = () => {
   
      const map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.448376, lng: -112.074036 },
        zoom: 13
      }) 
    
  }; 



  loadScript = (url) => {
  let index = window.document.getElementsByTagName('script')[0]
  let script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}
*/
  render() {
    return (
      <div className="App">
        <List state={ this.state } venues={this.state.venues} />
        <Map state={ this.state } />        
      </div>
      
    );
  }

}



export default App;

