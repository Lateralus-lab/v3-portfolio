import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../components/Animation';
import Layout from '../../components/Layout';
import Back from '../../components/svg/back';
import DetailsGithub from '../../components/svg/detailsGithub';
import External from '../../components/svg/external';

export default function logisticsPage() {
  const router = useRouter();

  return (
    <Layout>
      <motion.section
        className="details logistics"
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
              <Link href="https://github.com/Lateralus-lab/logistic">
                <a target="_blank">
                  <div className="details__icon-back">
                    <DetailsGithub />
                  </div>
                </a>
              </Link>
            </div>
            <Link href="https://center-logistics.netlify.app/">
              <a className="details__link" target="_blank">
                <h1 className="details__left-title">
                  A website with multiple pages - Trans &amp; Logistic
                  <External />
                </h1>
              </a>
            </Link>

            <ul className="stack__list">
              {['HTML', 'CSS', 'jQuery', 'PHP', 'MySQL'].map((skill, i) => (
                <li className="stack__item" key={i}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="details__right">
            <div className="details__right-parag">
              <p>
                Trans & Logistic is a website with multiple pages built with
                HTML, CSS and jQuery. For the backend, I used PHP with MySQL
                database for storing data such as name, phone number and email -{' '}
                <Link href="https://github.com/Lateralus-lab/logistic/blob/master/src/logistic.sql">
                  <a className="link" target="_blank">
                    example
                  </a>
                </Link>
                .
              </p>

              <p>
                BEM methodology was used for naming CSS classes to write
                reusable code.
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
            src="/images/logistics.jpeg"
            alt="Trans And Logistics"
            width={1000}
            height={800}
          />
        </motion.div>
      </motion.section>
    </Layout>
  );
}
