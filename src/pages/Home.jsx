import "./Home.css";
import LandingAbout from "../components/comps/LandingAbout";
import LandingBG from "../components/comps/LandingBG";
import NavBar from "../components/comps/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LandingPrices from "../components/comps/LandingPrices";
import LandingPromo from "../components/comps/LandingPromo";
import DiscountCard from "../components/comps/DiscountCard";
import LandingFeedback from "../components/comps/LandingFeedback";
import LandingContact from "../components/comps/LandingContact";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Home() {

  return (
    <>
      <NavBar />
      <LandingBG />
      <LandingAbout />
      <LandingPrices />
      <LandingPromo />
      <DiscountCard />
      <LandingFeedback />
      <LandingContact />
    </>
  );
}

export default Home;
