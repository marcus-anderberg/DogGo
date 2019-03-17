import React, { Component } from 'react';



class Bathroom extends Component {



    render() {
        return (
            <div className="bathroom">
                <div className="left">
                    <button className=".button" onClick={this.props.handlePlus1}> <img className="icon" src="../images/hydrant.png" alt="" /></button>
                    <h2>{this.props.countOne}</h2>
                </div>
                <div className="right">
                    <button className=".button" onClick={this.props.handlePlus2}><img className="icon" src="../images/poop.png" alt="" /></button>
                    <h2>{this.props.countTwo}</h2> <br />
                </div>
                
            </div>
        );
    }
}

export default Bathroom;