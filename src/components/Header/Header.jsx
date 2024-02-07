import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import "./style.css";

function Header() {
  return (
    <header className="header">
      <div className="content content-header">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
