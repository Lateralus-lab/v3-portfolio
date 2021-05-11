import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import Back from '../components/svg/back';
import External from '../components/svg/external';

export default function ChatPage() {
  const router = useRouter();

  return (
    <Layout>
      <section className="details chatapp">
        <div className="details__container">
          <div className="details__left">
            <div
              className="details__icon-back"
              onClick={() => router.push('/')}
            >
              <Back />
            </div>
            <Link href="#">
              <a className="details__link" target="_blank">
                <h1 className="details__left-title">
                  Real-Time Chat Application
                  <External />
                </h1>
              </a>
            </Link>
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
        {/* <svg className="details__triangle" viewBox="0 0 1129 994"> */}
        {/*   <g fill="none" fillRule="nonzero" stroke="#F5F5F5" strokeWidth="41"> */}
        {/*     <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" /> */}
        {/*     <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" /> */}
        {/*     <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" /> */}
        {/*   </g> */}
        {/* </svg> */}
      </section>
    </Layout>
  );
}
