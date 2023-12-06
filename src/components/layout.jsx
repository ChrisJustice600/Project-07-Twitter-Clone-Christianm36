import React from "react";
import SideNav from "./sideNav";

function Layout({ children }) {
  return (
    <>
      <div className="left-sidebar">
        <SideNav />
      </div>
      {children}
      <div className="right-sidebar" />
    </>
  );
}

export default Layout;
