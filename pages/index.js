import Layout from '../components/Layout';
import Header from '../components/Header';
import Socials from '../components/Socials';
import Projects from '../components/Projects';
import Lab from '../components/Lab';

export default function Home() {
  return (
    <Layout>
      <Header />
      <Socials />
      <Projects />
      <Lab />
    </Layout>
  );
}
