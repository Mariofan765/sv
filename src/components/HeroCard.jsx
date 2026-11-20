import './HeroCard.css';

function HeroCard() {
    return (
        <div className="hero-card">
            <div className="hero-monogram">
                <img src="/monogram-aa.svg" alt="" />
            </div>
            <div className="hero-copy">
                <p className="eyebrow">Приглашение на свадьбу</p>
                <h1>
                    <span>Алексей</span>
                    <i>&amp;</i>
                    <span>Анна</span>
                </h1>
                <div className="flourish">❧</div>
                <p className="hero-date">31 · 07 · 2027</p>
                <p className="hero-day">Суббота</p>
                <a className="button-primary" href="#rsvp">
                    Подтвердить присутствие
                </a>
            </div>
        </div>
    );
}

export default HeroCard;