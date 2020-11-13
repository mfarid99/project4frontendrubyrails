import React, { useReducer } from "react"

///////////////////
//INITIAL STATE
//////////////////

const initialState = {
    url: "http://mfproject4backend.herokuapp.com"
}

/////////////////
//REDUCER (one big function that handles all different situations)
/////////////////
//action = {type: "", payload: ---}
const reducer = (state, action) => {

    switch(action.type) {
        default: 
            return state 
    }
}

////////////////////
//AppContext (object that creates State to everything)
////////////////////

Const AppContext = React.createContext(null)

//AppState Component
export const appState = (props) => {
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

