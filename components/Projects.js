import Dragger from 'react-physics-dragger';

const items = [
  {
    class: 'card__one',
    title: 'Project One',
    subTitle: 'Subtitle One',
    id: 1,
  },
  {
    class: 'card__two',
    title: 'Project Two',
    subTitle: 'Subtitle Two',
    id: 2,
  },
  {
    class: 'card__three',
    title: 'Project Three',
    subTitle: 'Subtitle Three',
    id: 3,
  },
  {
    class: 'card__four',
    title: 'Project Four',
    subTitle: 'Subtitle Four',
    id: 4,
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <div className="title">
        <h2 className="title__item">
          Some Th<span className="multi-color">in</span>gs I’ve Built
        </h2>
      </div>

      <div className="projects__item">
        <Dragger className="dragger" setCursorStyles={true}>
          {items.map((item) => (
            <button
              className="cards__btn cards__btn-one"
              key={item.id}
              onClick={() => console.log(`clicked ${item.id}`)}
            >
              <div className="cards">
                <div className="cards__item">
                  <div className="cards__link">
                    <div className="cards__icon">
                      <svg viewBox="0 0 1129 994">
                        <g
                          fill="none"
                          fillRule="nonzero"
                          stroke="#999"
                          strokeWidth="41"
                        >
                          <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                          <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                          <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
                        </g>
                      </svg>
                    </div>

                    <div className="cards__media">
                      <svg viewBox="0 0 1129 994">
                        <g
                          fill="none"
                          fillRule="nonzero"
                          stroke="#F5F5F5"
                          strokeWidth="41"
                        >
                          <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                          <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                          <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
                        </g>
                      </svg>
                    </div>

                    <div className="cards__header">
                      <div>
                        <h3 className="cards__header-title">{item.title}</h3>
                        <p className="cards__header-meta">{item.subTitle}</p>
                      </div>
                      <div className="cards__header-icon">
                        <svg viewBox="0 0 28 25">
                          <path
                            fill="#fff"
                            d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </Dragger>
      </div>
    </section>
  );
}
