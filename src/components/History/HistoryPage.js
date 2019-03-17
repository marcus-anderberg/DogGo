import React, { Component } from 'react';
import { connect } from 'react-redux';




// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class History extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_WALKS' })
    }

    // handleClick = id => () => {
    //     console.log('id', id);

    //     this.props.dispatch({ type: 'DELETE_ITEM', payload: id })
    // }

    render() {
        console.log(this.props.dogWalkReducer.data);


        return (
            <>
                <ul>
                    <li>
                        {JSON.stringify(this.props.dogWalkReducer.data)}
                        {/* {this.props.dogWalkReducer.map((dogs) => <li key={dogs.id}> {dogs.name} / {dogs.time_elapsed} / <button onClick={this.handleClick(dogs.id)}>Delete</button> </li>)} */}
                    </li>
                </ul>

            </>
        )
    };
}

const mapReduxStateToProps = reduxState => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(History);