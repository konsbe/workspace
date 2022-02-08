import React, { FC, useEffect, useState, useMemo, useCallback } from "react";
import { Props } from "./interface";
import { Container, ContainerTwo } from "./css";

//Messing around with useCallback(), useMemo(), React.memo()
const ChildCompA: FC<Props> = ({ compValue }) => {
  useEffect(() => {
    console.log("CompA render");
  });
  return <div>{compValue}</div>;
};

// React.memo and and useCallback is a powerfull tool to memoize stuff and trigger them whenever you like
// delete the value props from CompB to check the difference or the React.memo()
const ChildCompB: FC<Props> = React.memo(({ value }) => {
  console.log("CompB render");
  return <>{value}</>;
});

const UseCase = () => {
  const [count, setCount] = useState<number>(0);
  console.log("App render", count);

  const [compValue, setCompValue] = useState<string>("");

  // useMemo something you dont have to get tricky with this and sue effece powerfull to memoize stuff
  const ChildCompAMemoized = useMemo(
    () => <ChildCompA compValue={compValue} />,
    [compValue]
  );
  //
  // i want to have a callback func witch not triggers the CompB all the time
  const handleClick = useCallback(() => setCount((c) => c + 1), [setCount]);

  return (
    <div>
      <h1>useMemo(), useCallback(), React.memo()</h1>
      <p>open the console and play with the buttons</p>
      {/* emotion styled container from ./css.ts */}
      <Container backgroundcolor="white" onClick={handleClick}>
        {count}
      </Container>
      {ChildCompAMemoized}
      <Container>
        <ContainerTwo>
          <ChildCompB value={count} />
        </ContainerTwo>
      </Container>
      <button onClick={() => setCompValue("hello" + Math.random())}>
        Button
      </button>
    </div>
  );
};

export default React.memo(UseCase);
