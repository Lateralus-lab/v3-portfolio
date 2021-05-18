import { motion } from 'framer-motion';
import Skills from './Skills';

export default function About() {
  return (
    <section className="about">
      <motion.div
        className="title"
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        initial={{ opacity: 0, y: 40 }}
      >
        <h2 className="title__item">
          Ab<span className="multi-color">o</span>ut
        </h2>
      </motion.div>

      <div className="about__wrapper">
        <div className="about__item">
          <p className="about__item-parag">
            I'm a self-taught front-end web developer, and I'm looking for an opportunity to work in a professional environment that will help me progress into a full-stack. I'm currently seeking out the right team to work with other passionate individuals to build digital products that positively impact people's lives.
          </p>

          <p className="about__item-parag">
            I believe in consistently exceeding expectations and continuously learning to be the best in my craft. At this point, I have built multiple applications and websites, from basic HTML/CSS landing pages to more complex React applications using Redux/Redux Saga.           </p>

          <p className="about__item-parag">
            When I'm not in front of a computer screen, I'm probably at the gym or having a good time with friends or family.  I listed all technologies I'm proficient with below:
          </p>
        </div>
        <Skills />
      </div>
    </section>
  );
}
