export default function Skills() {
  const languages = ['Languages', 'HTML', 'CSS', 'SASS', 'JavaScript'];

  const frameworks = [
    'Frameworks',
    'React',
    'Redux',
    'Redux Saga',
    'Next.js',
    'Firebase',
  ];

  const tools = ['Tools', 'Terminal', 'Git', 'Gulp', 'Linux', 'DevTools'];
  const design = ['Design Tools', 'Photoshop', 'Figma', 'XD', 'Avocode'];

  return (
    <div className="skills">
      <div className="skills__stack">
        <ul className="skills__list">
          {languages.map((language, i) => (
            <li className="skills__item" key={i}>
              {language}
            </li>
          ))}
        </ul>

        <ul className="skills__list">
          {frameworks.map((framework, i) => (
            <li className="skills__item" key={i}>
              {framework}
            </li>
          ))}
        </ul>

        <ul className="skills__list">
          {tools.map((tool, i) => (
            <li className="skills__item" key={i}>
              {tool}
            </li>
          ))}
        </ul>
        <ul className="skills__list">
          {design.map((el, i) => (
            <li className="skills__item" key={i}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
