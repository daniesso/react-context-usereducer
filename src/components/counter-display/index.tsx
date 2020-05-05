import React, { useContext } from "react";
import { CounterContext } from "../../context";

const CounterDisplay: React.FunctionComponent = () => {
  const count = useContext(CounterContext);
  return <p>Count: {count}</p>;
};

export default CounterDisplay;
