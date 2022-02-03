import React from "react";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header>navabar</header>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
};

export default Layout;
