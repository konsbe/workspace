import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
//typic axios fetching data and returning a jsonfile as a response
import axios from "axios";
const fetchOpapData = async (page: number) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.opap.gr/draws/v3.0/1100/visual-draw/90000${page}`)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

const Opap = () => {
  const [page, setPage] = useState<number>(1);
  const [data, setData] = useState<any>({});
  const [numbers, setNumbers] = useState<number>();

  useEffect(() => {
    const kinoData = fetchOpapData(page);
    console.log(kinoData);
    kinoData.then((res: any) => {
      setData(res);
      console.log(res.data.winningNumbers.list);
      setNumbers(res.data.winningNumbers.list);
    });
  }, []);
  // console.log(data.data.winningNumbers.list);
  // setNumbers(data.data.winningNumbers.list);
  console.log(numbers);
  return (
    <>
      <Box>
        <Button
          variant="contained"
          color="error"
          sx={{ width: 300 }}
          onClick={() => {
            setPage((old) => Math.max(old - 1, 0));
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
            setPage((old) => old + 1);
          }}
        >
          Next
        </Button>
        {/* {numbers ? <span>numbers</span> : <></>} */}
        <p>{numbers?.toString()}</p>
      </Box>
    </>
  );
};

export default Opap;
