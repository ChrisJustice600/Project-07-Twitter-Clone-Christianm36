import React from 'react';
import Header from './Header';
import TweetEditor from './TweetEditor';

function Home() {
  return (
    <main className="timeline">
      <Header />
      <TweetEditor />
    </main>

  );
}

export default Home;