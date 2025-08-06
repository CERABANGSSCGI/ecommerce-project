import { useNavigate } from "react-router-dom";
import "../styles/LandingBG.css";
import GreenButton from "../units/GreenButton";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

const LandingBG = () => {

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/Products");
  };

  const handleClick = () => {
    user ? handleOrderNow() : navigate("/SignIn");
  };

  return (
    <div id="bg-cover">
      <div id="welcome-container">
        <h1 id="welcome-msg" className="text-center">
          Welcome to Kape Kalakal {user?.name|| ""}!
        </h1>
        <GreenButton greenButtonDesc="Order Now" onClick={handleClick} />
      </div>
    </div>
  );
};

export default LandingBG;
