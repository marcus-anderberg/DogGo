import React, { Component } from 'react';


class Doge extends Component {
    state = {
        on: false
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }


    render() {
     
        return (
            <div>
                <img onClick={this.toggle} src="../images/doge2.png" className="doge" alt="doge" />
                
                {this.state.on && <img src="../images/cool_doge.png" alt="cool doge"/> }
                
            </div>
        );
    }
}

export default Doge;