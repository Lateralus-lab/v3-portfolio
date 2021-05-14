import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import Back from '../../components/svg/back';
import DetailsGithub from '../../components/svg/detailsGithub';
import External from '../../components/svg/external';

export default function LofttaxiPage() {
  const router = useRouter();

  return (
    <Layout>
      <section className="details lofttaxi">
        <div className="details__container">
          <div className="details__left">
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
              <li className="stack__item">React</li>
              <li className="stack__item">Rudux</li>
              <li className="stack__item">Redux Saga</li>
              <li className="stack__item">React Router</li>
              <li className="stack__item">React Hook Form</li>
              <li className="stack__item">MapboxGL</li>
              <li className="stack__item">SASS</li>
              <li className="stack__item">Material UI</li>
            </ul>
          </div>

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
            src="/../public/images/lofttaxi.jpeg"
            alt="LoftTaxi"
            width={1000}
            height={800}
          />
        </div>
      </section>
    </Layout>
  );
}
