/** @format */

import React, { Dispatch, ReactNode, createContext, useContext, useReducer, useState } from "react";
import { paginationReducer } from "./reducer";

interface Iexample{
    number?:number
    state:State,
    dispatch:Dispatch<Action>
}

const initialState: State = {
    currentPage: "info",
    // Adicione outros estados relacionados à paginação, se necessário
  };

  export const ExampleContext = createContext<Iexample | undefined>(undefined);

interface ExampleProviderProps {
    children: ReactNode;
}

interface State {
    currentPage: string;
    // Adicione outros estados de paginação, se necessário
  }
  
  type Action =
    | { type: 'SET_PAGE'; payload: string }
    | { type: 'NEXT_PAGE' }
    | { type: 'PREV_PAGE' };




export const ExampleProvider: React.FC<ExampleProviderProps> = ({children})=>{
    const [number, setNumber] = useState<number>(0)
    const [state, dispatch] = useReducer(paginationReducer, initialState);

    return (
        <ExampleContext.Provider value={{state, dispatch}}>
            {children}
        </ExampleContext.Provider>
    )
}


export const useExampleContext = (): Iexample => {
    const context = useContext(ExampleContext);

    if (!context) {
        throw new Error("useExampleContext must be used within an ExampleProvider");
    }

    return context;
};