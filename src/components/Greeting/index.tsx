import React, { FC, useState } from "react";
import InputField from "./../InputField";

interface Person {
  name: string;
  age: number;
}

interface Props {
  greet: string;
}

//FC<Props> functional component ->  that gets props
//error type: Binding element 'children' implicitly has an 'any' type.

//JSX.Element you can specify the type of component that returns

//e stands for Event in React and it must have a specific type
//error type: Binding element 'e' implicitly has an 'any' type.

const Greeting: FC<Props> = ({ greet }): JSX.Element => {
  const [person, setPerson] = useState({ name: "", age: 0 });
  // let greet : <any>

  return (
    <>
      <InputField
        name="name"
        value={person.name}
        onChange={(e: React.ChangeEvent<any>) =>
          setPerson({ ...person, [e.target.name]: e.target.value })
        }
      />

      <div>
        {greet}: {person.name}
      </div>
    </>
  );
};

export default Greeting;
