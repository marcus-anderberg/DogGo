import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [<img src="../images/message.png" className="message" alt="don't forget poop bags" />, <img src="../images/message_wow.png" className="message" alt="wow" />, <img src="../images/message_treat.png" className="message" alt="treat plz" />,<img src="../images/message_goodboy.png" className="message" alt="good boy" />,<img src="../images/message_suchready.png" className="message" alt="such ready" />, ''],
            selectedNote: null,
            clicked: false
        }
    }

    handleClick = () => {
        this.setState({
            clicked: true,
            selectedMessage: this.state.messages[Math.floor(Math.random() *
                this.state.messages.length)]
        })
    }

    render() {
        return (
            <div className="Legs">
                <img onClick={this.handleClick} src="../images/legs.png" className="legs"alt="doge" />
                <span>{this.state.clicked && this.state.selectedMessage}</span>
            </div>
        )
    }
}