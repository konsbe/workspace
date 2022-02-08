import React, { useState, useContext } from "react";
import { Box } from "@mui/system";
import Greeting from "./../../components/Greeting";

import InputField from "./../../components/InputField";
import Opap from "./../../components/Opap";
import UseCase from "./../../components/UseCase";

// Importing my Context-Provider
import { ThemeContext } from "../../components/contexts/ThemeContext";

function Home() {
  const [greeting, setGreeting] = useState<string>("");

  //access to Context without passing Props from Parent to Child you can do it in each of this child component
  const context: any = useContext(ThemeContext);
  console.log(context, "my context");
  const { iseLightTheme, light, dark } = context;
  const theme: any = iseLightTheme ? light : dark;

  const handleChange = (e: React.ChangeEvent<any>): void => {
    setGreeting(e.target.value);
  };

  return (
    <Box
      component="div"
      style={{ background: theme.ui, color: theme.syntac, height: "100%" }}
    >
      <InputField name="name" value={greeting} onChange={handleChange} />
      <Greeting greet={greeting} />
      <Opap />
      <UseCase />
    </Box>
  );
}

export default Home;
