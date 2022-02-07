import { useState } from "react";
import { Button } from "@mui/material";

import Profile from "./Profile";
//useQuery fetching to cache data having access to variable like isLoading, error, cacheTime, staleTime and more..
import { useQuery } from "react-query";

// importing interface
import { characterInfo } from "./interface";

const fetchCharacters = async (page: number) => {
  const promise = await fetch(
    `https://rickandmortyapi.com/api/character/${page}`
  ).then((res) => {
    console.log(res);
    return res.json();
  });

  return promise;
};

const ProfileComp = (props: characterInfo): JSX.Element => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, error } = useQuery(["proile", page], () =>
    fetchCharacters(page)
  );
  console.log(data);
  const increasePage = () => {
    setPage(page + 1);
  };
  const decrasePage = () => {
    setPage(page - 1);
  };
  return (
    <>
      <p>
        {isLoading ? (
          "Loading.."
        ) : (
          <Profile name={data.name} image={data.image} />
        )}
      </p>
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
