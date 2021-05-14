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
                I'm currently an Engineer at Upstatement building things for the
                web with some awesome people. I recently graduated from
                Northeastern University after completing three awesome six-month
                co-ops at MullenLowe U.S., Starry, and Apple Music.
              </p>

              <p>
                As a software engineer, I enjoy bridging the gap between
                engineering and design — combining my technical knowledge with
                my keen eye for design to create a beautiful product. My goal is
                to always build applications that are scalable and efficient
                under the hood while providing engaging, pixel-perfect user
                experiences.
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
            src="/../public/images/lofttaxi.jpeg"
            alt="LoftTaxi"
            width={1000}
            height={800}
          />
        </motion.div>
      </motion.section>
    </Layout>
  );
}
