import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Socials from '../components/Socials';
import Projects from '../components/Projects';
import Lab from '../components/Lab';
import Footer from '../components/Footer';
import About from '../components/About';

export default function Home() {
  return (
    <Layout>
      <motion.div exit={{ opacity: 0 }}>
        <Header />
        <Socials />
        <Projects />
        <Lab />
        <About />
        <Footer />
      </motion.div>
    </Layout>
  );
}
