import Link from 'next/link';
import Image from 'next/image';
import External from './svg/external';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Projects() {
  const responsive = {
    576: { items: 1 },
    768: { items: 2 },
    992: { items: 3 },
  };

  const items = [
    <div className="cards__item">
      <div className="cards__container">
        <Image
          className="cards__img"
          src="/../public/images/cards/chat-app.jpeg"
          alt="temp"
          width={450}
          height={520}
          objectFit="cover"
        />
      </div>
      <div className="cards__content">
        <div className="cards__top">
          <div className="cards__top-title">
            <h3 className="cards__title">
              <Link href="#">
                <a className="cards__title-link">Chat App</a>
              </Link>
            </h3>
          </div>
          <div className="cards__top-icon">
            <External />
          </div>
        </div>
        <p>
          Dolor impedit magnam voluptas quo nobis Eius esse explicabo totam
          eaque eligendi Ut quisquam quas similique fuga atque obcaecati{' '}
        </p>
      </div>
    </div>,

    <div className="cards__item">
      <div className="cards__container">
        <Image
          className="cards__img"
          src="/../public/images/cards/loft-taxi.jpeg"
          alt="temp"
          width={450}
          height={520}
          objectFit="cover"
        />
      </div>
      <div className="cards__content">
        <div className="cards__top">
          <div className="cards__top-title">
            <h3 className="cards__title">
              <Link href="#">
                <a className="cards__title-link">Taxi Ordering App</a>
              </Link>
            </h3>
          </div>
          <div className="cards__top-icon">
            <External />
          </div>
        </div>
        <p>
          Dolor impedit magnam voluptas quo nobis Eius esse explicabo totam
          eaque eligendi Ut quisquam quas similique fuga atque obcaecati{' '}
        </p>
      </div>
    </div>,

    <div className="cards__item">
      <div className="cards__container">
        <Image
          className="cards__img"
          src="/../public/images/cards/logistics.jpeg"
          alt="temp"
          width={450}
          height={520}
          objectFit="cover"
        />
      </div>
      <div className="cards__content">
        <div className="cards__top">
          <div className="cards__top-title">
            <h3 className="cards__title">
              <Link href="#">
                <a className="cards__title-link">Landing Page</a>
              </Link>
            </h3>
          </div>
          <div className="cards__top-icon">
            <External />
          </div>
        </div>
        <p>
          Dolor impedit magnam voluptas quo nobis Eius esse explicabo totam
          eaque eligendi Ut quisquam quas similique fuga atque obcaecati{' '}
        </p>
      </div>
    </div>,

    <div className="cards__item">
      <div className="cards__container">
        <Image
          className="cards__img"
          src="/../public/images/cards/weather-app.jpeg"
          alt="temp"
          width={450}
          height={520}
          objectFit="cover"
        />
      </div>
      <div className="cards__content">
        <div className="cards__top">
          <div className="cards__top-title">
            <h3 className="cards__title">
              <Link href="#">
                <a className="cards__title-link">Weather App</a>
              </Link>
            </h3>
          </div>
          <div className="cards__top-icon">
            <External />
          </div>
        </div>
        <p>
          Dolor impedit magnam voluptas quo nobis Eius esse explicabo totam
          eaque eligendi Ut quisquam quas similique fuga atque obcaecati{' '}
        </p>
      </div>
    </div>,
  ];

  return (
    <section className="projects">
      <div className="title">
        <h2 className="title__item">
          Some Th<span className="multi-color">in</span>gs I’ve Built
        </h2>
      </div>

      <AliceCarousel
        className="cards"
        items={items}
        responsive={responsive}
        infinite
        mouseTracking
        controlsStrategy="alternative"
        disableButtonsControls
        // animationDuration={1000}
        // autoPlay
        // autoPlayInterval={8000}
      />
    </section>
  );
}
