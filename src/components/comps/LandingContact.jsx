import "../styles/LandingContact.css";
import GreenButton from "../units/GreenButton";

const LandingContact = () => {
  return (
    <div id="contact"className="bg-container pt-5">
      <div className="container">
        <div class="w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="contact-head">Contact</h1>
          <form action="" method="POST" class="w-75">
            <div class="container mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input type="name" class="form-control" required />
            </div>
            <div class="container mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" required />
            </div>
            <div class="container pb-3">
              <label for="textarea" required></label>
              <textarea
                name="textarea"
                id="text-message"
                class="form-control"
                placeholder="Enter your text here:"
                rows="10"
              ></textarea>
            </div>
            <div class="container mb-3 text-center">
              <GreenButton
                type="submit"
                value="Submit Message"
                class="contactbtn"
                id="submit-btn"
                greenButtonDesc="Submit Now"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LandingContact;