    import pergodin from "../assets/pergodin.jpg";

const InitialImage = ({ onEnterClick }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <img
        src={pergodin}
        alt="Imagem Inicial"
        className="img-fluid mb-4"
        style={{ maxWidth: "500px" }}
      />
      <button className="btn btn-primary" onClick={onEnterClick}>
        Entrar
      </button>
    </div>
  );
};

export default InitialImage;
