import Link from 'next/link';
import Twitter from './svg/twitter';
import Linkedin from './svg/linkedin';
import Mail from './svg/mail';
import Github from './svg/github';

const items = [
  {
    link: '#',
    icon: <Twitter />,
    id: 1,
  },
  {
    link: '#',
    icon: <Linkedin />,
    id: 2,
  },
  {
    link: 'mailto:lateraluz46@protonmail.com',
    icon: <Mail />,
    id: 3,
  },
  {
    link: '#',
    icon: <Github />,
    id: 4,
  },
];

export default function Socials() {
  return (
    <ul className="socials">
      {items.map((item) => (
        <li className="socials__item" key={item.id}>
          <Link href={item.link}>
            <a className="socials__link">{item.icon}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
