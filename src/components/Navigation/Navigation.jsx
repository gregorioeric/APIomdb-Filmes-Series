import { NavLink } from "react-router-dom";
import "./menu.css";

function Navigation() {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Filmes</NavLink>
          <ul>
            <li>
              <NavLink to="/">Ação</NavLink>
            </li>
            <li>
              <NavLink to="/">Aventura</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/">Series</NavLink>
        </li>
        <li>
          <NavLink to="/">Animação</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
