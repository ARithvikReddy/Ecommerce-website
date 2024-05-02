import React, { createContext, useContext, useReducer } from 'react';

// Create the context
export const StateContext = createContext();

// Provider component to wrap your app and provide the state to all components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Hook to use the state in any component
export const useStateValue = () => useContext(StateContext);
