import React from 'react';
// import GoogleMapReact from 'google-maps-react';
// import Geocode from "react-geocode";
import { GoogleApiWrapper, Map } from "google-maps-react";


// const AnyReactComponent = ({ text }) => <div>{text}</div>;





// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 44.97,
//       lng: -93.26,
//     },
//     zoom: 12
//   };




  
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div className="map">
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyDf4NU_rGOmsUaQj0HVAQsV2Uxb0xieWY0'}}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={44.9778}
//             lng={-93.2650}
           
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;

export class MapContainer extends React.Component {
  state = { userLocation: { lat: 32, lng: 32 }, loading: true };

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return null;
    }

    return <Map google={google} initialCenter={userLocation} zoom={15} />;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDf4NU_rGOmsUaQj0HVAQsV2Uxb0xieWY0"
})(MapContainer);