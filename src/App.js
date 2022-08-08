import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import LandingPage from "./pages/LandingPage";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userData, setUserData] = useState([]);
  const getUserData = () => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/users`)
      .then((response) => {
        console.log(response.data);
        const dbUsers = response.data.map((user) => {
          const { username, zipcode, bio, Crops } = user;
          return { username, zipcode, bio, Crops };
        });
        setUserData(dbUsers);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="App">
      {/* <NavLink to="/">Home</NavLink>
      <br />
      <NavLink end to="/users">
        Search
      </NavLink>
      <br />
      <NavLink to="/users/:id">User Profile</NavLink>
      <br /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users" element={<SearchPage userData={userData} />} />
        <Route path="/users/:id" element={<ProfilePage />} />
        <Route path="*" element={"404 Error: Page Not Found"} />
      </Routes>
    </div>
  );
}

export default App;
