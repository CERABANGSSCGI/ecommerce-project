import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/SidebarCustomer.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const SidebarCustomer = ({ onFilterCategory }) => {
  return (
    <>
      <div className="sidebar-customer">
        <h2 className="sidebar-title">Kape Kalakal</h2>
        <nav className="sidebar-nav">
          <button
            to="/Products"
            className="sidebar-link"
            onClick={() => onFilterCategory("all")}
          >
            All Products
          </button>
          <button
            to="/Coffee"
            className="sidebar-link"
            onClick={() => onFilterCategory("coffee")}
          >
            Coffee
          </button>
          <button
            to="/Tea"
            className="sidebar-link"
            onClick={() => onFilterCategory("tea")}
          >
            Tea
          </button>
          <button
            to="/Tools"
            className="sidebar-link"
            onClick={() => onFilterCategory("tools")}
          >
            Tools
          </button>
          <button
            to="/Equipments"
            className="sidebar-link"
            onClick={() => onFilterCategory("equipments")}
          >
            Equipments
          </button>
          <button
            to="/Misc"
            className="sidebar-link"
            onClick={() => onFilterCategory("misc")}
          >
            Misc
          </button>
          <Link to="/Cart" className="sidebar-button">
            <FaShoppingCart className="sidebar-icon" /> Cart
          </Link>
        </nav>
      </div>
    </>
  );
};

export default SidebarCustomer;
