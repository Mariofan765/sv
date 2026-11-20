import './Gift.css';

const Gift = () => {
  return (
    <section className="gift-section">
      <div className="gift-image">
        <img src="/placeholder12.jpg" alt="Букет цветов" />
      </div>
      
      <div className="gift-content">
        <p>Пожелание</p>
        <h2>Вместо цветов</h2>
        <p>Будем рады, если вместо букета цветов вы подарите нам бутылочку вина — мы с теплом вспомним наш праздник, открывая её после свадьбы.</p>
      </div>
      
      <div className="gift-image">
        <img src="/placeholder13.jpg" alt="Бутылка вина" />
      </div>
    </section>
  );
};

export default Gift;
