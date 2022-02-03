import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchData = () => {
  return axios
    .get("https://api.opap.gr/draws/v3.0/1100/visual-draw/928881")
    .then((res) => {
      console.log(JSON.stringify(res));
      return res;
    })
    .catch(() => {});
};

const Opap = () => {
  //   const [kinoData, setKinoData] = useState<any>([]);
  useEffect(() => {
    fetchData();
  }, []);
  return <>asd</>;
};

export default Opap;
