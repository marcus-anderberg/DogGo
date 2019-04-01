import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles';
import Submit from '../Submit/Submit'
import Bathroom from '../Bathroom/Bathroom'
import Legs from '../Legs/Legs'



const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#aed581',
      main: '#689f38',
      dark: '#33691e',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: [
      'Roboto Mono',
      'sans-serif',
    ].join(','),
    fontSize: '18',
    useNextVariants: true,
  },
});

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
});

class App extends Component {
  state = {
    countOne: 0,
    countTwo: 0,
    secondsElapsed: 0,
  }

  componentDidMount = () => {
    this.props.dispatch({type: 'GET_WALKS'})
  }

  handlePlus1 = () => {
    console.log('clicked!');
    this.setState({
      countOne: this.state.countOne + 1,
    })
  }

  handlePlus2 = () => {
    console.log('clicked!');
    this.setState({
      countTwo: this.state.countTwo + 1,
    })
  }

  handleSubmit = () => {
    console.log('submit!');
    this.props.dispatch({ type: 'ADD_WALK', payload: this.state });
    this.setState({
      countOne: 0,
      countTwo: 0,
      secondsElapsed: 0,
    })
    clearInterval(this.incrementer);
  }

 handleNextClick = () => {
   this.props.history.push('/history');

 }

  handleStartClick = () => {
    this.incrementer = setInterval(() => {
      this.setState({
        secondsElapsed: (this.state.secondsElapsed + 1)
      })
    }, 1000)
  }


  handleStopClick = () => {
    clearInterval(this.incrementer);
  }


  getSeconds = () => {
    return ('0' + this.state.secondsElapsed % 60).slice(-2);
  }

  getMinutes = () => {
    return Math.floor(this.state.secondsElapsed / 60);
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
    

        <div className="Walk">
          <Fab
            style={{
              maxWidth: "75px",
              maxHeight: "75px",
              minWidth: "75px",
              minHeight: "75px"
            }}
            color="primary"
            aria-label="Add"
            onClick={this.handleStartClick}
            className={classes.fab}
          >
            Go
          </Fab>
          <Fab
            style={{
              maxWidth: "75px",
              maxHeight: "75px",
              minWidth: "75px",
              minHeight: "75px"
            }}
            color="primary"
            size="large"
            aria-label="Add"
            onClick={this.handleStopClick}
            className={classes.fab}
          >
            Stop
          </Fab>
          <h1>
            {this.getMinutes()}:{this.getSeconds()}
          </h1>

          <Bathroom
            countOne={this.state.countOne}
            countTwo={this.state.countTwo}
            handlePlus1={this.handlePlus1}
            handlePlus2={this.handlePlus2}
          />
          <Submit submit={this.handleSubmit} />
          {/*           
          <Router>
            <div>
            <Route exact path="/" component={App} />
            <Route path="/History" component={History} />
            </div>
          </Router> */}
          <div className="space" />
        </div>
      </MuiThemeProvider>
    );
  }
}



const mapReduxToProps = (reduxState) => {
  return reduxState;
};

export default withStyles(styles)(connect(mapReduxToProps)(App));