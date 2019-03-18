import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';


class Timer extends Component {



    render() {
        const { classes } = this.props;
        return (
            <div className="timer">
                <Fab color="primary" aria-label="Add" onClick={this.handleStartClick} className={classes.fab}>
                    Go
                </Fab>
                <Fab color="primary" size="large" aria-label="Add" onClick={this.handleStopClick} className={classes.fab}>
                    Stop
                </Fab>
                <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
            </div>
        );
    }
}

export default Timer;