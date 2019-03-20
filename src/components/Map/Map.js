import React, {Component} from 'react';







class Map extends Component {

  componentDidMount() {
    this.renderMap()
  }

  renderMap = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyDf4NU_rGOmsUaQj0HVAQsV2Uxb0xieWY0&callback=initMap" )
    window.initMap = this.initMap
  }

  

  initMap = () => {
    var myLatLng = { lat: 44.97, lng: -93.26 };
    var map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: myLatLng
    });
  

    let marker = new window.google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  }


 

 render() {
  return (
    <main>
      <div id="map"></div>
    </main>
  )
 }
}



export default Map;




function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)

}