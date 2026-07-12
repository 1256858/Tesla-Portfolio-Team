import teslaImage from "../assets/image/images.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">
          THE MAN WHO INVENTED THE FUTURE
        </p>

        <h1>
          NIKOLA <span>TESLA</span>
        </h1>

        <p className="hero-description">
          Inventor, electrical engineer, and visionary who changed the world
          with his revolutionary ideas.
        </p>

        <a href="#about" className="hero-btn">
          Discover His Story ⚡
        </a>
      </div>

      <div className="hero-image">
        <img src={teslaImage} alt="Nikola Tesla" />
      </div>
    </section>
  );
}

export default Hero;