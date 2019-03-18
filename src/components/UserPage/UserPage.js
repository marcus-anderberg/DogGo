import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Doge from '../Doge/Doge'




const UserPage = (props) => (

  <>
    <div>
      <h1 id="welcome">
        Hi {props.user.username}!
    </h1>
      <Link to="/walk">
        <p>Go Walking</p>
      </Link>
    <Doge/>

    </div>
  
  </>
);


const mapStateToProps = state => ({
  user: state.user,
});


export default connect(mapStateToProps)(UserPage);
