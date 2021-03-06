import Link from 'next/link';
import Twitter from './svg/twitter';
import Telegram from './svg/telegram';
// import Linkedin from './svg/linkedin';
import Mail from './svg/mail';
import Github from './svg/github';

const items = [
  {
    link: 'https://twitter.com/thelateraluz',
    icon: <Twitter />,
    id: 1,
  },
  {
    link: 'https://t.me/lateraluz0',
    icon: <Telegram />,
    id: 2,
  },
  {
    link: 'mailto:elikrizevski@gmail.com',
    icon: <Mail />,
    id: 3,
  },
  {
    link: 'https://github.com/Lateralus-lab',
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
            <a className="socials__link" target="_blank">
              {item.icon}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
