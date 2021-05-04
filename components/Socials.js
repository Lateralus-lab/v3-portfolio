import Link from 'next/link';
import Twitter from './svg/twitter';
import Linkedin from './svg/linkedin';
import Mail from './svg/mail';
import Github from './svg/github';

export default function Socials() {
  return (
    <ul className="socials">
      <li className="socials__item">
        <Link href="#">
          <a className="socials__link">
            <Twitter />
          </a>
        </Link>
      </li>
      <li className="socials__item">
        <Link href="#">
          <a className="socials__link">
            <Linkedin />
          </a>
        </Link>
      </li>
      <li className="socials__item">
        <Link href="mailto:lateraluz46@protonmail.com">
          <a className="socials__link">
            <Mail />
          </a>
        </Link>
      </li>
      <li className="socials__item">
        <Link href="#">
          <a className="socials__link">
            <Github />
          </a>
        </Link>
      </li>
    </ul>
  );
}
