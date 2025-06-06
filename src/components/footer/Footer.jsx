import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white text-center py-3 mt-5 bg-transparent">
      <div className="container">
        <p className="mb-0">
          © 2025 Sua Empresa. Todos os direitos reservados a <a href="https://github.com/Limaxzx">Limazxz</a>
        </p>
        <p className="mb-0">
          <Link to="/sobre#footer" className="text-white text-decoration-none">
            Sobre Nós
          </Link>
          <Link
            to="/contato#footer"
            className="text-white text-decoration-none ms-3"
          >
            Contato
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;