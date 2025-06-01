import { Link } from "react-router";
import { useState } from "react";
import pergodinLogo from "../../assets/pergodin.jpg"; // Corrected the logo image path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={pergodinLogo}
            alt="Pergodin"
            className="img-fluid me-2"
            style={{ width: "30px", height: "30px" }}
          />
          Pergodin
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          onClick={handleToggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${
            isMenuOpen ? "show animate-open" : "animate-close"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleCloseMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/sobre#navbar"
                onClick={handleCloseMenu}
              >
                Sobre
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contato#navbar"
                onClick={handleCloseMenu}
              >
                Contato
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/imagens#navbar"
                onClick={handleCloseMenu}
              >
                Imagens
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
