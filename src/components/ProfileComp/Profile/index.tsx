import React from "react";
import { Avatar } from "@mui/material";
import { Typography } from "@material-ui/core";

// importing interface
import { characterInfo } from "../interface";

const Profile = (props: characterInfo): JSX.Element => {
  return (
    <>
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
          src={props.image}
        />{" "}
        {props.name}
      </Typography>
    </>
  );
};

export default Profile;
