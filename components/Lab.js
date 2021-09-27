import { motion } from 'framer-motion';
import Link from 'next/link';
import Flask from './svg/flask';

const items = [
  {
    title: 'MVC PHP',
    text: 'I built a mini-blog website with PHP using an Object-Oriented style of programming and MVC architecture pattern.',
    link: 'https://github.com/Lateralus-lab/mvc-php',
    id: 1,
  },
  {
    title: 'HTML Email',
    text: 'I re-created an HTML Email template from boohooMAN with the MJML framework. The template is mobile responsive and works on popular email clients.',
    link: 'https://codepen.io/zoofoo/pen/ZEGmNEv',
    id: 2,
  },
  {
    title: 'Widgets',
    text: 'A collection of widgets. These widgets are built with Javascript and can easily be integrated into any project.',
    link: 'https://codepen.io/collection/dbbPPv',
    id: 3,
  },
];

export default function Lab() {
  return (
    <section className="lab">
      <motion.div
        className="title"
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        initial={{ opacity: 0, y: 40 }}
      >
        <h2 className="title__item">
          <span className="multi-color">Noteworthy</span> Projects
        </h2>
      </motion.div>

      {items.map((item) => (
        <div className="board" key={item.id}>
          <Link href={item.link}>
            <a className="board__link" target="_blank">
              <div className="board__item">
                <div className="board__link">
                  <div className="board__icon">
                    <Flask />
                  </div>
                </div>
              </div>

              <div className="board__content">
                <h3 className="board__content-title">{item.title}</h3>
                <div className="board__content-desc">
                  <p>{item.text}</p>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </section>
  );
}
