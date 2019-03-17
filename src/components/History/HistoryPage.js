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

    handleClick = id => () => {
        console.log('id', id);

        this.props.dispatch({ type: 'DELETE_ITEM', payload: id })
    }

    doggieList() {

        if (this.props.dogWalkReducer && this.props.dogWalkReducer.length > 0) {

            return this.props.dogWalkReducer.map(results =>
                <tr key={results.id}>
                    <td> {results.walk_date} </td>
                    <td> {results.time_elapsed} </td>
                    <td>{results.ones}</td>
                    <td>{results.twos}</td>
                    <td><button onClick={() => this.deleteButton(results.id)} className="deleteButton">Delete</button></td>

                </tr>
            )
        }
    }

    render() {
        console.log(this.props.dogWalkReducer);


        return (

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Ones</th>
                            <th>Twos</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.doggieList()}
                    </tbody>

                </table>



            </div>

        )
    };
}

const mapReduxStateToProps = reduxState => {
    return reduxState;
};

export default connect(mapReduxStateToProps)(History);