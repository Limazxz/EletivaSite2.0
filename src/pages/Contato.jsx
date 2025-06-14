import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const formatPhoneNumber = (value) => {
    value = value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (value.length > 10) {
      return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(
        7,
        11
      )}`;
    } else if (value.length > 5) {
      return `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(
        6,
        10
      )}`;
    } else if (value.length > 2) {
      return `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
      return value;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatPhoneNumber(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulário enviado:", formData);
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8">
          <div className="card shadow bg-gradient-primary">
            <div className="card-body text-white">
              <h1 className="card-title text-center mb-4">Contato</h1>
              <h2 className="card-title mb-4">Entre em Contato</h2>
              <p className="lead">
                Estamos aqui para ajudar! Preencha o formulário abaixo ou entre
                em contato conosco através do WhatsApp.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nome
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome"
                    required
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
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Digite seu email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder= "Digite seu Número de Telefone"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="duvida">Dúvida</option>
                    <option value="orcamento">Orçamento</option>
                    <option value="suporte">Suporte</option>
                    <option value="parceria">Parceria</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Mensagem
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Digite sua mensagem"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100 mb-3">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3 shadow">
            <div className="card-body text-center">
              <h5 className="card-title">WhatsApp</h5>
              <p className="card-text">Entre em contato pelo WhatsApp.</p>
              <a
                href="https://wa.me/5514996677249"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>
          <div className="card mb-3 shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Instagram</h5>
              <p className="card-text">Siga-nos no Instagram.</p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Abrir Instagram
              </a>
            </div>
          </div>
          <div className="card shadow">
            <div className="card-body text-center">
              <h5 className="card-title">Agradecimento</h5>
              <p className="card-text">
                Agradecemos por nos enviar uma mensagem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
