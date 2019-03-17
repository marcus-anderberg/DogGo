const dogWalkReducer = (state = [], action) => {
    if (action.type === 'SET_WALKS') {
       return action.payload;
       
    } 
    return state;
}    

export default dogWalkReducer;