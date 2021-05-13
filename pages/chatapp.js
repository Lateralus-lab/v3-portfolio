import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/Animation';
import Layout from '../components/Layout';
import Back from '../components/svg/back';
import DetailsGithub from '../components/svg/detailsGithub';
import External from '../components/svg/external';

export default function ChatPage() {
  const router = useRouter();

  const transition = { duration: 0.9, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <Layout>
      <motion.section
        className="details chatapp"
        exit="exit"
        variants={pageAnimation}
        initial="exit"
        animate="show"
      >
        <div className="details__container">
          <motion.div
            className="details__left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="details__top">
              <div
                className="details__icon-back"
                onClick={() => router.push('/')}
              >
                <Back />
              </div>
              <Link href="https://github.com/Lateralus-lab/chat-app">
                <a target="_blank">
                  <div className="details__icon-back">
                    <DetailsGithub />
                  </div>
                </a>
              </Link>
            </div>
            <Link href="https://messenger-eli.netlify.app/">
              <a className="details__link" target="_blank">
                <h1 className="details__left-title">
                  Real-Time Chat Application
                  <External />
                </h1>
              </a>
            </Link>

            <ul className="stack__list">
              <li className="stack__item">React</li>
              <li className="stack__item">Firebase</li>
              <li className="stack__item">SASS</li>
              <li className="stack__item">Formik</li>
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

        <div className="details__bottom">
          <Image
            className="details__img"
            src="/../public/images/chatapp.jpeg"
            alt="Chat App"
            width={1000}
            height={800}
          />
        </div>
      </motion.section>
    </Layout>
  );
}
