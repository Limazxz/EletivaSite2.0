import { useState } from "react";

// Importe suas imagens corretamente aqui
import foto1 from "/src/assets/foto1.jpg";
import foto2 from "/src/assets/foto2.jpg";
import foto3 from "/src/assets/foto3.jpg";
import foto4 from "/src/assets/foto4.jpg";
import img1 from "/src/assets/img1.jpg";
import img2 from "/src/assets/img2.jpg";
import img3 from "/src/assets/img3.jpg";
import img4 from "/src/assets/mg4.jpg";
import img5 from "/src/assets/img5.jpg";
import img6 from "/src/assets/img6.jpg";
import img7 from "/src/assets/img7.jpg";
import img8 from "/src/assets/img8.jpg";
import img9 from "/src/assets/img9.jpg";
import img10 from "/src/assets/img10.jpg";
import img11 from "/src/assets/img11.jpg";
import img12 from "/src/assets/img12.jpg";
import img13 from "/src/assets/img13.jpg";
import img14 from "/src/assets/img14.jpg";
import img15 from "/src/assets/img15.jpg";

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: foto1, alt: "1" },
    { src: foto2, alt: "2" },
    { src: foto3, alt: "3" },
    { src: foto4, alt: "4" },
    { src: img2, alt: "5" },
    { src: img3, alt: "6" },
    { src: img6, alt: "7" },
    { src: img10, alt: "8" },
    { src: img11, alt: "9" },
    { src: img13, alt: "10" },
    { src: img15, alt: "11" },
    { src: img1, alt: "12" },
    { src: img4, alt: "13" },
    { src: img5, alt: "14" },
    { src: img7, alt: "15" },
    { src: img8, alt: "16" },
    { src: img9, alt: "17" },
    { src: img12, alt: "18" },
    { src: img14, alt: "19" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="container py-5">
      <header className="mb-4 border-bottom pb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <div className="bg-primary text-white p-2 rounded">
              <i className="bi bi-camera"></i>
            </div>
            <div>
              <h2 className="fw-bold mb-0">Galeria de Fotos</h2>
              <small className="text-muted">
                Suas memórias em alta qualidade
              </small>
            </div>
          </div>
          <div>
            <span className="text-muted me-2">{images.length} fotos</span>
            <i className="bi bi-grid text-muted"></i>
          </div>
        </div>
      </header>

      {/* Carrossel */}
      <div
        className="position-relative bg-white shadow rounded mb-4 overflow-hidden"
        style={{ minHeight: "400px" }}
      >
        {images.length > 0 && (
          <div className="position-relative w-100 h-100 text-white text-start">
            <img
              src={images[currentIndex].src}
              alt={`Foto ${images[currentIndex].alt}`}
              className="w-100 d-block object-fit-contain"
              style={{ maxHeight: "500px", background: "#f8f9fa" }}
            />
            <div
              className="position-absolute bottom-0 start-0 w-100 p-3"
              style={{ background: "rgba(0,0,0,0.6)" }}
            >
              <h5 className="mb-0">Imagem {images[currentIndex].alt}</h5>
              <small className="text-light">
                Visualização {currentIndex + 1} de {images.length}
              </small>
            </div>

            {/* Favorito */}
            <button className="btn btn-light position-absolute top-0 end-0 m-3 rounded-circle shadow-sm">
              <i class="bi bi-chevron-left"></i>
            </button>
          </div>
        )}

        {/* Navegação */}
        {images.length > 1 && (
          <>
            <i
              className="bi bi-arrow-left-circle fs-4 position-absolute top-50 start-0 translate-middle-y text-secondary"
              style={{ cursor: "pointer" }}
              onClick={prevSlide}
            ></i>
            <i
              className="bi bi-arrow-right-circle fs-4 position-absolute top-50 end-0 translate-middle-y text-secondary"
              style={{ cursor: "pointer" }}
              onClick={nextSlide}
            ></i>
          </>
        )}
      </div>

      {/* Thumbnails */}
      <div className="d-flex overflow-auto gap-2 pb-3 mb-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Miniatura ${img.alt}`}
            onClick={() => goToSlide(index)}
            className={`img-thumbnail ${
              index === currentIndex ? "border-primary border-3" : ""
            }`}
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      {/* Indicadores */}
      <div className="text-center mb-5">
        {images.map((_, index) => (
          <button
            key={index}
            className={`mx-1 btn btn-sm rounded-circle ${
              index === currentIndex ? "btn-primary" : "btn-secondary"
            }`}
            style={{ width: "10px", height: "10px", padding: 0 }}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
