import "../styles/LandingFeedback.css";

const LandingFeedback = () => {
  return (
    <div className="bg-feedback d-flex justify-content-center align-items-center mt-5">
      <div className="row container mt-5 d-flex justify-content-center align-items-center">
        <div className="feedback-head mb-3">
          <h1>Love from our Community</h1>
          <p>feedbacks</p>
        </div>
        <div className="row feedback-container d-flex justify-content-center align-items-center mb-5">
          <img
            src="src/assets/logo.png"
            alt=""
            className="feedback-img col-12 col-md-6 mb-2"
          />
          <div className="feedback-desc col-12 col-md-6 mt-5">
            <h3>"Absolutely love it!"</h3>
            <p>
              I wasn’t expecting to love it this much! The quality is excellent,
              and you can really feel the craftsmanship. It arrived quickly and
              was packaged with care. Perfect for everyday use or gifting.
              Definitely one of my favorite finds — I’ll be recommending this to
              friends and ordering again soon!
            </p>
            <h5>-Maria O.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingFeedback;
