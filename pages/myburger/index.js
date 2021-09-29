import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../components/Animation';
import Layout from '../../components/Layout';
import Back from '../../components/svg/back';
import DetailsGithub from '../../components/svg/detailsGithub';
import External from '../../components/svg/external';

export default function WeatherappPage() {
  const router = useRouter();

  return (
    <Layout>
      <motion.section
        className="details myburger"
        exit="exit"
        variants={pageAnimation}
        initial="exit"
        animate="show"
      >
        <div className="details__container">
          <motion.div
            className="details__left"
            initial={{ opacity: 0, x: -800 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            <div className="details__top">
              <div
                className="details__icon-back"
                onClick={() => router.push('/')}
              >
                <Back />
              </div>
              <Link href="https://github.com/Lateralus-lab/myburger">
                <a target="_blank">
                  <div className="details__icon-back">
                    <DetailsGithub />
                  </div>
                </a>
              </Link>
            </div>
            <Link href="https://myburger-lp.netlify.app">
              <a className="details__link" target="_blank">
                <h1 className="details__left-title">
                  MyBurger - Landing Page
                  <External />
                </h1>
              </a>
            </Link>

            <ul className="stack__list">
              {['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL/SQL'].map(
                (skill, i) => (
                  <li className="stack__item" key={i}>
                    {skill}
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <div className="details__right">
            <div className="details__right-parag">
              <p>MyBurger is a landing page for taking orders online.</p>

              <p>
                I used PHP for the backend and MySQL to store users data. I
                implemented form validation which checks whether an email is
                unique. If the entered email has been used before, order count
                value increments by one in the database -{' '}
                <Link href="https://github.com/Lateralus-lab/myburger/blob/master/includes/burger_db.sql">
                  <a className="link" target="_blank">
                    example
                  </a>
                </Link>
                .
              </p>
            </div>
          </div>
        </div>

        <motion.div
          className="details__bottom"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Image
            className="details__img"
            src="/images/myburger.jpeg"
            alt="Weather App"
            width={1000}
            height={800}
          />
        </motion.div>
      </motion.section>
    </Layout>
  );
}
