import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NaoEncontrado from "./pages/NaoEncontrado";
import Imagens from "./pages/Imagens";
import Login from "./pages/Login";
import Funcionarios from "./pages/Funcionarios";

const App = () => {
  return (
    <div className="app-container">
      <Router>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="*" element={<NaoEncontrado />} />
            <Route path="/imagens" element={<Imagens />} />
            <Route path="/login" element={<Login />} />
            <Route path="/funcionarios" element={<Funcionarios />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
