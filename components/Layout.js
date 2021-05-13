import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Layout({ title, keywords, description, children }) {
  const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="desc" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.main
        className="container"
        exit={{ opacity: 0 }}
        transition={transition}
      >
        {children}
      </motion.main>
    </div>
  );
}

Layout.defaultProps = {
  title: 'Eli Krizevski | Web Developer Portfolio',
  description: 'Web Developer Portfolio',
  keywords: 'Javascript, React, Nextjs, Portfolio, HTML, CSS, Eli, Krizevski',
};
