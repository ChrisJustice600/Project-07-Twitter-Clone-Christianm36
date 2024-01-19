// import React, { useContext } from "react";
import TimeLine from "../components/timeLine";
import SideBar from "../components/sideBar";
import SideNav from "../components/sideNav";
// import UserContext from "../context/UserContext";

function Home() {
  // const user = useContext(UserContext);
  // console.log(user);
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

