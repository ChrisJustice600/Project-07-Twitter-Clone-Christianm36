import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profilePage/profile.jsx";
import database from "./data.json";
// import data from "./data.json";
import Tweets from "./components/Tweets.jsx";
import ProfilePost from "./pages/profilePage/ProfilePost.jsx";
import UserContext from "./context/UserContext.js";
import { useState } from "react";
// import { useState } from "react";

import("./style/reset.css");
import("./style/App.css");
import("./style/sidestyle.css");
import("./style/profile.css");

export default function App() {
  const [data, setData] = useState(database)
  // const [isClicked, setIsClicked] = useState(false)



  return (
    <UserContext.Provider value={{ data, setData}} >
    {/* // <UserContext.Provider value={{ data }} > */}
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home  />}>
              <Route index element={<Tweets />} />
            </Route>
            <Route path="/profile" element={<Profile />} />
            <Route path=":id" element={<ProfilePost />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </UserContext.Provider>

  );
}
