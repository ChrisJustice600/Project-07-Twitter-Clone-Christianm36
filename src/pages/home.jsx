import React from "react";
import TimeLine from "../components/timeLine";
import SideBar from "../components/sideBar";
import SideNav from "../components/sideNav";


function Home() {
  return (
    <>
      <SideNav />
        <main className="timeline">
          <TimeLine />
        </main>
      <SideBar />
    </>
  );
}

export default Home;

