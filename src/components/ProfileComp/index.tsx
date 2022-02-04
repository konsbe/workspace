import { useState } from "react";
import { useQuery } from "react-query";
import { Button } from "@mui/material";

const fetchCharacters = async (page: number) => {
  const promise = await fetch(
    `https://rickandmortyapi.com/api/character/${page}`
  ).then((res) => {
    return res.json();
  });

  return promise;
};

const ProfileComp = (): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useQuery(["proile", page], () =>
    fetchCharacters(page)
  );
  const increasePage = () => {
    setPage(page + 1);
  };
  const decrasePage = () => {
    setPage(page - 1);
  };
  return (
    <>
      <p>{isLoading ? "Loading.." : data.name}</p>
      <Button color="success" onClick={increasePage}>
        Next Character
      </Button>
      <Button color="error" onClick={decrasePage}>
        Previous Character
      </Button>
    </>
  );
};

export default ProfileComp;
