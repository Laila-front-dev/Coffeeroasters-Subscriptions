import { NavLink } from "react-router-dom";

function Links() {
  const navLinks = ({ isActive }) => {
    return {
      color: isActive ? "#333D4B" : "#83888F",
    };
  };
  return (
    <>
      <li>
        <NavLink style={navLinks} to="/Coffeeroasters-Subscriptions/">
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
          creat your plan
        </NavLink>
      </li>
    </>
  );
}

export default Links;
