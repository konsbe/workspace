import React, { FC, useEffect, useState, useMemo, useCallback } from "react";

interface Props {
  compValue?: string;
  value?: number;
}

const CompA: FC<Props> = ({ compValue }) => {
  useEffect(() => {
    console.log("CompA render");
  });
  return <div>{compValue}</div>;
};
//   useEffect(() => {

const CompB: FC<Props> = ({ value }) => {
  console.log("CompB render");
  //   });
  return <>{value}</>;
};

const CompC: FC<Props> = () => {
  console.log("CompC render");
  //   });
  return <></>;
};

const UseCase = () => {
  const [count, setCount] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  console.log("App render", count);

  const [compValue, setCompValue] = useState<string>("");

  const CompMemoized = useMemo(
    () => <CompA compValue={compValue} />,
    [compValue]
  );
  //   const clickButton = useCallback(
  //     () => setCompValue("hello" + Math.random()),
  //     [setCompValue]
  //   );
  const handleClick = useCallback(() => setCount(count + 1), [count]);

  return (
    <div>
      <h1 onClick={handleClick}>{count}</h1>
      {CompMemoized}
      <CompB value={count} />
      <button onClick={() => setCompValue("hello" + Math.random())}>
        Button
      </button>
      <CompC value={count} />
    </div>
  );
};

export default UseCase;
