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
      <main class="flex-shrink-0 flex-grow-0 w-[600px] border-l border-r border-solid border-[#2F3336]">
        <TimeLine />
      </main>
      <SideBar />
    </>
  );
}

export default Home;

