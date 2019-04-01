import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';





class UserPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_WALKS' });
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        this.props.dispatch({type : 'SET_LOCATION', payload : {lat : latitude, lng: longitude}})
        
      }
    );
  }

  doggoList() {

    if (this.props.dogWalkReducer.length > 0) {
      return 'Your last walk was on ' + this.props.dogWalkReducer[0].walk_date + '.'
    }
  }



  render() {
    // console.log(this.props.dogWalkReducer);
    
    return (
      <>
        <div>
          <h1 id="welcome">
            Hi {this.props.user.username}!
          </h1>
            <h3> {this.doggoList()}</h3> 
          <br />
          <Link to="/walk">
            <h2>Go Walking</h2> <br />
          </Link>


        </div>
        <img src="../images/ezgif.gif" className="dealWithIt" alt="deal with it doge" />
      </>
    )
  }


}


const mapReduxStateToProps = reduxState => {
  return reduxState;
};


export default connect(mapReduxStateToProps)(UserPage);
