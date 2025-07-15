import "../styles/LandingPromo.css"
import CounterButton from "./CounterButton"
import DiscountCard from "./DiscountCard"

const LandingPromo = () => {
  return (
    <div className="landing-promo d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="landing-promo-container">
          <DiscountCard/>
        </div>
      </div>
    </div>
  )
}

export default LandingPromo