import React from "react";

import Layout from "./components/Layout";

//importing views === with components directory but it has better structure
import Home from "./view/Home";

//importing ts styles
import useStyles from "./css";

//Install and setup React Query for dev tools an make my wrapper
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

function App() {
  const classes = useStyles();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={classes.appBody}>
        <Layout>
          <Home />
        </Layout>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
