import React from "react";
import TimeLine from "../components/timeLine";
import SideBar from "../components/sideBar";
import SideNav from "../components/sideNav";
import Profile from "../components/profileComponent/profile";


function Home() {
  return (
    <>
      <SideNav />
      <main className="timeline">
        {/* <TimeLine /> */}
        <Profile />
      </main>
      <SideBar />
    </>
  );
}

export default Home;
