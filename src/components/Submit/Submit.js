import React, { Component } from 'react';


class Bathroom extends Component {



    render() {
        return (
            <div >
                <button onClick={this.props.submit}>Submit</button><br />

            </div>
        );
    }
}

export default Bathroom;