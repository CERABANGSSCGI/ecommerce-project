import "../styles/AddToCart.css"

const AddToCart = ({handleAdd}) => {
  return (
    <div>
      <button onClick={handleAdd} id="add-to-cart">
        Add To Cart
      </button>
    </div>
  )
}

export default AddToCart