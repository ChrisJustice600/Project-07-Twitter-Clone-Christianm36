import React from "react";
import TimeLine from "../components/timeLine";
import SideBar from "../components/sideBar";
import SideNav from "../components/sideNav";
import DataContext from "../context/dataContext";
import data from "../data.json"


function Home() {
  return (
    <>
      <SideNav />
      <DataContext.Provider value={{ data:  data}}>
        <main className="timeline">
          <TimeLine />
        </main>
      </DataContext.Provider>
      <SideBar />
    </>
  );
}

export default Home;

