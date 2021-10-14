import  {Data}  from './firebaseConnect';

var redux = require('redux');

const noteInitialState = {}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            Data.push(action.getItem);
            return state
            
        default:
            return state
    }
}

var store =redux.createStore(allReducer);

export default store;