import { Link, NavLink } from "react-router-dom";
import Icons from "./Icons";
function Footer() {
  const navLinks = ({ isActive }) => {
    return {
      color: isActive ? "#ffffff" : "#83888f",
    };
  };

  const logo = "./assets/images/shared/desktop/logo--footer.svg";
  const altLogo = "coffeeroasters logo";
  return (
    <footer className="container | bg-primary-800">
      <div className="footer__logo">
        <Link to="/">
          <img src={logo} alt={altLogo} />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink style={navLinks} to="/Coffeeroasters-Subscriptions/" end>
              home
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinks} to="/Coffeeroasters-Subscriptions/about">
              about us
            </NavLink>
          </li>
          <li>
            <NavLink style={navLinks} to="/Coffeeroasters-Subscriptions/create">
              create your plan
            </NavLink>
          </li>
        </ul>
      </nav>
      <Icons />
    </footer>
  );
}

export default Footer;
