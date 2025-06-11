import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer id="site-footer" className="footer bg-dark text-light text-center py-4 mt-5">
      <div className="container">
        <p className="mb-2">
          © 2025 Sua Empresa. Todos os direitos reservados a <a href="https://github.com/Limaxzx" className="footer-link">Limazxz</a>
        </p>
        <p className="mb-0">
          <Link to="/sobre#footer" className="footer-link">
            Sobre Nós
          </Link>
          <Link to="/contato#footer" className="footer-link ms-3">
            Contato
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;