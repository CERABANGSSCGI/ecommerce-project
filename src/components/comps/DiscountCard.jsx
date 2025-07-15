import "../styles/DiscountCard.css";
import AddToCart from "./AddToCart";
import CounterButton from "./CounterButton";
const DiscountCard = () => {
  return (
    <div className="">
      DiscountCards
      <div className="promo-desc text-end">
        <h1>Sample Product</h1>
        <div className="landing-price-tag d-flex justify-content-end">
          <p>Old Price</p>
          <h3>New Price</h3>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          beatae accusantium repellendus, saepe modi, incidunt voluptatum maxime
          minus deserunt ipsum dignissimos aspernatur rerum asperiores debitis
          corporis expedita molestias doloribus nihil?
        </p>
      </div>
      <div className="landing-promo-counter d-flex gap-3 justify-content-end">
        <CounterButton />
        <AddToCart />
      </div>
      <div className="promo-img">
        <img src="src/assets/cold.jpg" alt="" />
      </div>
    </div>
  );
};

export default DiscountCard;
