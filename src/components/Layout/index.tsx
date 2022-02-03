import React from "react";


//using material ui to import ts styles
import useStyles from "./css";

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <header className={classes.navbar}>navabar</header>
      <main className={classes.mainBody}>{children}</main>
      <footer className={classes.layoutFooter}>footer</footer>
    </>
  );
};

export default Layout;
