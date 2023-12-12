import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profilePage/profile.jsx";
import data from "./data.json";
import Tweets from "./components/Tweets.jsx";

import("./style/reset.css");
import("./style/App.css");
import("./style/sidestyle.css");
import("./style/profile.css");

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home home={data} />}>
            <Route index element={<Tweets home={data} />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}
