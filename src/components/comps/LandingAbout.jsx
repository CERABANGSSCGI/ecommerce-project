import "../styles/LandingAbout.css"

const LandingAbout = () => {
  return (
    <div>
      <div className="container-about container d-flex justify-content-center align-items-center mt-5 mb-5">
        <img src="src/assets/coffee-cappuccino.jpg" alt="coffee cappuccino" id="landing-about-img" className=""/>
        <div id="landing-about-desc" className="d-flex flex-column ms-5">
          <h1>Kape Kalakal is a cozy local store built on culture and community.</h1>
          <p>We offer carefully chosen goods — from local brews to handmade finds — all rooted in Filipino warmth and craftsmanship. Every visit is a chance to discover, connect, and support homegrown trade</p>
        </div>
      </div>
    </div>
  )
}

export default LandingAbout