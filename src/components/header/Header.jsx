import { Link } from "react-router";
import { useState, useEffect } from "react";
import pergodinLogo from "../../assets/pergodin.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setWelcomeMessage(
        `Olá ${user.name}, ${
          localStorage.getItem("isReturningUser") ? "seja Bem-Vindo de Volta" : "seja Bem-Vindo"
        }`
      );
      localStorage.setItem("isReturningUser", true); // Mark user as returning
    }
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav id="site-header" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src={pergodinLogo}
            alt="Pergodin"
            className="header-logo me-2"
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
      <div className="ms-auto">
        {welcomeMessage ? (
          <span className="text-light me-3">{welcomeMessage}</span>
        ) : (
          <Link id="login-button" to="/login" className="btn me-5">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
