import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/SidebarAdmin.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaClipboardList,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdInventory } from "react-icons/md";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { api } from "../../api";

const SidebarAdmin = ({}) => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      await api.post("/logout");
      setUser(null);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.msg || "Logged Out Failed");
    }
  };

  return (
    <>
      
      <div className="sidebar-admin">
        <h2 className="sidebar-title">Kape Kalakal</h2>
        <nav className="sidebar-nav">
          <NavLink to="/Admin" className="sidebar-button mt-5">
            <FaTachometerAlt className="sidebar-icon" /> Dashboard
          </NavLink>
          <NavLink to="/Inventory" className="sidebar-button mt-5">
            <MdInventory className="sidebar-icon" /> Inventory
          </NavLink>
          <NavLink to="/Users" className="sidebar-button mt-5">
            <FaUsers className="sidebar-icon" /> Users
          </NavLink>
          <NavLink to="/Reports" className="sidebar-button mt-5">
            <FaClipboardList className="sidebar-icon" /> Reports
          </NavLink>
          <NavLink
            onClick={handleSubmit}
            to="/"
            className="sidebar-button mt-5"
          >
            <FaSignOutAlt className="sidebar-icon" /> Log Out
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default SidebarAdmin;
