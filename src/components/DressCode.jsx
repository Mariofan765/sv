import './DressCode.css';

const DressCode = () => {
  const colorPalette = [
    { name: 'Чёрный', color: '#000000', text: '#fff' },
    { name: 'Бежевый', color: '#f5f5dc', text: '#000' },
    { name: 'Песочный', color: '#f4a460', text: '#000' },
    { name: 'Кофейный', color: '#8b4513', text: '#fff' },
    { name: 'Шоколадный', color: '#7b3f00', text: '#fff' },
    { name: 'Серый', color: '#808080', text: '#fff' },
    { name: 'Графитовый', color: '#36454F', text: '#fff' },
    { name: 'Пыльно-розовый', color: '#b8a2d9', text: '#000' },
    { name: 'Лавандовый', color: '#e6e6fa', text: '#000' },
    { name: 'Шалфейный', color: '#95b3a7', text: '#fff' },
    { name: 'Оливковый', color: '#808000', text: '#fff' },
    { name: 'Изумрудный', color: '#50c878', text: '#fff' },
    { name: 'Винный', color: '#722F37', text: '#fff' },
    { name: 'Тёмно-синий', color: '#191970', text: '#fff' },
  ];

  return (
    <section id="dress-code" className="dress-code-section">
      <div className="dress-code-intro">
        <p>Для вашего образа</p>
        <h2>Дресс-код</h2>
        <p>Будем рады образам в спокойных, приглушённых оттенках. Выбирайте цвет, в котором вам комфортно. Просим по возможности избегать неоновых и слишком ярких цветов и рисунков. Полностью белые и молочные образы оставим для невесты 🤍</p>
      </div>

      <div className="color-palette">
        <h3>Вот варианты цветов для вас</h3>
        <div className="palette-grid">
          {colorPalette.map((color, index) => (
            <span key={index} className="palette-color" style={{ 
              '--palette-color': color.color,
              '--palette-text': color.text,
             }}>
              <span className="color-dot" style={{ backgroundColor: color.color }}></span>
              {color.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DressCode;
