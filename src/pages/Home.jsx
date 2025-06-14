import { useEffect, useState } from "react";
import { useNavigate } from "react-router"; // Corrigido para "react-router-dom"

export default function Home() {
  const navigate = useNavigate(); // Certifique-se de que o hook useNavigate está sendo usado corretamente
  const [scrollY, setScrollY] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [showThirdCard, setShowThirdCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = () => setShowCard(!showCard);
  const handleThirdSectionClick = () => setShowThirdCard(!showThirdCard);

  return (
    <div className="home-container">
      {/* Background animado */}
      <div className="animated-background"></div>

      {/* Hero Section */}
      <section
        id="home"
        className="hero-section d-flex align-items-center min-vh-100"
      >
        <div className="container text-center">
          <div
            className="hero-content"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="display-4 fw-bold mb-4 fade-in">
              Eletiva de Turismo{" "}
              <span className="text-gradient d-block">para Negócios</span>
            </h1>
            <p className="lead mb-4 fade-in-delay">
              Conheça mais sobre a proposta, os professores e os objetivos da
              nossa disciplina!
            </p>
            <button
              onClick={() => navigate("/sobre")} // Corrigido para usar navigate corretamente
              className="btn btn-outline-light btn-lg"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </section>

      {/* About Section com cards clicáveis */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-md-8">
              <h2 className="section-title mb-3">Sobre a Eletiva</h2>
              <p className="lead">
                Clique em uma seção para descobrir mais informações.
              </p>
            </div>
          </div>

          <div className="row mt-4 justify-content-center">
            <div className="col-md-6 p-2">
              <div
                className="card shadow-sm"
                onClick={handleThirdSectionClick}
                style={{ cursor: "pointer" }}
              >
                <div id="about-card" className="card-body">
                  <h5 className="card-title">Seção 1</h5>
                  <p className="card-text">Informações de quem somos.</p>
                </div>
              </div>
              {showThirdCard && (
                <div id="about-card-content" className="card mt-3">
                  <div className="card-body">
                    <p className="card-text">
                      📌 <strong>Lema:</strong> Turismo não é só viajar, é
                      negócio!
                      <br />
                      👩‍🏫 <strong>Professora:</strong> Luciana
                      <br />⌚ <strong>Período:</strong> 2025
                      <br />
                      🏢 <strong>Empresa:</strong> Pergodin
                      <br />
                      📖 <strong>Descrição:</strong> Eletiva de Turismo para
                      Negócios
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="col-md-6 p-2">
              <div
                className="card shadow-sm"
                onClick={handleSectionClick}
                style={{ cursor: "pointer" }}
              >
                <div id="about-card-2" className="card-body">
                  <h5 className="card-title">Seção 2</h5>
                  <p className="card-text">
                    Informações sobre o que é a eletiva de turismo e o que ela
                    abrange.
                  </p>
                </div>
              </div>
              {showCard && (
                <div id="about-card-2-content" className="card mt-3">
                  <div className="card-body">
                    <p className="card-text">
                      Esta eletiva explora o turismo como um setor estratégico
                      para negócios, abordando suas oportunidades econômicas,
                      tendências globais e impacto no desenvolvimento de cidades
                      e empresas. Os alunos aprenderão sobre turismo
                      corporativo, eventos, hotelaria, marketing turístico e
                      empreendedorismo no setor. Com atividades práticas,
                      estudos de caso e visitas técnicas, a disciplina mostrará
                      como o turismo vai além do lazer, sendo um motor de
                      crescimento econômico e inovação.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section simples */}
      <section id="contact" className="py-5 text-center fw-bold">
        <div className="container">
          <h2 className="section-title mb-4">Contato</h2>
          <p className="lead mb-3 fw-bold">
            Dúvidas ou sugestões? Fale com a professora responsável.
          </p>
          <p>
            <i className="bi bi-envelope-fill me-2"></i>
            lucianasl@professor.educacao.sp.gov.br
          </p>
        </div>
      </section>
    </div>
  );
}
