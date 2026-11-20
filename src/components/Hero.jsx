import './Hero.css';

const Hero = () => {
  return (
    <section id="top" className="hero">
      <div className="hero-intro">
        <p>Приглашение на свадьбу</p>
        <h1>Алексей & Анна</h1>
        <div className="flourish">❧</div>
        <p className="hero-date">31 · 07 · 2027</p>
        <p className="hero-day">Суббота</p>
        <button className="hero-button" id="rsvp">
          Подтвердить присутствие
        </button>
      </div>
      <p className="scroll-down">Листайте вниз</p>
    </section>
  );
};

export default Hero;
