import React from "react";

type CounterButtonT = {
  increment: () => void;
};

const CounterButton: React.FunctionComponent<CounterButtonT> = ({
  increment,
}) => {
  return <button onClick={increment}>+</button>;
};

export default CounterButton;
