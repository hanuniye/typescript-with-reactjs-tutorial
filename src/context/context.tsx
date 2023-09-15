import React, { createContext, useReducer } from "react";
import { ActionType, StateType, initialState, reducer } from "./reducer";

export const context = createContext<{ state: StateType, dispatch: React.Dispatch<ActionType> }>({
    state: initialState,
    dispatch: () => {}
})

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <context.Provider value={{state, dispatch}}>
        { children }
    </context.Provider>
}