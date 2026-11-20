import './Timeline.css';

const Timeline = () => {
  const timelineEvents = [
    { year: '2018', title: 'Знакомство', description: 'Мы познакомились в школе' },
    { date: '5 февраля 2025', title: 'Начало отношений', description: 'День, с которого началась наша общая история' },
    { date: '1 января 2026', title: 'Предложение', description: 'Мы сказали друг другу главное «да»' },
    { date: '31 июля 2027', title: 'Наша свадьба', description: 'День, который мы разделим с вами' },
  ];

  return (
    <section className="timeline-section">
      <div className="timeline-intro">
        <p>Немного о нас</p>
        <h2>Наша история</h2>
        <p>Наша история уже началась. Будем счастливы разделить с вами её самый важный день.</p>
      </div>

      <div className="timeline-events">
        {timelineEvents.map((event, index) => (
          <article key={index} className="timeline-event">
            <time>{event.year || event.date}</time>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
          </article>
        ))}
      </div>

      <div className="photos-section">
        <h2>Фотографии Алексея и Анны</h2>
        <div className="photo-grid">
          <figure>
            <img src="/placeholder1.jpg" alt="Алексей и Анна вместе" />
            <figcaption>Алексей и Анна вместе</figcaption>
          </figure>
          <figure>
            <img src="/placeholder2.jpg" alt="Алексей и Анна на студийной фотосессии" />
            <figcaption>Алексей и Анна на студийной фотосессии</figcaption>
          </figure>
          <figure>
            <img src="/placeholder3.jpg" alt="Портрет Алексея и Анны" />
            <figcaption>Портрет Алексея и Анны</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
