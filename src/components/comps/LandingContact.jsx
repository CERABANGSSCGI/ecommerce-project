import "../styles/LandingContact.css";
import GreenButton from "../units/GreenButton";

const LandingContact = () => {
  return (
    <div id="contact" className="bg-container pt-5">
      <div className="container d-flex justify-content-center align-items-center">
        <div class="w-100 d-flex flex-column justify-content-center align-items-center">
          <h1 className="contact-head">Contact</h1>
          <form action="" method="POST" class="w-75">
            <div class="container mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input type="name" class="form-control" placeholder="e.g. Juan Dela Cruz" required />
            </div>
            <div class="container mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input type="email" class="form-control" placeholder="e.g. juandelacruz@email.com" required />
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
        <div className="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.9016089495676!2d121.0442652749263!3d14.718154385782245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b124c4aeecf9%3A0x54ac7888010dcbc!2sKAPE%20%2F%20KALAKAL!5e0!3m2!1sen!2sph!4v1755236207533!5m2!1sen!2sph"
            width="400"
            height="300"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default LandingContact;
