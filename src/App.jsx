import "./App.css";
import LandingAbout from "./components/comps/LandingAbout";
import LandingBG from "./components/comps/LandingBG";
import NavBar from "./components/comps/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LandingPrices from "./components/comps/LandingPrices";
import LandingPromo from "./components/comps/LandingPromo";

function App() {
  return (
    <>
      <NavBar />
      <LandingBG />
      <LandingAbout />
      <LandingPrices />
      <LandingPromo />
    </>
  );
}

export default App;