import { useState } from "react";
import { Link } from "react-router-dom";

import Navigation from "./Navigation";

function Header() {
  const [navigation, setNavigation] = useState(false);

  const logo = "./assets/images/shared/desktop/logo.svg";
  const altLogo = "coffeeroasters logo";
  return (
    <header className="header container">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt={altLogo} />
        </Link>
      </div>
      <nav>
        <button
          className="menu__toggle"
          id="menu__toggle"
          aria-controls="primary__navigation"
          aria-expanded={navigation}
          onClick={() => setNavigation((prev) => !prev)}
        >
          <span className="visually__hidden">
            {navigation ? "close" : "open"}
          </span>
          <div className="hamburgar__menu" aria-hidden="true"></div>
        </button>
        <ul
          className={`primary__navigation | d__flex flex__column align__center gap ${
            navigation ? " show-menu" : ""
          }`}
          id="primary__navigation"
          data-visibility={navigation}
        >
          <Navigation />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
