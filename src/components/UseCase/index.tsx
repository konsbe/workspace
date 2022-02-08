import React, { FC, useEffect, useState, useMemo, useCallback } from "react";
import { Props } from "./interface";

//Messing around with useCallback(), useMemo(), React.memo()

const CompA: FC<Props> = ({ compValue }) => {
  useEffect(() => {
    console.log("CompA render");
  });
  return <div>{compValue}</div>;
};

// React.memo and and useCallback is a powerfull tool to memoize stuff and trigger them whenever you like
// delete the value props from CompB to check the difference or the React.memo()
const CompB: FC<Props> = React.memo(({ value }) => {
  console.log("CompB render");
  return <>{value}</>;
});

const UseCase = () => {
  const [count, setCount] = useState<number>(0);
  console.log("App render", count);

  const [compValue, setCompValue] = useState<string>("");

  // useMemo something you dont have to get tricky with this and sue effece powerfull to memoize stuff
  const CompMemoized = useMemo(
    () => <CompA compValue={compValue} />,
    [compValue]
  );

  // i want to have a callback func witch not triggers the CompB all the time
  const handleClick = useCallback(() => setCount((c) => c + 1), [setCount]);

  return (
    <div>
      <h1>useMemo(), useCallback(), React.memo()</h1>
      <p>open the console and play with the buttons</p>
      <button onClick={handleClick}>{count}</button>
      {CompMemoized}
      <CompB value={count} />
      <button onClick={() => setCompValue("hello" + Math.random())}>
        Button
      </button>
    </div>
  );
};

export default React.memo(UseCase);
