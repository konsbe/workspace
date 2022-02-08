import React, { useState, useContext, useCallback } from "react";
import { Box } from "@mui/system";
import Greeting from "./../../components/Greeting";

import InputField from "./../../components/InputField";
import Opap from "./../../components/Opap";
import UseCase from "./../../components/UseCase";
import { Button } from "@mui/material";
// Importing my Context-Provider
import { ThemeContext } from "../../components/contexts/ThemeContext";

function Home() {
  const [greeting, setGreeting] = useState<string>("");
  const [trigger, setTrigger] = useState<boolean>(false);
  const [triggerText, setTriggerText] = useState<string>("black");
  //access to Context without passing Props from Parent to Child you can do it in each of this child component
  const context: any = useContext(ThemeContext);
  // console.log(context, "my context");
  const { iseLightTheme, light, dark } = context;
  const theme: any = trigger ? light : dark;

  const handleChange = (e: React.ChangeEvent<any>): void => {
    setGreeting(e.target.value);
  };
  const handleClick = useCallback(() => {
    if (!trigger) {
      setTriggerText("black");
      setTrigger(true);
    } else {
      setTriggerText("white");
      setTrigger(false);
    }
  }, [trigger]);

  return (
    <>
      <Box
        component="div"
        style={{ background: theme.ui, color: theme.syntac, height: "100%" }}
      >
        <Box component="div">
          <Button onClick={handleClick}>{triggerText}</Button>
        </Box>
        <InputField name="name" value={greeting} onChange={handleChange} />
        <Greeting greet={greeting} />
        <Opap />
        <UseCase />
      </Box>
    </>
  );
}

export default Home;
