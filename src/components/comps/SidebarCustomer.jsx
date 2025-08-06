import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/SidebarCustomer.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const SidebarCustomer = ({ onFilterItems }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const filters = {
      search,
      category,
      minPrice,
      maxPrice,
    };
    onFilterItems(filters);
  };
  return (
    <>
      <div className="sidebar-customer">
        <h2 className="sidebar-title">Kape Kalakal</h2>
        <nav className="sidebar-nav">
          <form action="" onSubmit={handleSubmit}>
            <div className="row">
              <label htmlFor="search">Search for items:</label>
              <input
                type="text"
                name="search"
                className="form-control mt-3"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="row mt-5">
              <div className="d-flex justify-content-center align-items-center col-12">
                <label htmlFor="category">Choose a Category:</label>
                <select
                  name="category"
                  id="item-category"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="coffee">Coffee</option>
                  <option value="non-coffee">Non-Coffee</option>
                  <option value="tools">Tools</option>
                  <option value="equipments">Equipments</option>
                  <option value="miscs">Miscs</option>
                </select>
              </div>
            </div>
            <div className="row mt-5">
              <label htmlFor="" className="mb-3">
                Set Price:
              </label>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Min"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  min={100}
                  max={10000}
                />
              </div>
              <div className="col-6">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  min={100}
                  max={10000}
                />
              </div>
            </div>
            <button className="form-control mt-5"> Submit </button>
          </form>
          <Link to="/Cart" className="sidebar-button mt-5">
            <FaShoppingCart className="sidebar-icon" /> Cart
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SidebarCustomer;
