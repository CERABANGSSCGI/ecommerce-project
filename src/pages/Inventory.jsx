import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Admin.css";
import SidebarAdmin from "../components/comps/SidebarAdmin";
import GenericTable from "../components/comps/GenericTable";
import { useEffect, useState } from "react";
import { api, apiProduct } from "../api";

const Inventory = () => {
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await apiProduct.get("/get-product");
        const allProducts = res.data.Product;
        setFiltered(allProducts);
      } catch (err) {
        setError("Failed to fetch the products.");
        console.error(error, err);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="main d-flex">
        <SidebarAdmin />
        <div className="offset"></div>
        <div className="background-admin d-flex flex-column align-items-center">
          <h1 className="mt-5">Inventory</h1>
          <div className="table-container">
            <div className="command-buttons">
              <button className="btn">Add Item</button>
            </div>
            <GenericTable sampleData={filtered} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
