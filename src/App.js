import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Map from './components/Map'

class App extends Component {
 state = {
  
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

/*componentDidMount(){
    if(!window.google) {
      console.error("Error: not load yet"); //Google API not load yet
    } else {
      this.initMap(); //render the map
      
    }
  }*/
/*componentDidMount() {
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBghIJChiunCVZ3w9qLgAQOcYh9NvSyUIY&v=3`;
    //script.setAttribute('onerror', `googleError()`);
    script.addEventListener('load', () => {
      /*this.setState({
        mapIsReady: true,
        infoWindow: new window.google.maps.InfoWindow({
          maxWidth: 350
        }),
        animation: window.google.maps.Animation.DROP,
        initialLocations: this.state.locations
      });
    });*/
    /*document.body.appendChild(script);
//this.initMap();
  })
}

  // Once the API has loaded initialize the map
  componentDidUpdate() {
    this.initMap();
  }*/

  /*
    Initialize the Google Map and center it on our location
    Setting Google Maps up in React 
  */
  /*initMap = () => {
   
      this.map = new window.google.maps.Map(document.getElementById('map'), {
        center: { lat: 33.448376, lng: -112.074036 },
        zoom: 13//,
        //mapTypeId: 'roadmap'
      });   //this.addMarkers(this.map);
    
  };*/


/*componentDidMount(){
    if(!window.google) {
      console.error("Error: not load yet"); //Google API not load yet
    } else {
      this.initMap(); //render the map
      this.initMarker();
    }
  }*/

   /*initMap = () => {
    //const container = document.getElementById('map');
    new window.google.maps.Map(this.container, {
      center: {lat: 33.448376, lng: -112.074036}, //Phoenix
      zoom: 13
    })
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
