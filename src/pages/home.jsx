import React from 'react';
import Header from './Header';
import TweetEditor from './TweetEditor';
import Tweets from './Tweets';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
      <Tweets />
    </main>

  );
}

export default Home;