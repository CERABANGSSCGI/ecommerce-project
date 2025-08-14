import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Products.css";
import ProductContainer from "../components/comps/ProductContainer";
import NavBarCustomer from "../components/comps/NavBarCustomer";
import { useState } from "react";
import { useEffect } from "react";
import { apiProduct } from "../api";
import SidebarCustomer from "../components/comps/SidebarCustomer";
import { useSearchParams } from "react-router-dom";

function Products() {
  const [filtered, setFiltered] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async (query = "") => {
      try {
        const res = await apiProduct.get(`/get-product${query}`);
        const allProducts = res.data.Product;
        setFiltered(allProducts);
      } catch (err) {
        setError("Failed to fetch the products.");
        console.error(error, err);
      }
    };
    fetchProducts();
  }, []);

  const handleFilteredItems = async (filters) => {
    const queryParams = [];

    if (filters.category && filters.category.toLowerCase() !== "all") {
      queryParams.push(`category=${filters.category.toLowerCase()}`);
    }
    if (filters.search) {
      queryParams.push(`search=${filters.search}`);
    }
    if (filters.minPrice) {
      queryParams.push(`minPrice=${filters.minPrice}`);
    }
    if (filters.maxPrice) {
      queryParams.push(`maxPrice=${filters.maxPrice}`);
    }

    const queryString =
      queryParams.length > 0 ? `?${queryParams.join("&")}` : "";

    setSearchParams(queryString);

    try {
      const res = await apiProduct.get(`/get-product${queryString}`);
      const allProducts = res.data.Product;
      setFiltered(allProducts);
    } catch (err) {
      setError("Failed to fetch the products.");
      console.error(error, err);
    }
  };

  return (
    <>
      <NavBarCustomer />
      <div className="bg-products">
        <SidebarCustomer onFilterItems={handleFilteredItems} />
        <div className="container">
          <div className="item-container row justify-content-center p-5">
            {filtered.length !== 0 ? (
              filtered.map((item, index) => (
                <div
                  className=" product-items d-flex justify-content-center col-12 col-md-3 text-center p-3 mt-3"
                  key={index}
                >
                  <ProductContainer
                    productID={item._id}
                    productName={item.productName}
                    photoURLink={item.photoURL}
                    productPrice={item.price}
                    productDesc={item.productDescription}
                  />
                </div>
              ))
            ) : (
              <p className="text-center fw-5 fs-5">No data found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
