import React from "react";

//React Router dom to handle our Routes(paths)
import { Routes, Route } from "react-router-dom";

//Install and setup React Query for dev tools an make my wrapper
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";

//Layouts Navigation Bar and Footer
import Layout from "./components/Layout";

//importing views === with components directory but it has better structure
import Home from "./view/Home";
import Profiles from "./view/Profiles";

//importing ts styles
import useStyles from "./css";

import ThemeContextProvider from "./components/contexts/ThemeContext";

const queryClient = new QueryClient();

function App() {
  const classes = useStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={classes.appBody}>
        <Layout>
          <ThemeContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="/chars" element={<Profiles />} />
            </Routes>
          </ThemeContextProvider>
        </Layout>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
