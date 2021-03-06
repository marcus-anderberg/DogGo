import React, { Component } from 'react';
import { GoogleApiWrapper, Map , Marker } from "google-maps-react";

class MapContainer extends Component {


  state = {
    userLocation: {
      lat: 44.9778,
      lng: -93.2650,
    },
    loading: true
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { 
            lat: latitude, 
            lng: longitude, 
          },
          loading: false,
        });
        new window.google.maps.Marker({
          position: { 
            lat: latitude, 
            lng: longitude ,
          },
          map: Map,
        });
      },
      () => {
        this.setState({ 
          loading: false 
        });
      }
    );
  }

  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }

    return (
      <Map google={google} initialCenter={userLocation} zoom={16}>
        <Marker
          name={"Your Location"}
          position={{
            lat: this.state.userLocation.lat,
            lng: this.state.userLocation.lng
          }}
          icon={{
            url:
              "../images/marker.png",
              scaledSize: new google.maps.Size(34,64)
          }}
        />
      </Map>
    );

  }
}



export default GoogleApiWrapper({
  apiKey: "AIzaSyA8i6_7n7we7V-mKltoBbuM9lbIqgvxxY0"
})(MapContainer);