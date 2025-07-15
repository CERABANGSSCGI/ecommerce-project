import "../styles/LandingBG.css";
import GreenButton from "./GreenButton";

const LandingBG = () => {
  return (
    <div id="bg-cover">
      <div id="welcome-container">
        <h1 id="welcome-msg" className="text-center">Welcome to Kape Kalakal</h1>
        <GreenButton greenButtonDesc="Order Now"/>
      </div>
    </div>
  );
};

export default LandingBG;
