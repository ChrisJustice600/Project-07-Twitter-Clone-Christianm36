import React from "react";
import ImageSearch from "../iconSide/research.svg";
import Trends from "./trends";
import WoToFollow from "./WoToFollow";

export default function SideBar() {
  return (
    <div className="sidebarcontainer">
      <div className="form-side-bar">
        <img src={ImageSearch} />
        <input
          className="input-side-bar"
          type="text"
          placeholder="Search Twitter"
        />
      </div>
      <Trends />
      <WoToFollow />
    </div>
  );
}
