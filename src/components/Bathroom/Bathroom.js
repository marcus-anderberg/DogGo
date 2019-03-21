import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';


class Bathroom extends Component {



    render() {

        return (
            <div className="container">
                <div className="bathroom">
                <Fab color="primary" size="medium" aria-label="Add" onClick={this.props.handlePlus1}>
                    <img className="icon" src="../images/hydrant.png" alt="" />
                </Fab>
              
                <h2>{this.props.countOne}</h2>
                </div>
                <div className="bathroom">
                <Fab color="primary" size="medium" aria-label="Add" onClick={this.props.handlePlus2}>
                    <img className="icon" src="../images/poop.png" alt="" />
                </Fab>
                <h2>{this.props.countTwo}</h2> <br />
                </div>
            </div>
        );
    }
}

export default Bathroom;