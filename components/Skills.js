export default function Skills() {
  return (
    <section className="skills">
      <div className="title">
        <h2 className="title__item">Technologies & tools</h2>
      </div>

      <div className="skills__stack">
        <ul className="skills__list">
          <li className="skills__item">Languages</li>
          <li className="skills__item">HTML</li>
          <li className="skills__item">CSS</li>
          <li className="skills__item">SASS</li>
          <li className="skills__item">JavaScript</li>
        </ul>

        <ul className="skills__list">
          <li className="skills__item">Frameworks</li>
          <li className="skills__item">React</li>
          <li className="skills__item">Redux</li>
          <li className="skills__item">Redux Saga</li>
          <li className="skills__item">Next.js</li>
          <li className="skills__item">Firebase</li>
        </ul>

        <ul className="skills__list">
          <li className="skills__item">Tools</li>
          <li className="skills__item">Terminal</li>
          <li className="skills__item">Git</li>
          <li className="skills__item">Gulp</li>
          <li className="skills__item">Webpack</li>
          <li className="skills__item">DevTools</li>
        </ul>
      </div>
    </section>
  );
}
