import React, { useState, useReducer } from "react";
import CounterButton from "./components/counter-button";
import CounterDisplay from "./components/counter-display";
import { CounterContext } from "./context";
import reducer, { initialState } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <CounterContext.Provider value={state.count}>
        <CounterButton increment={() => dispatch({ type: "INCREMENT" })} />
        <CounterDisplay />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
