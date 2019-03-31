import React, { Component } from 'react';


class WeatherTileList extends Component {

  render() {
    return (
      <div className="flexContainer">
        {this.props.weather.map(this.renderWeatherTile)}
      </div>
    );
  }

  renderWeatherTile({summary, temperatureMax, time}) {
    return (
      <div key={time} className="weatherTile">
        <p className="date">{new Date(time * 1000).toDateString()}</p>
        <p>{summary}</p>
        <p className="temperatureLabel">High:</p>
        <p className="temperature"><strong>{temperatureMax}</strong> </p>
      </div>
      )
    }
}

export default WeatherTileList;
