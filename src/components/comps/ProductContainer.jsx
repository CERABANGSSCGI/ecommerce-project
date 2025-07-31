import "../styles/ProductContainer.css"
import AddToCart from "../units/AddToCart.jsx"

const ProductContainer = (item) => {
  return (
    <div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">{item.productName}</h1>
            <img src={item.photoURLink} alt="" className="card-img-top mt-3 mb-3"/>
            <h5 className="card-subtitle text-secondary">PHP {item.productPrice}</h5>
            <p className="card-text">Click the card title for more description</p>
            <div className="add-cart">
              <AddToCart />
              
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductContainer