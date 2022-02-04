import React from "react";
import { Link } from "react-router-dom";

//using material ui to import ts styles
import useStyles from "./css";

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <header className={classes.navbar}>
        <Link to="/">Home</Link> <Link to="/chars">Characters</Link>
      </header>
      <main className={classes.mainBody}>{children}</main>
      <footer className={classes.layoutFooter}>footer</footer>
    </>
  );
};

export default Layout;
