import React, { useState } from "react";

import "./App.css";
import Greeting from "./components/Greeting";
import Layout from "./components/Layout";
import InputField from "./components/InputField";

function App() {
  const [greeting, setGreeting] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<any>): void => {
    setGreeting(e.target.value);
  };

  return (
    <div className="App">
      <Layout>
        <InputField name="name" value={greeting} onChange={handleChange} />
        <Greeting greet={greeting} />
      </Layout>
    </div>
  );
}

export default App;
