import React, { useState } from "react";

import "./App.css";
import Greeting from "./components/Greeting";
import Layout from "./components/Layout";
import InputField from "./components/InputField";
import Opap from "./components/Opap";

import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

function App() {
  const [greeting, setGreeting] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<any>): void => {
    setGreeting(e.target.value);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Layout>
          <InputField name="name" value={greeting} onChange={handleChange} />
          <Greeting greet={greeting} />
          <Opap />
        </Layout>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
