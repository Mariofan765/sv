import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-intro">
        <p>Остались вопросы?</p>
        <h2>Мы на связи</h2>
      </div>

      <div className="contact-cards">
        <a href="tel:+79805389298" className="contact-card">
          <img src="/placeholder10.jpg" alt="Анна, невеста" />
          <div className="contact-info">
            <h3>Анна, невеста</h3>
            <p>+7 980 538-92-98</p>
          </div>
        </a>

        <a href="tel:+79102857895" className="contact-card">
          <img src="/placeholder11.jpg" alt="Алексей, жених" />
          <div className="contact-info">
            <h3>Алексей, жених</h3>
            <p>+7 910 285-78-95</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Contact;
