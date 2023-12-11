import React from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";
// import Tweets from "../components/Tweets";
import { Outlet } from "react-router-dom";


export default function TimeLine() {
  return (
    <>
      <Header />
      <TweetEditor />
      <Outlet />
    </>
  );
}
