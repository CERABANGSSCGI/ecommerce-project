import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GreenButton from "../components/units/GreenButton";
import "./SignUp.css";

function SignIn() {
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
              <form action="" method="POST" class="w-75">
                 <div class="container mb-3">
                  <label for="Name" class="form-label">
                    Name
                  </label>
                  <input type="Name" class="form-control" required />
                </div>
                <div class="container mb-3">
                  <label for="email" class="form-label">
                    Email
                  </label>
                  <input type="email" class="form-control" required />
                </div>
                <div class="container mb-3">
                  <label for="password" class="form-label">
                    Password
                  </label>
                  <input type="password" class="form-control" required />
                </div>
                <div class="container mb-3">
                  <label for="confirm-password" class="form-label">
                    Confirm Password
                  </label>
                  <input type="confirm-password" class="form-control" required />
                </div>
                <div class="container mb-3 text-center">
                  <GreenButton
                    type="submit"
                    value="Submit Message"
                    class="contactbtn"
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
}

export default SignIn;
