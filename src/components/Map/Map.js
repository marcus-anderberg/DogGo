import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";

const AnyReactComponent = ({ text }) => <div>{text}</div>;





class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.97,
      lng: -93.26,
    },
    zoom: 12
  };




  
  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDf4NU_rGOmsUaQj0HVAQsV2Uxb0xieWY0'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={44.9778}
            lng={-93.2650}
           
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;

