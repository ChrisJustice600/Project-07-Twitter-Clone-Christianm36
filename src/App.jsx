import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profilePage/profile.jsx";
import data from "./data.json";
import Tweets from "./components/Tweets.jsx";
import ProfilePost from "./pages/profilePage/ProfilePost.jsx";
import UserContext from "./context/UserContext.js";

import("./style/reset.css");
import("./style/App.css");
import("./style/sidestyle.css");
import("./style/profile.css");

export default function App() {

  return (
    <UserContext.Provider value={{ data }} >
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
