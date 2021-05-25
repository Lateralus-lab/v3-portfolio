import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../components/Animation';
import Layout from '../../components/Layout';
import Back from '../../components/svg/back';
import DetailsGithub from '../../components/svg/detailsGithub';
import External from '../../components/svg/external';

export default function LofttaxiPage() {
  const router = useRouter();

  return (
    <Layout>
      <motion.section
        className="details lofttaxi"
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
              <Link href="https://github.com/Lateralus-lab/loft-taxi">
                <a target="_blank">
                  <div className="details__icon-back">
                    <DetailsGithub />
                  </div>
                </a>
              </Link>
            </div>
            <Link href="https://loft-taxi.netlify.app/">
              <a className="details__link" target="_blank">
                <h1 className="details__left-title">
                  Taxi Booking Application - LoftTaxi
                  <External />
                </h1>
              </a>
            </Link>

            <ul className="stack__list">
              {[
                'React',
                'Redux',
                'Redux Saga',
                'React Router',
                'React Hook Form',
                'MapboxGL',
                'SASS',
                'Material UI',
              ].map((skill, i) => (
                <li className="stack__item" key={i}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="details__right">
            <div className="details__right-parag">
              <p>
                LoftTaxi - a taxi booking application I built with React and
                Redux/Redux Saga. This application uses the back-end server
                created explicitly for authorization, getting a list of
                addresses and routes for a map. MapboxGL was used to render an
                interactive map.
              </p>

              <p>
                The application also includes a user authorization/registration
                system to sign in with accounts and book a taxi and React Hook
                Form for form validation. To style this application, I mostly
                used SASS and, to save time, some MaterialUI components.
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
            src="/images/lofttaxi.jpeg"
            alt="LoftTaxi"
            width={1000}
            height={800}
          />
        </motion.div>
      </motion.section>
    </Layout>
  );
}
