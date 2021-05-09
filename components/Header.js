import { useState, useEffect } from 'react';
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
    document.body.classList.toggle('dark');
    setToggle(!toggle);
  };

  const sunToggle = toggle ? <SunWhite /> : <SunDark />;
  const moonToggle = toggle ? <MoonWhite /> : <MoonDark />;

  useEffect(() => {
    if (night) {
      setToggle(false);
      handleChange();
    }
  }, []);

  return (
    <header className="header">
      <div className="header-left">
        <div className="header__name">
          <div className="header__name-first">
            El<span className="multi-color">i</span>
          </div>
          <div className="header__name-second">
            <span className="multi-color">Kri</span>zevski
          </div>
        </div>
        <div className="header__desc">
          I'm a passionate front-end web developer focused on building beautiful
          interfaces and expiriences.
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
              onChange={() => handleChange()}
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
