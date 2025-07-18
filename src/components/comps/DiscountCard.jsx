import "../styles/DiscountCard.css";
import AddToCart from "../units/AddToCart";
import CounterButton from "../units/CounterButton";
const DiscountCard = () => {
  return (
    <div className="container">
      <div className="landing-promo-container row mt-5 justify-content-around p-5">
        {/* img */}
        <div className="promo-img col-12 col-md-6 d-flex justify-content-center align-items center">
          <img src="src/assets/cold.jpg" alt="" />
        </div>
        {/* text */}
        <div className="promo-desc text-start col-12 col-md-6 mt-3">
          <h1>Sample Product</h1>
          <div className="landing-price-tag d-flex justify-content-start">
            <p id="old-price">PHP XXXX.XX</p>
            <h3 id="new-price">PHP XXXX.XX</h3>
          </div>
          <p id="promo-description">
            Inspired by the Aeropress method, we bring out rich flavors in every
            cup — smooth, strong, and satisfying. Whether you're a coffee pro or
            just getting started, AeroCoffee is your go-to for quality and
            comfort in every press.
          </p>
          {/* button */}
          <div className="landing-promo-counter d-flex gap-3 d-flex justify-content-center align-items center">
            <CounterButton />
            <AddToCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountCard;
