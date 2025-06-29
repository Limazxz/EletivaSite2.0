import React, { useState, useEffect } from "react";

const funcionarios = [
  "Ana Silva",
  "Bruno Costa",
  "Carlos Mendes",
  "Diana Oliveira",
  "Eduardo Santos",
  "Fernanda Lima",
  "Gabriel Rocha",
  "Helena Martins",
  "Igor Pereira",
  "Julia Ferreira",
  "Kevin Almeida",
  "Larissa Souza",
  "Marcos Ribeiro",
  "Natália Cardoso",
  "Otávio Barbosa",
  "Paula Nascimento",
  "Quintino Dias",
  "Rafaela Gomes",
  "Sérgio Moreira",
  "Tatiana Campos",
  "Ulisses Teixeira",
  "Vanessa Correia",
  "Wagner Pinto",
  "Ximena Torres",
  "Yuri Machado",
  "Zilda Freitas",
  "André Vieira",
  "Beatriz Cunha",
  "Caio Monteiro",
  "Débora Lopes",
  "Elias Carvalho",
  "Flávia Araújo",
];

const Funcionarios = () => {
  const [listaA, setListaA] = useState([]);
  const [listaB, setListaB] = useState([]);

  useEffect(() => {
    // Ordenar funcionários alfabeticamente
    const funcionariosOrdenados = [...funcionarios].sort();

    // Dividir em duas listas com máximo de 16 cada
    const metade = Math.ceil(funcionariosOrdenados.length / 2);
    const primeiraLista = funcionariosOrdenados.slice(0, Math.min(16, metade));
    const segundaLista = funcionariosOrdenados.slice(metade, metade + 16);

    setListaA(primeiraLista);
    setListaB(segundaLista);
  }, []);

  return (
    <>
      <div className="min-vh-100" style={{ backgroundColor: "#f8f9fa" }}>
        {/* Header da Empresa */}
        <header className="bg-primary text-white py-4 mb-5">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h1 className="display-4 fw-bold mb-2">
                  <i className="bi bi-building me-3"></i>
                  Pergodin
                </h1>
                <p className="lead mb-0">Nossa Equipe de Profissionais</p>
              </div>
            </div>
          </div>
        </header>

        {/* Conteúdo Principal */}
        <main className="container">
          <div className="row">
            <div className="col-12 mb-4">
              <div className="text-center">
                <h2 className="h3 text-muted mb-4">
                  <i className="bi bi-people-fill me-2"></i>
                  Integrantes da Empresa
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Lista A */}
            <div className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-success text-white">
                  <h3 className="card-title mb-0 h5">
                    <i className="bi bi-list-ul me-2"></i>
                    Equipe A ({listaA.length} membros)
                  </h3>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {listaA.map((nome, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex align-items-center"
                      >
                        <i className="bi bi-person-circle text-success me-3"></i>
                        <span className="fw-medium">{nome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Lista B */}
            <div className="col-lg-6">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-info text-white">
                  <h3 className="card-title mb-0 h5">
                    <i className="bi bi-list-ul me-2"></i>
                    Equipe B ({listaB.length} membros)
                  </h3>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {listaB.map((nome, index) => (
                      <li
                        key={index}
                        className="list-group-item d-flex align-items-center"
                      >
                        <i className="bi bi-person-circle text-info me-3"></i>
                        <span className="fw-medium">{nome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <div className="row">
                    <div className="col-md-4">
                      <i className="bi bi-people display-4 text-primary mb-2"></i>
                      <h4 className="fw-bold">{funcionarios.length}</h4>
                      <p className="text-muted mb-0">Total de Funcionários</p>
                    </div>
                    <div className="col-md-4">
                      <i className="bi bi-diagram-3 display-4 text-success mb-2"></i>
                      <h4 className="fw-bold">2</h4>
                      <p className="text-muted mb-0">Equipes Organizadas</p>
                    </div>
                    <div className="col-md-4">
                      <i className="bi bi-sort-alpha-down display-4 text-info mb-2"></i>
                      <h4 className="fw-bold">A-Z</h4>
                      <p className="text-muted mb-0">Ordem Alfabética</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Funcionarios;
