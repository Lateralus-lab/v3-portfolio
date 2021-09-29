import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Dragger from 'react-physics-dragger';

const items = [
  {
    itemClass: 'cards__btn-logistics',
    title: 'Trans & Logistics',
    subTitle: 'A website with multiple pages',
    url: 'logistics',
    id: 1,
  },
  {
    itemClass: 'cards__btn-lofttaxi',
    title: 'Loft Taxi',
    subTitle: 'Taxi booking application',
    url: 'lofttaxi',
    id: 2,
  },
  {
    itemClass: 'cards__btn-myburger',
    title: 'MyBurger',
    subTitle: 'Well-designed landing page',
    url: 'myburger',
    id: 2,
  },
  {
    itemClass: 'cards__btn-chatapp',
    title: 'Chat App',
    subTitle: 'Real-time chat application',
    url: 'chat',
    id: 3,
  },
];

export default function Projects() {
  const rounter = useRouter();

  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <section className="projects">
      <motion.div
        className="title"
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        initial={{ opacity: 0, y: 40 }}
      >
        <h2 className="title__item">
          <span className="multi-color">Some</span> things I’ve Built
        </h2>
      </motion.div>

      <div className="projects__item">
        <Dragger className="dragger" setCursorStyles={true}>
          {items.map((item) => (
            <motion.button
              className={`cards__btn ${item.itemClass}`}
              key={item.id}
              onClick={() => {
                rounter.push(`${item.url}`);
              }}
              whileHover={{ scale: 1.1 }}
              transition={transition}
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
                        <h3
                          className={`cards__header-title ${item.classTitle}`}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <div>
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
            </motion.button>
          ))}
        </Dragger>
      </div>
    </section>
  );
}
