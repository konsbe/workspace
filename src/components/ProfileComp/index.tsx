import { useState } from "react";
import { Button, Avatar } from "@mui/material";
import { Typography } from "@material-ui/core";

//useQuery fetching to cache data having access to variable like isLoading, error, cacheTime, staleTime and more..
import { useQuery } from "react-query";
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
          <Typography
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              style={{
                height: 100,
                width: 100,
              }}
              src={data.image}
            />{" "}
            {data.name}
          </Typography>
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
