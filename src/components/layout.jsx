import React from "react";


function Layout({ children }) {
  return (
    <>
      <div className="left-sidebar"></div>
      {children}
      <div className="right-sidebar"></div>
    </>
  );
}

export default Layout;
