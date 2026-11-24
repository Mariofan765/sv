import './HeroCard.css';

function HeroCard() {
    return (
        <div className="hero-card medieval-hero-card">
            <div className="hero-monogram">
                <div className="medieval-monogram">
                    <span className="monogram-letter">A</span>
                    <span className="monogram-letter">&</span>
                    <span className="monogram-letter">A</span>
                </div>
            </div>
            <div className="hero-copy">
                <p className="eyebrow gold-shimmer">✦ Приглашение на свадьбу ✦</p>
                <h1 className="medieval-title">
                    <span className="fade-in-up" style={{animationDelay: '0.1s'}}>Алексей</span>
                    <i className="medieval-ampersand">&</i>
                    <span className="fade-in-up" style={{animationDelay: '0.2s'}}>Анна</span>
                </h1>
                <div className="flourish flourish-medieval">❧</div>
                <p className="hero-date fade-in-up" style={{animationDelay: '0.3s'}}>31 · 07 · 2027</p>
                <p className="hero-day fade-in-up" style={{animationDelay: '0.4s'}}>Суббота</p>
                <a className="button-primary medieval-btn gold-shimmer" href="#rsvp">
                    Подтвердить присутствие
                </a>
            </div>
        </div>
    );
}

export default HeroCard;