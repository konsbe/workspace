//making ts styles with material ui

import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#23d4",
    height: 50,
    // marginBottom: 20,
    paddingTop: "1rem",
  },
  mainBody: {
    height: "100vh",
    width: "100%",
  },
  layoutFooter: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
  },
}));
