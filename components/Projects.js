import { useRef, useState } from 'react';
import Link from 'next/link';
import Dragger from 'react-physics-dragger';
import ResizeObserver from 'resize-observer-polyfill';

export default function Projects() {
  const [frame, setFrame] = useState({});
  const [friction, setFriction] = useState(0.9);
  const draggerRef = useRef(null);

  return (
    <section className="projects">
      <div className="title">
        <h2 className="title__item">
          Some Th<span className="multi-color">in</span>gs I’ve Built
        </h2>
      </div>

      <div className="projects__item">
        <div className="cards__wrapper">
          <Dragger
            className="dragger"
            frame={(frame) => setFrame(frame)}
            draggerRef={(r) => (draggerRef.current = r)}
            friction={friction}
          >
            <div>
              <div className="cards">
                <div className="cards__item">
                  <Link href="#">
                    <a className="cards__link">
                      <div className="cards__icon">
                        <svg viewbox="0 0 1129 994">
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="#999"
                            stroke-width="41"
                          >
                            <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                            <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                            <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
                          </g>
                        </svg>
                      </div>

                      <div className="cards__media">
                        <svg viewbox="0 0 1129 994">
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="#F5F5F5"
                            stroke-width="41"
                          >
                            <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                            <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                            <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
                          </g>
                        </svg>
                      </div>

                      <div className="cards__header">
                        <h3 className="cards__header-title">Title of Card</h3>
                        <p className="cards__header-meta">Subtitle</p>
                        <div className="cards__header-icon">
                          <svg viewbox="0 0 28 25">
                            <path
                              fill="#fff"
                              d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="cards">
                <div className="cards__item">
                  <Link href="#">
                    <a className="cards__link">
                      <div className="cards__icon">
                        <svg viewbox="0 0 1129 994">
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="#999"
                            stroke-width="41"
                          >
                            <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                            <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                            <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
                          </g>
                        </svg>
                      </div>

                      <div className="cards__media">
                        <svg viewbox="0 0 1129 994">
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="#F5F5F5"
                            stroke-width="41"
                          >
                            <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                            <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                            <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
                          </g>
                        </svg>
                      </div>

                      <div className="cards__header">
                        <h3 className="cards__header-title">Title of Card</h3>
                        <p className="cards__header-meta">Subtitle</p>
                        <div className="cards__header-icon">
                          <svg viewbox="0 0 28 25">
                            <path
                              fill="#fff"
                              d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="cards">
                <div className="cards__item">
                  <Link href="#">
                    <a className="cards__link">
                      <div className="cards__icon">
                        <svg viewbox="0 0 1129 994">
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="#999"
                            stroke-width="41"
                          >
                            <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                            <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                            <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
                          </g>
                        </svg>
                      </div>

                      <div className="cards__media">
                        <svg viewbox="0 0 1129 994">
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="#F5F5F5"
                            stroke-width="41"
                          >
                            <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                            <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                            <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
                          </g>
                        </svg>
                      </div>

                      <div className="cards__header">
                        <h3 className="cards__header-title">Title of Card</h3>
                        <p className="cards__header-meta">Subtitle</p>
                        <div className="cards__header-icon">
                          <svg viewbox="0 0 28 25">
                            <path
                              fill="#fff"
                              d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="cards">
                <div className="cards__item">
                  <Link href="#">
                    <a className="cards__link">
                      <div className="cards__icon">
                        <svg viewbox="0 0 1129 994">
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="#999"
                            stroke-width="41"
                          >
                            <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                            <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                            <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
                          </g>
                        </svg>
                      </div>

                      <div className="cards__media">
                        <svg viewbox="0 0 1129 994">
                          <g
                            fill="none"
                            fill-rule="nonzero"
                            stroke="#F5F5F5"
                            stroke-width="41"
                          >
                            <path d="M564.5 212.437L95.67 873.5h937.66L564.5 212.437z" />
                            <path d="M564.5 407.47L163.638 973.5h801.724L564.5 407.47z" />
                            <path d="M564.5 35.409L39.699 774.5H1089.3L564.5 35.409z" />
                          </g>
                        </svg>
                      </div>

                      <div className="cards__header">
                        <h3 className="cards__header-title">Title of Card</h3>
                        <p className="cards__header-meta">Subtitle</p>
                        <div className="cards__header-icon">
                          <svg viewbox="0 0 28 25">
                            <path
                              fill="#fff"
                              d="M13.145 2.13l1.94-1.867 12.178 12-12.178 12-1.94-1.867 8.931-8.8H.737V10.93h21.339z"
                            />
                          </svg>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Dragger>
        </div>
      </div>
    </section>
  );
}
