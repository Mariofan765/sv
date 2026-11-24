import './Details.css';

const Details = ({ countdownDays, countdownHours, countdownMinutes, countdownSeconds }) => {
  const weddingDate = new Date('2027-07-31T16:00:00');
  
  const calendarData = {
    month: 'Июль',
    year: '2027',
    daysInMonth: 31,
    startDay: 1, // Понедельник
  };

  const schedule = [
    { time: '13:30', title: 'Сбор у автобуса', location: 'Памятник Славы', description: 'Отправление в 14:00' },
    { time: '15:30', title: 'Сбор гостей', location: 'Ресторан «Тулинов Дом»', description: 'Знакомимся, обнимаемся и готовимся к церемонии' },
    { time: '16:00', title: 'Начало церемонии', location: 'Ресторан «Тулинов Дом»', description: 'Самый важный момент этого дня' },
  ];

  return (
    <section id="details" className="details-section medieval-details-section">
      <div className="medieval-frame details-intro">
        <p>Когда и где</p>
        <h2>Детали нашего дня</h2>
      </div>

      <div className="medieval-frame calendar-container">
        <div className="calendar-header">
          <span>{calendarData.month}</span>
          <strong>{calendarData.year}</strong>
        </div>
        <div className="calendar-days">
          {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, index) => (
            <span key={index}>{day}</span>
          ))}
        </div>
        <div className="calendar-grid">
          {Array.from({ length: calendarData.startDay - 1 }).map((_, index) => (
            <span key={`empty-${index}`} />
          ))}
          {Array.from({ length: calendarData.daysInMonth }).map((_, index) => {
            const day = index + 1;
            const isWeddingDay = day === 31;
            return (
              <span key={day} className={isWeddingDay ? 'wedding-day' : ''}>
                {isWeddingDay && '♥'}{day}
              </span>
            );
          })}
        </div>
      </div>

      <div className="medieval-frame countdown-container">
        <p>До нашей свадьбы осталось</p>
        <h3>Обратный отсчёт до свадьбы</h3>
        <div className="countdown">
          <div className="countdown-item">
            <strong>{countdownDays}</strong>
            <span>дней</span>
          </div>
          <div className="countdown-separator">·</div>
          <div className="countdown-item">
            <strong>{countdownHours}</strong>
            <span>часов</span>
          </div>
          <div className="countdown-separator">·</div>
          <div className="countdown-item">
            <strong>{countdownMinutes}</strong>
            <span>минут</span>
          </div>
          <div className="countdown-separator">·</div>
          <div className="countdown-item">
            <strong>{countdownSeconds}</strong>
            <span>секунд</span>
          </div>
        </div>
        <p>{weddingDate.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })} · {weddingDate.toLocaleDateString('ru-RU', { weekday: 'long' })} · 16:00</p>
      </div>

      <div className="calendar-buttons">
        <a 
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Свадьба%20Алексеея%20и%20Анны&dates=20270731T123000Z%2F20270731T200000Z&details=Сбор%20гостей%20в%2015%3A30.%20Начало%20церемонии%20в%2016%3A00.%20Обратный%20автобус%20отправляется%20в%2023%3A00%20до%20Памятника%20Славы.&location=Ресторан%20«Тулинов%20Дом»%2C%20Рамонь%2C%20Советская%20улица%2C%201"
          target="_blank"
          rel="noopener noreferrer"
          className="calendar-btn google medieval-btn"
        >
          Google Calendar
        </a>
        <a href="/api/calendar" className="calendar-btn other">
          Apple / другой календарь
        </a>
        <p>Выберите подходящий календарь и подтвердите сохранение события.</p>
      </div>

      <div className="schedule-section">
        {schedule.map((event, index) => (
          <article key={index} className="schedule-item medieval-schedule-item">
            <img src={`/placeholder${index + 4}.jpg`} alt={event.title} />
            <div className="schedule-content">
              <time>{event.time}</time>
              <h3>{event.title}</h3>
              {index === 0 && <p>{event.location}</p>}
              <p>{event.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="medieval-frame venue-section">
        <p>Место проведения</p>
        <h3>Ресторан «Тулинов Дом»</h3>
        <p>Рамонь, Советская улица, 1</p>
        <a 
          href="https://yandex.ru/maps/?text=Ресторан%20Тулинов%20Дом%2C%20Рамонь%2C%20Советская%20улица%2C%201"
          target="_blank"
          rel="noopener noreferrer"
          className="map-link medieval-btn"
        >
          Открыть на карте →
        </a>
      </div>

      <div className="return-bus-section">
        <h3>Автобус отправится в 23:00</h3>
        <p>От ресторана «Тулинов Дом» до Памятника Славы в Воронеже.</p>
        
        <div className="map-links">
          <a href="https://yandex.ru/maps/?text=Ресторан%20Тулинов%20Дом%2C%20Рамонь%2C%20Советская%20улица%2C%201" target="_blank" rel="noopener noreferrer">
            Ресторан на карте
          </a>
          <a href="https://yandex.ru/maps/?text=Памятник%20Славы%2C%20Воронеж" target="_blank" rel="noopener noreferrer">
            Памятник Славы
          </a>
          <a href="https://yandex.ru/maps/?rtext=Рамонь%2C%20Советская%20улица%2C%201~Воронеж%2C%20Памятник%20Славы&rtt=auto" target="_blank" rel="noopener noreferrer">
            Построить маршрут
          </a>
        </div>

        <div className="route-map">
          <div className="route-point">
            <img src="/placeholder7.jpg" alt="Тулинов Дом" />
            <span>23:00</span>
            <strong>«Тулинов Дом»</strong>
          </div>
          <img src="/placeholder8.jpg" alt="Маршрут" />
          <div className="route-point">
            <img src="/placeholder9.jpg" alt="Воронеж" />
            <span>Воронеж</span>
            <strong>Памятник Славы</strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
