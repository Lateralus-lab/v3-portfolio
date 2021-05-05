import Link from 'next/link';
import Image from 'next/image';
import External from './svg/external';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

export default function Projects() {
  return (
    <section className="projects">
      <div className="title">
        <h2 className="title__item">
          Some Th<span className="multi-color">in</span>gs I’ve Built
        </h2>
      </div>

      <div className="cards">
        <Swiper
          className="MySwiper"
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            992: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 1,
            },
            200: {
              slidesPerView: 1,
            },
          }}
        >
          <SwiperSlide className="cards__item card1">
            <div className="cards__container">
              <Image
                className="cards__img"
                src="/../public/images/photo-1620037721506-fef9f052c740.jpeg"
                alt="temp"
                width={450}
                height={550}
                objectFit="cover"
              />
            </div>
            <div className="cards__content">
              <div className="cards__top">
                <div className="cards__top-title">
                  <h3 className="cards__title">
                    <Link href="#">
                      <a className="cards__title-link">Project</a>
                    </Link>
                  </h3>
                </div>
                <div className="cards__top-icon">
                  <External />
                </div>
              </div>

              <p>
                Dolor impedit magnam voluptas quo nobis Eius esse explicabo
                totam eaque eligendi Ut quisquam quas similique fuga atque
                obcaecati{' '}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="cards__item card2">
            <div className="cards__container">
              <Image
                className="cards__img"
                src="/../public/images/photo-1620037721506-fef9f052c740.jpeg"
                alt="temp"
                width={450}
                height={550}
                objectFit="cover"
              />
            </div>
            <div className="cards__content">
              <div className="cards__top">
                <div className="cards__top-title">
                  <h3 className="cards__title">
                    <Link href="#">
                      <a className="cards__title-link">Project</a>
                    </Link>
                  </h3>
                </div>
                <div className="cards__top-icon">
                  <External />
                </div>
              </div>
              <p>
                Dolor impedit magnam voluptas quo nobis Eius esse explicabo
                totam eaque eligendi Ut quisquam quas similique fuga atque
                obcaecati{' '}
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="cards__item card3">
            <div className="cards__container">
              <Image
                className="cards__img"
                src="/../public/images/photo-1620037721506-fef9f052c740.jpeg"
                alt="temp"
                width={450}
                height={550}
                objectFit="cover"
              />
            </div>
            <div className="cards__content">
              <div className="cards__top">
                <div className="cards__top-title">
                  <h3 className="cards__title">
                    <Link href="#">
                      <a className="cards__title-link">Project</a>
                    </Link>
                  </h3>
                </div>
                <div className="cards__top-icon">
                  <External />
                </div>
              </div>
              <p>
                Dolor impedit magnam voluptas quo nobis Eius esse explicabo
                totam eaque eligendi Ut quisquam quas similique fuga atque
                obcaecati{' '}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
