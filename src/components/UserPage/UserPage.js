import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import LogOutButton from '../LogOutButton/LogOutButton';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`





const UserPage = (props) => (

  <>
    <div>
      <h1 id="welcome">
        Hi {props.user.username}!
    </h1>
      {/* <p>Your ID is: {props.user.id}</p> */}
      {/* <LogOutButton className="log-in" /> */}
      {/* <Link to="/walk">
       <img onClick={() => console.log('wooooof')} src="../images/doge2.png" className="doge" alt="" /> 
     </Link> */}

      <img onClick={() => console.log('woof')}src="../images/doge2.png" className="doge" alt="" />


    </div>
    <Link to="/walk">
    <p>Go Walking</p>
    </Link>
  </>
);

// Instead of taking everything from state, we just want the user info.
// if you wanted you could write this code like this:
// const mapStateToProps = ({user}) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);
