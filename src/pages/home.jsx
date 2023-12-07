import React from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";
import Tweets from "../components/Tweets";
import SideBar from "../components/sideBar";
import SideNav from "../components/sideNav";

function Home() {
  return (
    <>
    <SideNav />
      <main className="timeline">
        <Header />
        <TweetEditor />
        <Tweets />
      </main>
      <SideBar />

    </>
  );
}

export default Home;
