import Link from 'next/link';
import Flask from './svg/flask';

export default function Lab() {
  return (
    <section className="lab">
      <div className="title">
        <h2 className="title__item">
          Exp<span className="multi-color">er</span>imental Lab
        </h2>
      </div>

      <div className="board">
        <div className="board__item">
          <Link href="#">
            <a className="board__link">
              <Flask />
            </a>
          </Link>
        </div>

        <div className="board__content">
          <Link href="#">
            <a className="board__link">
              <h3 className="board__content-title">Reusable Components</h3>
            </a>
          </Link>
          <div className="board__content-desc">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>

      <div className="board">
        <div className="board__item">
          <Link href="#">
            <a className="board__link">
              <Flask />
            </a>
          </Link>
        </div>

        <div className="board__content">
          <Link href="#">
            <a className="board__link">
              <h3 className="board__content-title">HTML Email</h3>
            </a>
          </Link>
          <div className="board__content-desc">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>

      <div className="board">
        <div className="board__item">
          <Link href="#">
            <a className="board__link">
              <Flask />
            </a>
          </Link>
        </div>

        <div className="board__content">
          <Link href="#">
            <a className="board__link">
              <h3 className="board__content-title">Widgets</h3>
            </a>
          </Link>
          <div className="board__content-desc">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
