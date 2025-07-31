import "./Home.css";
import LandingBG from "../components/comps/LandingBG";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBarCustomer from "../components/comps/NavBarCustomer.jsx";

function HomeCustomer() {


  return (
    <>
      
      <NavBarCustomer />
      <LandingBG/>
    </>
  );
}

export default HomeCustomer;
