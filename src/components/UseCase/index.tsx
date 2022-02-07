import React, { FC, useEffect, useState, useMemo, useCallback } from "react";

interface Props {
  compValue: string;
}

const CompA: FC<Props> = ({ compValue }) => {
  useEffect(() => {
    console.log("CompA render");
  });
  return <div>{compValue}</div>;
};

const UseCase = () => {
  const [count, setCount] = useState<number>(0);
  console.log("App render");

  const [compValue, setCompValue] = useState<string>("");

  const CompMemoized = useMemo(
    () => <CompA compValue={compValue} />,
    [compValue]
  );
  const clickButton = useCallback(
    () => setCompValue("hello" + Math.random()),
    [setCompValue]
  );

  return (
    <div>
      <h1 onClick={() => setCount(count + 1)}>{count}</h1>
      {CompMemoized}
      <button onClick={clickButton}>Button</button>
    </div>
  );
};

export default UseCase;
