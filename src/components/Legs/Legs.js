import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [<img src="../images/message.png" className="message" alt="don't forget poop bags" />, <img src="../images/message_muchready.png" className="message" alt="much ready" />, <img src="../images/message_wow.png" className="message" alt="wow" />, <img src="../images/message_treat.png" className="message" alt="treat plz" />],
            selectedNote: null,
            clicked: false
        }
    }

    handleClick = () => {
        this.setState({
            clicked: true,
            selectedNote: this.state.messages[Math.floor(Math.random() *
                this.state.messages.length)]
        })
    }

    render() {
        return (
            <div className="App">
                <img onClick={this.handleClick} src="../images/legs.png" className="legs"alt="doge" />
                <span>{this.state.clicked && this.state.selectedNote}</span>
            </div>
        )
    }
}