import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track authentication status
  const [welcomeMessage, setWelcomeMessage] = useState(""); // Welcome message
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setWelcomeMessage(`Olá ${user.name}, Bem-Vindo de Volta`);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      setWelcomeMessage(""); // Clear welcome message
      navigate("/"); // Redirect to home page
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (formData.email && formData.password) {
        localStorage.setItem("user", JSON.stringify({ name: formData.email.split("@")[0] }));
        setWelcomeMessage(`Olá ${formData.email.split("@")[0]}, Bem-Vindo`);
        setIsAuthenticated(true); // Set authenticated to true on successful login
        console.log("Login successful:", formData);
      }
    } else {
      if (
        formData.email &&
        formData.password &&
        formData.name &&
        formData.confirmPassword === formData.password
      ) {
        localStorage.setItem("user", JSON.stringify({ name: formData.name }));
        setWelcomeMessage(`Olá ${formData.name}, Bem-Vindo`);
        setIsAuthenticated(true); // Set authenticated to true on successful registration
        console.log("Registration successful:", formData);
      }
    }
  };

  return (
    <>
      {welcomeMessage && (
        <header className="text-center py-3 bg-light">
          <h1>{welcomeMessage}</h1>
        </header>
      )}
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: "100px" }}
      >
        <div className="card login-card h-50 w-50 align-content-center">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2 className="text-center mb-4">
                {isLogin ? "Bem-vindo de volta!" : "Criar conta"}
              </h2>

              <form onSubmit={handleSubmit}>
                {!isLogin && (
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Nome completo
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">👤</span>
                      <input
                        type="text"
                        className="form-control input-lg"
                        id="name"
                        name="name"
                        placeholder="Digite seu nome"
                        value={formData.name}
                        onChange={handleInputChange}
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">📧</span>
                    <input
                      type="email"
                      className="form-control input-lg"
                      id="email"
                      name="email"
                      placeholder="Digite seu email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Senha
                  </label>
                  <div className="input-group">
                    <span className="input-group-text">🔒</span>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control input-lg"
                      id="password"
                      name="password"
                      placeholder="Digite sua senha"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    <button
                      type="button"
                      className="btn"
                      onClick={() => setShowPassword(!showPassword)}
                      tabIndex={-1}
                      aria-label={
                        showPassword ? "Esconder senha" : "Mostrar senha"
                      }
                    >
                      {showPassword ? "🙈" : "👁️"}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirmar senha
                    </label>
                    <div className="input-group">
                      <span className="input-group-text">🔒</span>
                      <input
                        type="password"
                        className="form-control input-lg"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirme sua senha"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required={!isLogin}
                      />
                    </div>
                  </div>
                )}

                {isLogin && (
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Lembrar de mim
                      </label>
                    </div>
                    <a href="javascript:void(0)" className="small">
                      Esqueceu a senha?
                    </a>
                  </div>
                )}

                <button type="submit" className="btn btn-primary w-100 mb-3">
                  {isLogin ? "Entrar" : "Criar conta"}
                </button>

                <div className="text-center">
                  <span>
                    {isLogin ? "Não tem uma conta? " : "Já tem uma conta? "}
                  </span>
                  <button
                    type="button"
                    className="btn btn-link p-0"
                    onClick={() => setIsLogin(!isLogin)}
                  >
                    {isLogin ? "Cadastre-se" : "Faça login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
