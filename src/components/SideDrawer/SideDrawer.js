import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
        <Link to="/home">
          Home
        </Link>
        </li>
        <li>
          <Link to="/walk">
            Walk
          </Link>
        </li>
        <li>
          <Link to="/history">
             History
          </Link>
        </li>
        <li>
          <Link to="/map">
           Map
           </Link>
        </li>
        <li>
          <LogOutButton className="logOutButton" />
        </li>
        <li>
          <img src="../images/doge_icon.png" className="sideBarDoge" alt="cool doge" />
        </li>
     
      </ul>
    </nav>
  );
};

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(sideDrawer);


