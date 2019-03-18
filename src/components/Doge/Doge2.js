import React, { Component } from 'react'

export default class Doge2 extends Component {
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

          {this.state.on && <h2>Toggle Me </h2>}
              <button onClick={this.toggle}>Show/Hide</button>
          
        
      </div>
    )
  }
}
