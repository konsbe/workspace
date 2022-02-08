import React from "react";
import { Avatar } from "@mui/material";
import { Box } from "@material-ui/core";

// importing interface
import { characterInfo } from "../interface";

const Profile = (props: characterInfo): JSX.Element => {
  return (
    <>
      <Box
        component="div"
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
      </Box>
    </>
  );
};

export default Profile;
