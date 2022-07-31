import { React, useEffect }from "react";
import { Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import Auth from "./views/Auth/Auth";
import SinglePage from "./views/SinglePage/SinglePage";
import HomePage from "./views/HomePage/HomePage";
import AboutPage from "./views/AboutPage/AboutPage";
import "./_app.scss";
import AnnouncePage from "./views/AnnouncePage/AnnouncePage";
import AdminPage from "./views/AdminPage/AdminPage";

let socket;
const CONNECTION_PORT = "http://localhost:6699";

function App() {

  useEffect(() => {
    socket = io(CONNECTION_PORT);
  }, [CONNECTION_PORT]);

  return (
    <div className="app">
      <div className="app__container">
        <Routes>
          <Route index path="admin/login" element={<Auth />} />
          <Route index path="/" element={<HomePage />} />

          <Route index path="single" element={<SinglePage />} />
          <Route index path="about" element={<AboutPage />} />
          <Route index path="addannounce" element={<AnnouncePage />} />
          <Route index path="admin" element={<AdminPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
