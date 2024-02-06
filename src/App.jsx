import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profilePage/profile.jsx";
import database from "./data.json";
// import data from "./data.json";
import Tweets from "./components/Tweets.jsx";
import ProfilePost from "./pages/profilePage/ProfilePost.jsx";
import UserContext from "./context/UserContext.js";
import { useEffect, useState } from "react";

import("./style/reset.css");
import("./style/App.css");
import("./style/sidestyle.css");
import("./style/profile.css");

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:3000/bdd`;

      const response = await fetch(url);
      const dataJson = await response.json();
      // console.log(dataJson);
      setData(dataJson)
    }

    fetchBlogs();
  }, []);

  return (
    <UserContext.Provider value={{ data, setData }} >
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />}>
              <Route index element={<Tweets />} />
            </Route>
            <Route
              path={`/${data?.currentUser?.author?.username}`}
               element={<Profile />}
            />
            <Route path=":username" element={<ProfilePost />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </UserContext.Provider>

  );
}
