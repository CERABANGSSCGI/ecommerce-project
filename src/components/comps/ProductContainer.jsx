import "../styles/ProductContainer.css"
import AddToCart from "../units/AddToCart.jsx"

const ProductContainer = (props) => {
  return (
    <div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{props.productName}</h1>
            <img src="src/assets/beans.jpg" alt="" className="card-img-top mt-3 mb-3"/>
            <h5 className="card-subtitle text-secondary">PHP {props.productPrice}</h5>
            <p className="card-text">{props.productDesc}</p>
            <div className="add-cart">
              <AddToCart />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductContainer