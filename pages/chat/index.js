import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../components/Animation';
import Layout from '../../components/Layout';
import Back from '../../components/svg/back';
import DetailsGithub from '../../components/svg/detailsGithub';
import External from '../../components/svg/external';

export default function ChatPage() {
  const router = useRouter();

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
              {['React', 'Firebase', 'SASS', 'Formik'].map((skill, i) => (
                <li className="stack__item" key={i}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="details__right">
            <div className="details__right-parag">
              <p>
                Mobile responsive real-time chat application. I built the
                front-end with React, Firebase for the user
                authorization/registration, and I used Firestore as the back-end
                for storing users data.
              </p>

              <p>
                Since Firebase doesn't provide a presence system for online
                users out of the box - I wrote a function that checks messages
                from all users. If the user has a unique id, it displays the
                user's information (such as name and avatar) in the sidebar.
              </p>

              <p>
                It was a fun project to work with as I learned about
                Firebase/Firestore while building this application.
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
            src="/images/chatapp.jpeg"
            alt="Chat App"
            width={1000}
            height={800}
          />
        </motion.div>
      </motion.section>
    </Layout>
  );
}
