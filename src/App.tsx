import React, { useState } from "react";
import CounterButton from "./components/counter-button";
import CounterDisplay from "./components/counter-display";
import { CounterContext } from "./context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CounterContext.Provider value={count}>
        <CounterButton increment={() => setCount(count + 1)} />
        <CounterDisplay />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
