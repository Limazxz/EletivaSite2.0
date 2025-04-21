import { useState } from "react";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";

const Home = () => {
  const [showCard, setShowCard] = useState(false);
  const [showCarousel, setShowCarousel] = useState(false);
  const [showThirdCard, setShowThirdCard] = useState(false);

  const handleThirdSectionClick = () => setShowThirdCard(!showThirdCard);
  const handleSectionClick = () => setShowCard(!showCard);
  const handleCarouselClick = () => setShowCarousel(!showCarousel);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="mb-4">Home</h2>
          <p className="lead">
            Essa é a página principal. Explore o site para saber mais sobre nós.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4 p-2">
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
        <div className="col-md-4 p-2">
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
        <div className="col-md-4 p-2">
          <div
            className="card shadow-sm"
            onClick={handleCarouselClick}
            style={{ cursor: "pointer" }}
          >
            <div className="card-body">
              <h5 className="card-title">Seção 3</h5>
              <p className="card-text">
                Imagens dos alunos realizando atividades da Eletiva.
              </p>
            </div>
          </div>
          {showCarousel && (
            <div
              className="mt-3"
              style={{ margin: "10px", border: "1px solid #ddd" }}
            >
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={foto1} className="d-block w-100" alt="Foto 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={foto2} className="d-block w-100" alt="Foto 2" />
                  </div>
                  <div className="carousel-item">
                    <img src={foto3} className="d-block w-100" alt="Foto 3" />
                  </div>
                  <div className="carousel-item">
                    <img src={foto4} className="d-block w-100" alt="Foto 4" />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
