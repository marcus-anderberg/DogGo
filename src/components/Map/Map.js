import React, { Component } from 'react';
import { GoogleApiWrapper, Map } from "google-maps-react";

class MapContainer extends Component {


  state = {
    userLocation: {
      lat: 45,
      lng: -45,
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

    return <Map google={google} initialCenter={userLocation} zoom={14} />;

  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDf4NU_rGOmsUaQj0HVAQsV2Uxb0xieWY0"
})(MapContainer);