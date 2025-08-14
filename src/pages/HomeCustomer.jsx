import "./Home.css";
import LandingBG from "../components/comps/LandingBG";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBarCustomer from "../components/comps/NavBarCustomer.jsx";
import LandingAbout from "../components/comps/LandingAbout";
import LandingPrices from "../components/comps/LandingPrices";
import LandingFeedback from "../components/comps/LandingFeedback";
import LandingContact from "../components/comps/LandingContact";
import LandingFooter from "../components/comps/LandingFooter.jsx";

function HomeCustomer() {


  return (
    <>
      
      <NavBarCustomer />
      <LandingBG/>
      <LandingAbout />
      <LandingPrices />
      <LandingFeedback />
      <LandingContact />
      <LandingFooter/>
    </>
  );
}

export default HomeCustomer;
