import './RSVP.css';

const RSVP = () => {
  return (
    <section id="rsvp" className="rsvp-section">
      <div className="rsvp-intro">
        <p>Будете ли вы с нами?</p>
        <h2>Анкета гостя</h2>
        <p>Пожалуйста, заполните небольшую анкету. Так мы узнаем, кого ждать, кому нужен автобус и какие напитки подготовить.</p>
        
        <div className="rsvp-date">
          <span>31 июля 2027 · суббота</span>
        </div>
        
        <strong>Ответьте, пожалуйста, до 1 июня 2027 года</strong>
      </div>

      <form className="rsvp-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="name">Ваше имя и фамилия *</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Например, Иван и Мария Петровы" 
            required
          />
          <span>Если отвечаете за семью или пару, укажите всех гостей.</span>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Телефон для связи *</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="+7 900 000-00-00" 
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="guests">Количество гостей</label>
          <select id="guests" name="guests">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Сможете ли вы присутствовать? *</label>
          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" name="attendance" value="yes" defaultChecked />
              <span>С радостью буду</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="attendance" value="no" />
              <span>К сожалению, не смогу</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Как вы планируете добраться? *</label>
          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" name="transport" value="bus" defaultChecked />
              <span>На свадебном автобусе</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="transport" value="own" />
              <span>Самостоятельно</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="transport" value="undecided" />
              <span>Пока не решили</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Как вы планируете добираться обратно?</label>
          <div className="radio-group">
            <label className="radio-option">
              <input type="radio" name="return-transport" value="bus" defaultChecked />
              <span>На автобусе в 23:00 до Памятника Славы</span>
            </label>
            <label className="radio-option">
              <input type="radio" name="return-transport" value="own" />
              <span>Самостоятельно</span>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="alcohol">Ваше предпочтение в алкоголе *</label>
          <select id="alcohol" name="alcohol" required>
            <option value="white">Белое вино</option>
            <option value="red">Красное вино</option>
            <option value="strong">Крепкий алкоголь</option>
            <option value="none">Не употребляю алкоголь</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dance">Под какую песню вы точно выйдете танцевать?</label>
          <input 
            type="text" 
            id="dance" 
            name="dance" 
            placeholder="Исполнитель — название песни"
          />
        </div>

        <div className="form-group">
          <label htmlFor="comment">Комментарий</label>
          <textarea 
            id="comment" 
            name="comment" 
            placeholder="Пожелания, особенности питания или важная информация"
            rows="4"
          />
        </div>

        <button type="submit" className="submit-btn">Отправить ответ</button>
        
        <p className="privacy-note">Ответ увидят только Алексей и Анна.</p>
      </form>
    </section>
  );
};

export default RSVP;
