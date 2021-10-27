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
          <span className="multi-color">About</span> Me
        </h2>
      </motion.div>

      <div className="about__wrapper">
        <div className="about__item">
          <p className="about__item-parag">
            A passionate Front-End Web Developer with 1+ years of experience in
            structuring, developing and implementing interactive websites. Able
            to complete projects efficiently and satisfy customers with
            attractive, user-friendly websites.
          </p>

          <p className="about__item-parag">
            I believe in consistently exceeding expectations and continuously
            learning to be the best in my craft. At this point, I have built
            multiple applications and websites. From basic HTML, CSS and
            JavaScript to React.js and PHP/MySQL full-stack applications.
          </p>

          <p className="about__item-parag">
            I'm currently seeking the right team to work with other passionate
            individuals to build digital products that positively impact people
            lives.
          </p>
        </div>
        <Skills />
      </div>
    </section>
  );
}
