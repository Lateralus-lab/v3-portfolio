import Link from 'next/link';
import Image from 'next/image';
import External from './svg/external';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function Projects() {
  const responsive = {
    576: { items: 1 },
    768: { items: 2 },
    992: { items: 2 },
  };

  const items = [
    <div className="cards__item">
      <div className="cards__container">
        <Image
          className="cards__img"
          src="/../public/images/cards/chat-app.jpeg"
          alt="temp"
          width={450}
          height={540}
          objectFit="cover"
        />
      </div>
    </div>,

    <div className="cards__item">
      <div className="cards__container">
        <Image
          className="cards__img"
          src="/../public/images/cards/loft-taxi.jpeg"
          alt="temp"
          width={450}
          height={540}
          objectFit="cover"
        />
      </div>
    </div>,

    <div className="cards__item">
      <div className="cards__container">
        <Image
          className="cards__img"
          src="/../public/images/cards/logistics.jpeg"
          alt="temp"
          width={450}
          height={540}
          objectFit="cover"
        />
      </div>
    </div>,

    <div className="cards__item">
      <div className="cards__container">
        <Image
          className="cards__img"
          src="/../public/images/cards/weather-app.jpeg"
          alt="temp"
          width={450}
          height={540}
          objectFit="cover"
        />
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
        animationDuration={1000}
        autoPlay
        autoPlayInterval={8000}
      />
    </section>
  );
}
