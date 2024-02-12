import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profilePage/profile.jsx";
import Tweets from "./components/Tweets.jsx";
import ProfilePost from "./pages/profilePage/ProfilePost.jsx";
import UserContext from "./context/UserContext.js";
import { useEffect, useState } from "react";
import axios from 'axios';

import("./style/reset.css");
import("./style/App.css");
import("./style/sidestyle.css");
import("./style/profile.css");  

export default function App() {
  const [data, setData] = useState(null)
  const [current, setCurrent] = useState(null)
  const [reverse, setReverse] = useState(false)

    useEffect(() => {
      // Appeler fetchData apres le post réussi
      async function fetchData() {
        let url = 'http://localhost:3000/tweets';
    
        try {
          const response = await axios.get(url);
          const dataJson = response.data;
          // console.log(dataJson); 
          setData(dataJson.reverse());
        } catch (error) {
          console.error("Une erreur s'est produite lors de la requête", error);
        }
      }
      fetchData();
    }, [reverse]); // dépendance permettra de déclencher le rappel après le post
  

  useEffect(() => {
    async function fetchCurrentUser() {
      let url = 'http://localhost:3000/currentUser';
  
      try {
        const response = await axios.get(url);
        const currentJson = response.data;
        console.log(currentJson);
        setCurrent(currentJson);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la requête", error);
      }
    }
  
    fetchCurrentUser();
  }, []);
 

  return (
    <UserContext.Provider value={{ data, setData,current, setReverse, reverse }} >
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/home" element={<Home />}>
              <Route index element={<Tweets />} />
            </Route>
            <Route
              path={`/${current?.currentUser?.author?.username}`}
               element={<Profile />}
            />
            <Route path=":username" element={<ProfilePost />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </UserContext.Provider>

  );
}
