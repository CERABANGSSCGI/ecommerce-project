import { Link, useNavigate } from "react-router-dom";
import "../styles/NavBarAdmin.css";
import { useContext } from "react";
import { api } from "../../api";
import { AuthContext } from "../../context/AuthContext";

const navItems = [
  { name: "Dashboard", link: "" },
  { name: "Inventory", link: "" },
  { name: "Users", link: "" },
  { name: "Reports", link: "" },
];

function NavBarAdmin() {
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
      <nav className="navbar-customer navbar navbar-expand-md position-fixed">
        <div className="container ">
          <a href="#" className="navbar-brand p-0">
            <img src="src/assets/logo.png" alt="logo" />
          </a>
          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            className="navbar-toggler bg-light"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {navItems.map((item, index) => (
                <li className="nav-item text-center m-3" key={index}>
                  <Link
                    to={item.link}
                    className="text-center text-decoration-none"
                    id="nav-links"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              onClick={handleSubmit}
              href="/"
              className="p-1 ms-auto d-flex justify-content-center text-decoration-none fs-5"
              id="signin-btn"
            >
              Sign Out
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBarAdmin;
