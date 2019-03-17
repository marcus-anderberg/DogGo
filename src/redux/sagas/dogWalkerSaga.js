import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* addWalk(action) {
    try {
        yield axios.post('api/dog', action.payload)
    
    } catch (error) {
        console.log('Error with user registration:', error);
        
    }
}

function* getWalks() {
    try {
       let dogWalkInfo = yield axios.get('api/dog')
        yield put({type: 'SET_WALKS', payload: dogWalkInfo.data})
    } catch (error) {
        console.log('Error with user registration:', error);

    }
}

function* dogWalkerSaga() {
    yield takeLatest('ADD_WALK', addWalk);
    yield takeLatest('GET_WALKS', getWalks);
}

export default dogWalkerSaga;
