import { useState } from "react";

const Home = () => {
  const [showCard, setShowCard] = useState(false);
  const [showThirdCard, setShowThirdCard] = useState(false);

  const handleThirdSectionClick = () => setShowThirdCard(!showThirdCard);
  const handleSectionClick = () => setShowCard(!showCard);

  return (
    <div id="card-card" className="container card my-5 bg-secondary p-4 shadow-sm">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-4">Home</h2>
          <p className="lead">Venha Conhecer um pouco sobre nós</p>
        </div>
      </div>
      <div className="row mt-4 justify-content-center">
        <div className="col-md-6 p-2">
          <div
            className="card shadow-sm"
            onClick={handleThirdSectionClick}
            style={{ cursor: "pointer" }}
          >
            <div className="card-body">
              <h5 className="card-title">Seção 1</h5>
              <p className="card-text">Informações de quem somos.</p>
            </div>
          </div>
          {showThirdCard && (
            <div className="card mt-3">
              <div className="card-body">
                <p className="card-text">
                  📌 <strong>Lema:</strong> Turismo não é só viajar, é negócio!
                  <br />
                  👩‍🏫 <strong>Professora:</strong> Luciana
                  <br />⌚ <strong>Período:</strong> 2025
                  <br />
                  🏢 <strong>Empresa:</strong> Fronteiras sem Limites
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
            <div className="card-body">
              <h5 className="card-title">Seção 2</h5>
              <p className="card-text">
                Informações sobre o que é a eletiva de turismo e o que ela
                abrange.
                <br />
              </p>
            </div>
          </div>
          {showCard && (
            <div className="card mt-3">
              <div className="card-body">
                <p className="card-text">
                  Esta eletiva explora o turismo como um setor estratégico para
                  negócios, abordando suas oportunidades econômicas, tendências
                  globais e impacto no desenvolvimento de cidades e empresas. Os
                  alunos aprenderão sobre turismo corporativo, eventos,
                  hotelaria, marketing turístico e empreendedorismo no setor.
                  Com atividades práticas, estudos de caso e visitas técnicas, a
                  disciplina mostrará como o turismo vai além do lazer, sendo um
                  motor de crescimento econômico e inovação.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
