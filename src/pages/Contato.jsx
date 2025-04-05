const Contato = () => {
  return (
    <div className="container mt-5">
      <div className="card shadow bg-tertiary">
        <div className="card-body bg-secondary text-white">
          <h1 className="card-title text-center mb-4">Contato</h1>
          <h2 className="card-title mb-4">Entre em Contato</h2>
          <p className="card-text lead">
            Estamos aqui para ajudar! Preencha o formulário abaixo ou entre em
            contato conosco através do WhatsApp.
          </p>
          <form>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input
                type="text"
                className="form-control"
                id="nome"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Digite seu email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mensagem" className="form-label">
                Mensagem
              </label>
              <textarea
                className="form-control"
                id="mensagem"
                rows="4"
                placeholder="Digite sua mensagem"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </form>
          <hr className="my-4" />
          <p className="card-text text-center">
            Ou entre em contato diretamente pelo nosso WhatsApp:
          </p>
          <div className="text-center">
            <a
              href="https://wa.link/ex2wlq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success"
            >
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
