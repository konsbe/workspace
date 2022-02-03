import React, { useState } from "react";
import { useQuery } from "react-query";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
//typic axios fetching data and returning a jsonfile as a response
import axios from "axios";
const fetchOpapData = async (page: number) => {
  axios
    .get(`https://api.opap.gr/draws/v3.0/1100/visual-draw/90000${page}`)
    .then((res) => {
      console.log(JSON.stringify(res));
      return res;
    })
    .catch(() => {});
};

const Opap = () => {
  const [page, setPage] = useState<number>(1);

  //useQuery from React Query  fetching, caching, synchronizing and updating server state
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
    isSuccess,
  } = useQuery(["kino ", page], () => fetchOpapData(page), {
    keepPreviousData: true,
  });

  return (
    <>
      <Box>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error: {error}</div>
        ) : (
          <div>Success</div>
        )}
        <Button
          variant="contained"
          color="error"
          sx={{ width: 300 }}
          onClick={() => {
            if (!isPreviousData) {
              setPage((old) => Math.max(old - 1, 0));
            }
          }}
          disabled={page === 0}
        >
          Previous
        </Button>
        <Button variant="text" disabled>
          {page}
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ width: 300 }}
          onClick={() => {
            if (!isPreviousData) {
              setPage((old) => old + 1);
            }
          }}
        >
          Next
        </Button>
      </Box>
      <Box>{isFetching ? <span> Loading...</span> : null} </Box>
    </>
  );
};

export default Opap;
