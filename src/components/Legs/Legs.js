import React, { Component } from 'react';


class Legs extends Component {
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
                <img onClick={this.toggle} src="../images/legs.png" alt="doge" />

                {this.state.on && <img src="../images/message.png" className="message" alt="don't forget poop bags"/> }
               
            </div>
        );
    }
}

export default Legs;