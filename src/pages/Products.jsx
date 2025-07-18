import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Products.css";
import ProductContainer from "../components/comps/ProductContainer";
import NavBar from "../components/comps/NavBar";

function Products() {
  // temporary items soon get in DB
  const productContents = [
    {
      name: "Kasoy",
      price: "31.00",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, minima?",
    },
    {
      name: "Kasoy",
      price: "31.00",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, minima?",
    },
    {
      name: "Kasoy",
      price: "31.00",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, minima?",
    },
    {
      name: "Kasoy",
      price: "31.00",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, minima?",
    },
    {
      name: "Kasoy",
      price: "31.00",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, minima?",
    },
    {
      name: "Kasoy",
      price: "31.00",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, minima?",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="bg-products">
        <div className="container">
          <h1 className="product-head">Products</h1>
            <div class="search-product input-group container mb-3">
              <input type="text" class="form-control" placeholder="Search Product" required/>
              <button className="search-btn btn btn-light">Enter</button>
            </div>
          <div className="row justify-content-center p-5">
            {productContents.map((item, index) => (
              <div
                className=" product-items d-flex justify-content-center col-12 col-md-3 text-center p-3 mt-3"
                key={index}
              >
                <ProductContainer
                  productName={item.name}
                  productPrice={item.price}
                  productDesc={item.desc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <div id="product-footer" className="container d-flex justify-content-center align-items-center p-3">
          <h3 id="product-items" className="p-3 me-3">Items:numberofitems</h3>
          <button id="product-checkout-btn" className="p-3 ms-3">Checkout</button>
        </div>
      </footer>
    </>
  );
}

export default Products;
