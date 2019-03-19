import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';




// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class History extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_WALKS' })
    }

    deleteButton = id => () => {
        console.log('id:', id);
        this.props.dispatch({ type: 'DELETE_ITEM', payload: id })
    }

    doggoList() {
        if (this.props.dogWalkReducer && this.props.dogWalkReducer.length > 0) {
            
            return this.props.dogWalkReducer.map((doggo) =>
                <tr key={doggo.id}>
                    <td> {doggo.walk_date} </td>
                    <td> {doggo.time_elapsed} </td>
                    <td>{doggo.ones}</td>
                    <td>{doggo.twos}</td>
                   
                    <td><Button  onClick={this.deleteButton(doggo.id)}
                    
                    className="deleteButton">Delete</Button></td>
                
                </tr>
            )
        }
    }

    render() {
        console.log(this.props.dogWalkReducer.walk_date);


        return (

            <div>
                <table>
                    <thead>
                        <tr>
                            <th> <img className="icon" src="../images/calendar.png" alt="" /></th>
                            <th> <img className="icon" src="../images/time.png" alt="" /></th>
                            <th><img className="icon" src="../images/hydrant.png" alt="" /></th>
                            <th><img className="icon" src="../images/poop.png" alt="" /></th>
                            <th><img className="icon" src="../images/delete.png" alt="" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.doggoList()}
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