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
            I'm a self-taught front-end web developer, and I'm looking for an
            opportunity to work in an environment that will help me progress
            into a full-stack role. I'm currently seeking out the right team to
            work with other passionate individuals to build digital products
            that positively impact people's lives.
          </p>

          <p className="about__item-parag">
            I believe in consistently exceeding expectations and continuously
            learning to be the best in my craft. I enjoy turning complex
            problems into simple, beautiful and intuitive solutions. I'm
            primarily focused on creating performant websites/applications that
            are simple and intuitive to view and maintain.
          </p>

          <p className="about__item-parag">
            When I'm not in front of a computer screen, I'm probably at the gym
            or having a good time with friends or family. I listed a list of
            technologies I'm primarily working with below:
          </p>
        </div>
        <Skills />
      </div>
    </section>
  );
}
