import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div className="toolbar__toggle-button">
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      {/* <div className="toolbar__logo"><a href="/">THE LOGO</a></div> */}
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li> <Link className="nav-link" to="/home">
            Home</Link>
          </li>
          <li>
            <Link className="nav-link" to="/walk">
            Walk
           </Link>
          </li>
          <li>
            <Link className="nav-link" to="/history">
            History
           </Link>
          </li>
          <li>
            <Link className="nav-link" to="/map">
           Map
           </Link>
          </li>
          <li>
            <LogOutButton className="nav-link" />
            </li>

          
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;