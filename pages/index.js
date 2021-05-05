import Layout from '../components/Layout';
import Header from '../components/Header';
import Socials from '../components/Socials';
import Projects from '../components/Projects';
import Lab from '../components/Lab';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import About from '../components/About';
import Sticky from '../components/Sticky';

export default function Home() {
  return (
    <Layout>
      <Sticky />
      <Header />
      <Socials />
      <Projects />
      <Lab />
      <Skills />
      <About />
      <Footer />
    </Layout>
  );
}
