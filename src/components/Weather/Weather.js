import React, { Component } from "react";
import { connect } from "react-redux";
import WeatherTileList from './WeatherTileList';
import fetchJsonp from "fetch-jsonp";


class Weather extends Component {
  state = {
    weatherByDay: []
  };

  // componentDidMount() {
  //   this.props.dispatch("GET_LOCATION");

  // }

  componentDidMount() {
    if (this.props.weatherReducer !== {}) {
      const apiUrl =
        "https://api.darksky.net/forecast/" +
        "b21fd5ba8293e8d03f925a5080890bcb/" +
        this.props.weatherReducer.lat +
        "," +
        this.props.weatherReducer.lng +
        "?exclude=hourly,minutely,currently";
      fetchJsonp(apiUrl)
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
  }

  render() {
    return (
      <div className="Weather">
        {this.state.weatherByDay !== 0 && (
          <WeatherTileList weather={this.state.weatherByDay} />
        )}
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapReduxStateToProps)(Weather);
