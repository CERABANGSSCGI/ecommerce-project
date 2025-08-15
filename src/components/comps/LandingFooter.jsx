import "../styles/LandingFooter.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { SiShopee } from "react-icons/si";

const LandingFooter = () => {
  return (
    <div>
      <div className="background">
        <div className="container mt-3 mb-3">
          <div className="row text-center align-items-center">
            <div className="col-12 col-md-4 d-flex flex-column gap-2">
              <a href="" className="quicklinks">
                Home
              </a>
              <a href="" className="quicklinks">
                About Us
              </a>
              <a href="" className="quicklinks">
                Contact Us
              </a>
              <a href="" className="quicklinks">
                FAQs
              </a>
              <a href="" className="quicklinks">
                Login / Register
              </a>
            </div>
            <div className="col-12 col-md-4 mt-5 mb-5">
              <p>
                “Kape Kalakal: Gisingin ang Umaga, Ipagdiwang ang Bawat
                Sandali.”
              </p>
              <p>
                © 2025 Kape Kalakal. All rights reserved. Crafted with care in
                the Philippines.
              </p>
            </div>
            <div className="right-footer col-12 col-md-4 d-flex flex-column gap-3">
              <div className="socials">
                <a href="" className="social-icons m-3">
                  <FaFacebook color="#6F4E37" />
                </a>
                <a href="" className="social-icons m-3">
                  <FaInstagram color="#6F4E37" />
                </a>
                <a href="" className="social-icons m-3">
                  <SiShopee color="#6F4E37" />
                </a>
              </div>
              <a className="teltel" href="tel:+639123456789">
                <FaPhone color="#6F4E37" />
                09123456789
              </a>
              <p>
                123 Mabini Street, Barangay Maligaya Quezon City, Metro Manila
                Philippines 1100
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
