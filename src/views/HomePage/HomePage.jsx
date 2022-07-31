import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import Announces from "../../components/Announces/Announces.jsx";
import Banner from "../../components/Banner/Banner.jsx";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Filter />
      <Announces />
      <Banner />
      <Footer />

      <Outlet />
    </div>
  );
}
