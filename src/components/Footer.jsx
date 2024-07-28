import { Link } from "react-router-dom";
import Icons from "./Icons";
function Footer() {
  const logo = "./assets/images/shared/desktop/logo--footer.svg";
  const altLogo = "coffeeroasters logo";
  return (
    <footer className="container | bg-primary-800">
      <div className="footer__logo">
        <Link to="/Coffeeroasters-Subscriptions/">
          <img src={logo} alt={altLogo} />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/Coffeeroasters-Subscriptions/">home</Link>
          </li>
          <li>
            <Link to="/Coffeeroasters-Subscriptions/about">about us</Link>
          </li>
          <li>
            <Link to="/Coffeeroasters-Subscriptions/create">
              create your plan
            </Link>
          </li>
        </ul>
      </nav>
      <Icons />
    </footer>
  );
}

export default Footer;
