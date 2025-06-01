import React from "react";
import foto1 from "../assets/foto1.jpg";
import foto2 from "../assets/foto2.jpg";
import foto3 from "../assets/foto3.jpg";
import foto4 from "../assets/foto4.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import mg4 from "../assets/mg4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";

const Imagens = () => {
  return (
    <>
      <div>
        <h1 className="text-center mt-5">Imagens</h1>
        <p className="text-center mb-5">
          Aqui estão algumas imagens das atividades da Eletiva.
        </p>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              {" "}
              {/* Adjust column width as needed */}
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
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="4"
                      aria-label="Slide 5"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="5"
                      aria-label="Slide 6"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="6"
                      aria-label="Slide 7"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="7"
                      aria-label="Slide 8"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="8"
                      aria-label="Slide 9"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="9"
                      aria-label="Slide 10"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="10"
                      aria-label="Slide 11"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="11"
                      aria-label="Slide 12"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="12"
                      aria-label="Slide 13"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="13"
                      aria-label="Slide 14"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="14"
                      aria-label="Slide 15"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="15"
                      aria-label="Slide 16"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="16"
                      aria-label="Slide 17"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="17"
                      aria-label="Slide 18"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="18"
                      aria-label="Slide 19"
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
                    <div className="carousel-item">
                      <img
                        src={img1}
                        className="d-block w-100"
                        alt="Imagem 1"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img2}
                        className="d-block w-100"
                        alt="Imagem 2"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img3}
                        className="d-block w-100"
                        alt="Imagem 3"
                      />
                    </div>
                    <div className="carousel-item">
                      <img src={mg4} className="d-block w-100" alt="Imagem 4" />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img5}
                        className="d-block w-100"
                        alt="Imagem 5"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img6}
                        className="d-block w-100"
                        alt="Imagem 6"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img7}
                        className="d-block w-100"
                        alt="Imagem 7"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img8}
                        className="d-block w-100"
                        alt="Imagem 8"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img9}
                        className="d-block w-100"
                        alt="Imagem 9"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img10}
                        className="d-block w-100"
                        alt="Imagem 10"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img11}
                        className="d-block w-100"
                        alt="Imagem 11"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img12}
                        className="d-block w-100"
                        alt="Imagem 12"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img13}
                        className="d-block w-100"
                        alt="Imagem 13"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img14}
                        className="d-block w-100"
                        alt="Imagem 14"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src={img15}
                        className="d-block w-100"
                        alt="Imagem 15"
                      />
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Imagens;
