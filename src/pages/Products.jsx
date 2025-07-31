import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Products.css";
import ProductContainer from "../components/comps/ProductContainer";
import NavBarCustomer from "../components/comps/NavBarCustomer";
import { useState } from "react";
import { useEffect } from "react";
import { apiProduct } from "../api";
import SidebarCustomer from "../components/comps/SidebarCustomer";

function Products() {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiProduct.get("/get-product");
        const allProducts = res.data.Product;
        setProducts(allProducts);
        setFiltered(allProducts);
      } catch (err) {
        setError("Failed to fetch the products.");
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  const handleFilteredCategory = async (category) => {
    try{
      const query = category.toLowerCase() === "all"
      ? ""
      : `category=${category.toLowerCase()}`;
      const res = await apiProduct.get(`/get-product?${query}`);
      console.log(res.data.Product);
      setFiltered(res.data.Product);
    }catch(err){
      console.error("Filter fetch failed", err)
    }
  };

  return (
    <>
      <NavBarCustomer />
      <div className="bg-products">
        <SidebarCustomer onFilterCategory={handleFilteredCategory} />
        <div className="container">
          <div className="item-container row justify-content-center p-5">
            {filtered.map((item, index) => (
              <div
                className=" product-items d-flex justify-content-center col-12 col-md-3 text-center p-3 mt-3"
                key={index}
              >
                <ProductContainer
                  productName={item.productName}
                  photoURLink={item.photoURL}
                  productPrice={item.price}
                  productDesc={item.productDescription}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
