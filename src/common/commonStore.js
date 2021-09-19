import {createStore} from "redux";

const initialState={
    "filterMovies":[]
}

function handleStores(state = initialState, action){
    switch (action.type){
        case "FILTER_MOVIES":
            //return {...state,"subscribers":action.payload}
            console.log(action.payload); 

            return state;
        default:
            return state;

    }
}



export default createStore(handleStores);