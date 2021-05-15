import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import MoonDark from './svg/switch/moonDark';
import MoonWhite from './svg/switch/moonWhite';
import SunDark from './svg/switch/sunDark';
import SunWhite from './svg/switch/sunWhite';

export default function Header() {
  const d = new Date();
  const hours = d.getHours();
  const night = hours >= 18 || hours <= 6;

  const [toggle, setToggle] = useState(false);

  const handleChange = () => {
    setToggle(!toggle);
    document.body.classList.toggle('dark');
  };

  const sunToggle = toggle ? <SunWhite /> : <SunDark />;
  const moonToggle = toggle ? <MoonWhite /> : <MoonDark />;

  useEffect(() => {
    if (night) {
      document.body.classList.add('dark');
      setToggle(true);
    }

    if (document.body.classList.contains('dark')) {
      setToggle(true);
    }
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <motion.div
          className="header__name"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="header__name-first">
            El<span className="multi-color">i</span>
          </div>
          <div className="header__name-second">
            <span className="multi-color">Kri</span>zevski
          </div>
        </motion.div>
        <div className="header__desc">
          I'm a passionate front-end web developer focused on building beautiful
          interfaces and experiences.
        </div>
      </div>

      <div className="header-right">
        <div className="switch-wrapper">
          <div className="sun">{sunToggle}</div>
          <div className="toggle-wrapper">
            <input
              id="switch"
              type="checkbox"
              checked={toggle}
              onChange={handleChange}
            />
            <label htmlFor="switch" id="toggle">
              Toggle
            </label>
          </div>
          <div className="moon">{moonToggle}</div>
        </div>
      </div>
    </header>
  );
}
