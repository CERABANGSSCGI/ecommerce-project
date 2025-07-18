
import "../styles/NavBar.css";

const navItems = [
  { name: "Home" },
  { name: "History" },
  { name: "Products" },
];

function NavBar() {

  return (
    <>
      <nav className="navbar navbar-expand-md position-fixed">
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
                  <a
                    className="text-center text-decoration-none"
                    id="nav-links"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li className="nav-item text-center m-3">
                <a
                  href="#discount-title"
                  className="text-center text-decoration-none"
                  id="nav-links"
                >
                  Promos
                </a>
              </li>
              <li className="nav-item text-center m-3">
                <a
                  href="#contact"
                  className="text-center text-decoration-none"
                  id="nav-links"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <a
              onClick={() => navigate("/SignIn")}
              href="/SignIn"
              className="p-1 ms-auto d-flex justify-content-center text-decoration-none fs-5"
              id="signin-btn"
            >
              Sign In
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
