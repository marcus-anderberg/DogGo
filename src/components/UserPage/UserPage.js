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

      <br />
      <Link to="/walk">
        <h2>Go Walking</h2> <br />
      </Link>


    </div>
    <iframe src="https://i.giphy.com/media/sHytgXD2vlNVC/giphy.webp" width="400" height="376" frameBorder="0"></iframe><p></p>
  </>
);


const mapStateToProps = state => ({
  user: state.user,
});


export default connect(mapStateToProps)(UserPage);
