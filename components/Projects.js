import Image from 'next/image';

export default function Projects() {
  return (
    <section className="projects">
      <div className="title">
        <h2 className="title__item">Some Things I’ve Built</h2>
      </div>

      <div className="cards">
        <div className="cards__item card1">
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
            <h3 className="cards__title">Project</h3>
            <p>
              Dolor impedit magnam voluptas quo nobis Eius esse explicabo totam
              eaque eligendi Ut quisquam quas similique fuga atque obcaecati{' '}
            </p>
          </div>
        </div>

        <div className="cards__item card2">
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
            <h3 className="cards__title">Project</h3>
            <p>
              Dolor impedit magnam voluptas quo nobis Eius esse explicabo totam
              eaque eligendi Ut quisquam quas similique fuga atque obcaecati{' '}
            </p>
          </div>
        </div>

        <div className="cards__item card3">
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
            <h3 className="cards__title">Project</h3>
            <p>
              Dolor impedit magnam voluptas quo nobis Eius esse explicabo totam
              eaque eligendi Ut quisquam quas similique fuga atque obcaecati{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
