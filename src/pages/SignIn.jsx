import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GreenButton from "../components/units/GreenButton";
import "./SignIn.css";
import { useNavigate, Link } from "react-router-dom";
import  {api}  from "../api.js";
import { AuthContext } from "../context/AuthContext";
import { useState, useContext } from "react";

function SignIn() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/login", form);
      const loggedInUser = res.data.user;
      setUser(loggedInUser);

      if (loggedInUser.role === "Admin") {
        navigate("/Admin");
      } else {
        navigate("/HomeCustomer");
      }
    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
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
              <h1 id="signin-label">Sign In</h1>
              <form
                action=""
                method="POST"
                class="w-75"
                onSubmit={handleSubmit}
              >
                <div class="container mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="container mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    class="form-control"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div class="container mb-3 text-center">
                  <GreenButton
                    type="submit"
                    value="Submit Message"
                    class="contactbtn"
                    id="submit-btn"
                    greenButtonDesc="Sign In"
                  />
                </div>
              </form>
              <div class="container mb-3 d-flex justify-content-center align-items-center">
                <GreenButton
                  greenButtonDesc={<Link to={"/SignUp"}>Sign Up</Link>}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
