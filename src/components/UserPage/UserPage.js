import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';





class UserPage extends Component {

  componentDidMount = () => {
    this.props.dispatch({ type: 'GET_WALKS' })
  }

  doggoList() {

    if (this.props.dogWalkReducer.length > 1) {
      return this.props.dogWalkReducer[0].walk_date
    }
  }



  render() {
    console.log(this.props.dogWalkReducer);
    
    return (
      <>
        <div>
          <h1 id="welcome">
            Hi {this.props.user.username}!
          </h1>
            <h3> Your last walk was on {this.doggoList()}.</h3> 
          <br />
          <Link to="/walk">
            <h2>Go Walking</h2> <br />
          </Link>


        </div>
        <iframe src="https://i.giphy.com/media/sHytgXD2vlNVC/giphy.webp" width="300" height="376" frameBorder="0" title="deal with it doge" ></iframe>
      </>
    )
  }


}


const mapReduxStateToProps = reduxState => {
  return reduxState;
};


export default connect(mapReduxStateToProps)(UserPage);
