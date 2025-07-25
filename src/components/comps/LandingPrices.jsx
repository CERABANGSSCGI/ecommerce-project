import "../styles/LandingPrices.css";
import GreenButton from "../units/GreenButton";

const LandingPrices = () => {
  return (
    <div id="landing-prices-bg" className="d-flex flex-row mb-5">
      <div className="prices-left-bg">
        <img src="src/assets/cold.jpg" alt="" />
      </div>
      <div className="prices-right-bg">
        <img src="src/assets/hot.jpg" alt="" />
      </div>
    </div>
  );
};

export default LandingPrices;
