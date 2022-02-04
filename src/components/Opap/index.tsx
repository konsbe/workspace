import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/material";

//typic axios fetching data and returning a jsonfile as a response
import axios from "axios";
const fetchOpapData = (page: number) => {
  const url = `https://api.opap.gr/draws/v3.0/1100/visual-draw/90000${page}`;
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};


const Opap = () => {
  const [page, setPage] = useState(1);
  const [numbers, setNumbers] = useState<Array<number>>();

  //Performs side effects before our component mount on the browser ,[] dependency array says when the component will Update
  useEffect(() => {
    const kinoData = fetchOpapData(page);
    console.log(kinoData);
    kinoData.then((res: any) => {
      console.log(res.data.winningNumbers.list);
      setNumbers(res.data.winningNumbers.list);
    });
  }, [page]);

  function reducePage() {
    setPage(page - 1);
  }

  function increasePage() {
    setPage(page + 1);
  }

  return (
    <>
      <Box>
        <Button
          variant="contained"
          color="error"
          sx={{ width: 300 }}
          onClick={reducePage}
          disabled={page === 0}
        >
          Previous
        </Button>
        <Button variant="text" disabled>
          9000{page}
        </Button>
        <Button
          variant="contained"
          color="success"
          sx={{ width: 300 }}
          onClick={increasePage}
        >
          Next
        </Button>
        {numbers && <p>{numbers?.toString()}</p>}
        {!numbers && <p>Error...</p>}
      </Box>
    </>
  );
};

export default Opap;
