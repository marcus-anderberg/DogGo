import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 44.97,
      lng: -93.26,
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCaAlJHaWUxmLBpBtzurrgceKqe17d7vVY'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={44.9778}
            lng={-93.2650}
            // text={'Dog'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;