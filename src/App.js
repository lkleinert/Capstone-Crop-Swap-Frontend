import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import LandingPage from "./pages/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/users" element={<SearchPage />} />
        <Route path="/users/:id" element={<ProfilePage />} />
        <Route path="*" element={"404 Error: Page Not Found"} />
      </Routes>
    </div>
  );
}

export default App;
