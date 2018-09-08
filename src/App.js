import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Map from './components/Map'
import axios from 'axios'

class App extends Component {
 state = {
  venues: [],
  map: {},
    locations: [
      {
        title: 'Pomo Pizzeria Phoenix',
        location: { lat: 33.4560, lng: -112.0724 }        
      },
      {
        title: 'Pullano’s Pizza',
        location: { lat: 33.6122, lng: -112.1691 }
      },
      {
        title: 'Pizzeria Bianco',
        location: { lat: 33.4492, lng: -112.0656 }
      },
      {
        title: 'Cibo',
        location: { lat: 33.4550, lng: -112.0799 }
        
      },
      {
        title: 'Federal Pizza',
        location: { lat: 33.5134, lng: -112.0741 }
      }     
    ],
    markers: []
  }
//&callback=initMap
componentDidMount(){
  this.getVenues()
    this.loadMap("https://maps.googleapis.com/maps/api/js?key=AIzaSyBghIJChiunCVZ3w9qLgAQOcYh9NvSyUIY&v=3&callback=initMap")
    
    window.initMap = this.initMap
    //this.initMap()
  }

//renderMap = () => {
  //this.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBghIJChiunCVZ3w9qLgAQOcYh9NvSyUIY&v=3&callback=initMap")
//}
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
    })
    console.log(response)
  })
  .catch(error => {
    console.log("error " + error)
  })
}

  initMap = () => {
   
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.448376, lng: -112.074036 },
        zoom: 13
      }) 
    
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
        <List />
        <Map state={ this.state } />        
      </div>
      
    );
  }

}



export default App;

//making http requests
//https://medium.com/@thejasonfile/fetch-vs-axios-js-for-making-http-requests-2b261cdd3af5
//https://flaviocopes.com/axios/

//Get Venue Recommendations

//https://developer.foursquare.com/docs/api/venues/explore