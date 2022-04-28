const initialState = {
    novels: [],
    labels: [],
    chaps:[]
}
 
function rootReducer(state = initialState, action){
    if(action.type === 'GET_ALL_NOVELS'){
        state.novels = action.payload;
    } else if( action.type === 'GET_ALL_LABELS'){
        state.labels = action.payload;
    } else if (action.type === 'GET_ALL_CHAPS'){
        state.chaps = action.payload;
    }
    return state;
}

export default rootReducer;

