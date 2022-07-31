import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "./views/Auth/Auth";
import SinglePage from "./views/SinglePage/SinglePage";
import HomePage from "./views/HomePage/HomePage";
import AboutPage from "./views/AboutPage/AboutPage";

import "./_app.scss";
import AnnouncePage from "./views/AnnouncePage/AnnouncePage";
import AdminPage from "./views/AdminPage/AdminPage";

function App() {
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
