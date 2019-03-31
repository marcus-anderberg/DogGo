import React, { Component } from "react";
import WeatherTileList from './WeatherTileList';
import fetchJsonp from "fetch-jsonp";


class Weather extends Component {
  state = {
    weatherByDay: []
  };

  componentDidMount() {
    fetchJsonp(
      "https://api.darksky.net/forecast/" +
        "/44.6062,-93.3321?exclude=hourly,minutely,currently"
    )
      .then(function(response) {
        return response.json();
      })
      .then(
        function(json) {
          this.setState({ 
              weatherByDay: json.daily.data 
            });
        }.bind(this)
      )
      .catch(function(ex) {
        console.log("parsing failed", ex);
      });
  }

  render() {
    return (
      <div className="Weather">
     
        <WeatherTileList weather={this.state.weatherByDay} />
   
      </div>
    );
  }
}

export default Weather;
