import React, {useContext, useReducer } from "react"

///////////////////
//INITIAL STATE
//////////////////

const initialState = {
    url: "http://mfproject4backend.herokuapp.com",
    token: null,
    username: null
};

/////////////////
//REDUCER (one big function that handles all different situations)
/////////////////
//action = {type: "", payload: ---}
const reducer = (state, action) => {
    let newState;
    switch(action.type) {
        case "auth" :
            newState = { ...state, ...action.payload };
            return newState;
            break;
            case "logout":
                newState = {...state, token: null, username: null}
                window.localStorage.removeItem("auth")
            return newState
            default: 
            return state;
            break;
            }
                };
                
////////////////////
//AppContext (object that creates State to everything)
////////////////////

const AppContext = React.createContext(null);

//AppState Component
export const AppState = (props) => {
//dispatch passes action to the reducer
    const [state, dispatch] = useReducer(reducer, initialState)

    return <AppContext.Provider value = {{state, dispatch}}> 
        {props.children}
    </AppContext.Provider>
};

////////////////
//useAppState hook
////////////////  

export const useAppState = () => {
    return React.useContext(AppContext)
}

