import React from "react"
import SideNav from "./sideNav"
import SideBar from "./sideBar"

function Layout({ children }) {
  return (
    <div className="wrapper">
      <div className="left-sidebar">
      </div>
      {children}
      <div className="right-sidebar">
      </div>
    </div>
  );
}

export default Layout;
