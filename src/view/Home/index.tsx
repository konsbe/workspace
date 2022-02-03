import React, { useState } from "react";

import Greeting from "./../../components/Greeting";
import Layout from "./../../components/Layout";
import InputField from "./../../components/InputField";
import Opap from "./../../components/Opap";

//Install and setup React Query for dev tools an make my wrapper
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

function Home() {
  const [greeting, setGreeting] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<any>): void => {
    setGreeting(e.target.value);
  };

  return (
    <>
      <InputField name="name" value={greeting} onChange={handleChange} />
      <Greeting greet={greeting} />
      <Opap />
    </>
  );
}

export default Home;
