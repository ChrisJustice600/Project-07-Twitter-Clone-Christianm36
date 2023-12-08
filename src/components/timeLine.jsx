import React from "react";
import Header from "../components/Header";
import TweetEditor from "../components/TweetEditor";
import Tweets from "../components/Tweets";

export default function TimeLine() {
  return (
    <>
      <Header />
      <TweetEditor />
      <Tweets />
    </>
  );
}
