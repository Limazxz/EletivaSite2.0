import React from "react";

const Sobre = () => {
  const valores = [
    {
      icon: "💡",
      title: "Empreendedorismo",
      description:
        "Incentivamos ideias criativas e soluções inovadoras no setor turístico.",
    },
    {
      icon: "🌱",
      title: "Sustentabilidade",
      description:
        "Valorizamos práticas que respeitam o meio ambiente e a cultura local.",
    },
    {
      icon: "🤝",
      title: "Responsabilidade Social",
      description:
        "Promovemos o turismo como meio de inclusão e valorização das comunidades.",
    },
    {
      icon: "📊",
      title: "Profissionalismo",
      description:
        "Ensinamos a importância da ética, da organização e da excelência nos serviços turísticos.",
    },
    {
      icon: "🎓",
      title: "Curiosidade e Protagonismo Juvenil",
      description:
        "Estimulamos o olhar crítico, a autonomia e o desejo de aprender com o mundo à nossa volta.",
    },
  ];

  return (
    <>
      <div className="about-page">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title animate-fade-in">
                  Sobre a{" "}
                  <span className="text-primary">Eletiva de Turismo</span>
                </h1>
                <p className="hero-description animate-fade-in-delay">
                  🔍 Nossa missão é despertar nos estudantes uma nova
                  perspectiva sobre o turismo, apresentando-o como uma potente
                  ferramenta de desenvolvimento econômico, social e cultural.
                </p>
                <p className="hero-description animate-fade-in-delay">
                  A eletiva busca capacitar os alunos com conhecimentos práticos
                  e teóricos sobre o turismo corporativo, empreendedorismo no
                  setor e as diversas oportunidades de negócio que o envolvem.
                </p>
              </div>
              <div className="hero-image animate-float">
                <h1>🌍</h1>
              </div>
            </div>
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="company-info">
          <div className="container">
            <div className="info-grid">
              <div className="info-card animate-fade-in">
                <div className="card-icon">🎯</div>
                <h3>Missão</h3>
                <p>
                  Despertar nos estudantes uma nova perspectiva sobre o turismo,
                  apresentando-o como uma potente ferramenta de desenvolvimento
                  econômico, social e cultural.
                </p>
              </div>
              <div className="info-card animate-fade-in-delay">
                <div className="card-icon">🌟</div>
                <h3>Visão</h3>
                <p>
                  Ser reconhecida como uma eletiva inovadora que transforma a
                  forma como o turismo é percebido, preparando jovens
                  protagonistas para atuar com criatividade, responsabilidade e
                  visão estratégica em um mercado em constante crescimento e
                  transformação.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="values-section">
          <div className="container">
            <div className="section-header">
              <h2>Valores</h2>
              <p>Os princípios que guiam nossa eletiva de turismo</p>
            </div>
            <div className="values-grid">
              {valores.map((valor, index) => (
                <div key={index} className="value-card animate-fade-in-delay">
                  <div className="value-icon">{valor.icon}</div>
                  <h4>{valor.title}</h4>
                  <p>{valor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Sobre;
