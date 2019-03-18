import { put, takeEvery } from 'redux-saga/effects';
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

function* deleteItem(action) {
    try {
        console.log('post item', action.payload);
        yield axios.delete('api/dog/' + action.payload);
        yield put({ type: 'GET_WALKS' });
    } catch (error) {
        console.log('this was an error with the delete - what up TJ');

    }
}


function* dogWalkerSaga() {
    yield takeEvery('ADD_WALK', addWalk);
    yield takeEvery('GET_WALKS', getWalks);
    yield takeEvery('DELETE_ITEM', deleteItem)
}

export default dogWalkerSaga;
