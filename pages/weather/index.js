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
        className="details weatherapp"
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
              <Link href="https://github.com/Lateralus-lab/weather-app">
                <a target="_blank">
                  <div className="details__icon-back">
                    <DetailsGithub />
                  </div>
                </a>
              </Link>
            </div>
            <Link href="https://weather-app2203.netlify.app/">
              <a className="details__link" target="_blank">
                <h1 className="details__left-title">
                  Weather Application
                  <External />
                </h1>
              </a>
            </Link>

            <ul className="stack__list">
              {['HTML', 'CSS', 'JavaScript', 'API'].map((skill, i) => (
                <li className="stack__item" key={i}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="details__right">
            <div className="details__right-parag">
              <p>
                This is a simple weather application I built with HTML/CSS and
                JavaScript. I used OpenWeatherMap API to get the weather for any
                city you request.
              </p>

              <p>
                It was one of the first projects I built, and I decided to
                include it in my portfolio to demonstrate that I'm constantly
                learning and improving.
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
            src="/../public/images/weatherapp.jpeg"
            alt="Weather App"
            width={1000}
            height={800}
          />
        </motion.div>
      </motion.section>
    </Layout>
  );
}
