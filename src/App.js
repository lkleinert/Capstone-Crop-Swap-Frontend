import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import LandingPage from "./pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authUser, setAuthUser] = useState("");

  const setAuth = (boolean, username) => {
    setIsAuthenticated(boolean);
    setAuthUser(username);
  };

  const isAuth = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/verified`,
        {
          method: "POST",
          headers: { token: localStorage.token },
        }
      );

      const parseRes = await response.json();

      parseRes.valid === true
        ? setAuth(true, parseRes.user)
        : setAuth(false, "");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    isAuth();
  });

  //to delete local storage when editing code for now
  useEffect(() => {
    localStorage.clear();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            !isAuthenticated ? (
              <LandingPage setAuth={setAuth} />
            ) : (
              <Navigate to={`/users/${authUser}`} />
            )
          }
        />
        <Route path="/users" element={<SearchPage />} />
        <Route
          path="/users/:id"
          element={<ProfilePage authUser={authUser} setAuth={setAuth} />}
        />
        <Route path="*" element={"404 Error: Page Not Found"} />
      </Routes>
    </div>
  );
}

export default App;
