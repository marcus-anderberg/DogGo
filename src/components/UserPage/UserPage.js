import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';





const UserPage = (props) => (

  <>
    <div>
      <h1 id="welcome">
        Hi {props.user.username}!
      </h1>
       Your last walk was on props.dogWalkReducer.walk_date <br/>
      <br />
      <Link to="/walk">
        <h2>Go Walking</h2> <br />
      </Link>


    </div>
    <iframe src="https://i.giphy.com/media/sHytgXD2vlNVC/giphy.webp" width="300" height="376" frameBorder="0"></iframe>
  </>
);


const mapStateToProps = state => ({
  user: state.user,
});


export default connect(mapStateToProps)(UserPage);
