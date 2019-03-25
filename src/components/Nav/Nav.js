import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';

// const Nav = (props) => (
//   <div className="nav">
//     <Link to="/home">
//       {/* <h2 className="nav-title">Prime Solo Project</h2> */}
//     </Link>
//     <div className="nav-right">
//       <Link className="nav-link" to="/home">
//         {/* Show this link if they are logged in or not,
//         but call this link 'Home' if they are logged in,
//         and call this link 'Login / Register' if they are not */}
//         {/* {props.user.id ? 'Home' : 'Login / Register'} */}

//       </Link>
//       {/* Show the link to the info page and the logout button if the user is logged in */}
      
//       {props.user.id && (
//         <>
        
//           <Link className="nav-link" to="/home">
//            Home
//           </Link>
//           <Link className="nav-link" to="/walk">
//             Walk
//           </Link>

//           <Link className="nav-link" to="/history">
//             History
//            </Link>
//           <Link className="nav-link" to="/map">
//             Map
//            </Link>
//           <LogOutButton className="nav-link" />
//         </>
//       )}


//     </div>
//   </div>
// );

// // Instead of taking everything from state, we just want the user
// // object to determine if they are logged in
// // if they are logged in, we show them a few more links 
// // if you wanted you could write this code like this:
// // const mapStateToProps = ({ user }) => ({ user });
// const mapStateToProps = state => ({
//   user: state.user,
// });

// export default connect(mapStateToProps)(Nav);

class Nav extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div style={{ height: '100%' }}>
        {this.props.user.id && (
        <>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
         </>
      )}
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
        <main style={{ marginTop: '64px' }}>

        </main>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);