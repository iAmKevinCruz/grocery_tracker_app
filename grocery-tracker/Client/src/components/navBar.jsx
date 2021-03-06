import "./navBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faListUl } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <a href="#" className="center brand-logo">
          PocketPantry
        </a>
        <ul id="nav-mobile" className="left">
          <li>
            <Link className="waves-effect" to="/">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
        </ul>
        <ul id="nav-mobile2" className="right">
          <li>
            <Link className="waves-effect" to="/">
              <FontAwesomeIcon icon={faPlus} />
            </Link>
          </li>
          <li>
            <Link className="waves-effect" to="/list">
              <FontAwesomeIcon icon={faListUl} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
