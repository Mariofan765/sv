import './Intro.css';

function Intro() {
    return (
        <section className="intro-section medieval-intro-section">
            <div className="medieval-frame intro-content">
                <span className="decorative-element gold-shimmer">✦</span>
                <span className="intro-title">Дорогие родные и друзья!</span>
                <span className="intro-subtitle">Совсем скоро наступит день, который мы хотим разделить с самыми близкими. Будем счастливы видеть вас рядом и вместе открыть новую главу нашей истории.</span>
                <div className="divider divider-medieval"></div>
                <div className="cta-box medieval-cta-box">
                    <span className="cta-heading">Мы очень рады видеть каждого из вас!</span>
                    <span className="cta-text">Вы — важная часть нашей жизни, и нам особенно ценно, что в этот день вы будете рядом. Спасибо, что разделите с нами улыбки, волнение и начало нашей семейной истории.</span>
                </div>
                <div className="divider divider-medieval"></div>
                <span className="intro-signature">С любовью, Алексей и Анна</span>
            </div>
        </section>
    )
}

export default Intro