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
        <Link href="https://codepen.io/zoofoo/pen/ZEGmNEv">
          <a className="board__link" target="_blank">
            <div className="board__item">
              <div className="board__link">
                <div className="board__icon">
                  <Flask />
                </div>
              </div>
            </div>

            <div className="board__content">
              <h3 className="board__content-title">Re-usable Components</h3>
              <div className="board__content-desc">
                <p>
                  A collection of common re-usable components. Created to save
                  time given these components are often always the same.
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>

      <div className="board">
        <Link href="https://codepen.io/zoofoo/pen/ZEGmNEv">
          <a className="board__link" target="_blank">
            <div className="board__item">
              <div className="board__link">
                <div className="board__icon">
                  <Flask />
                </div>
              </div>
            </div>

            <div className="board__content">
              <h3 className="board__content-title">HTML Email</h3>
              <div className="board__content-desc">
                <p>
                  I re-created the HTML Email template with MJML framework. This
                  template is responsive and works for most email clients.
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>

      <div className="board">
        <Link href="#">
          <a className="board__link" target="_blank">
            <div className="board__item">
              <div className="board__link">
                <div className="board__icon">
                  <Flask />
                </div>
              </div>
            </div>

            <div className="board__content">
              <h3 className="board__content-title">Widgets</h3>
              <div className="board__content-desc">
                <p>
                  A collection of small widgets. These widgets can be
                  implemented in any project.
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </section>
  );
}
