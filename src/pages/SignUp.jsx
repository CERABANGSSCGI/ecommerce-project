import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GreenButton from "../components/units/GreenButton";
import "./SignUp.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {api} from "../api";

const SignUp = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirmPassword } = form;
    if (password !== confirmPassword) {
      alert("Password do not match");
      return;
    }
    try {
      const res = await api.post("/register", form);
      alert("Successfully Registered");
      navigate("/SignIn");
    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <>
      <div className="bg-signin d-flex justify-content-center align-items-center">
        <div className="signin-container container w-75 d-flex justify-content-center align-items-center">
          <div className="row w-100 d-flex justify-content-center align-items-center">
            <div className="signin-title-pane col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mb-3">
              {/* Left pane  */}
              <h1 id="signin-title">Kape Kalakal</h1>
              <h5 id="signin-subtitle">Warm Cups, Honest Trade.</h5>
            </div>
            <div className="signin-form-pane col-12 col-md-6 d-flex flex-column justify-content-center align-items-center mt-3">
              <h1 id="signin-label">Sign Up</h1>
              <form onSubmit={handleSubmit} className="w-75">
                <div className="container mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    onChange={handleChange}
                    value={form.name}
                    required
                  />
                </div>

                <div className="container mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    onChange={handleChange}
                    value={form.email}
                    required
                  />
                </div>

                <div className="container mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    onChange={handleChange}
                    value={form.password}
                    required
                  />
                </div>

                <div className="container mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    className="form-control"
                    onChange={handleChange}
                    value={form.confirmPassword}
                    required
                  />
                </div>

                <div className="container mb-3 text-center">
                  <GreenButton
                    type="submit"
                    id="submit-btn"
                    greenButtonDesc="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
