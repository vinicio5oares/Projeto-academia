import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";
import logo from "../assets/logo.png";

export default function LoginProfessor() {
  const [cref, setCref] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // navega diretamente sem validação
    navigate("/PrescricaoTreino");
  }

  return (
    <div className="login-container">
      <div className="login-box">
        {/* Ícone ou logo */}
        <img
          src={logo} 
          alt="Logo"
          className="login-logo"
        />
        <h2>Professor</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="cref">Login</label>
          <input
            id="cref"
            type="text"
            placeholder="Digite seu CREF"
            value={cref}
            onChange={(e) => setCref(e.target.value)}
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="btn-cadastro">Login</button>

          <a href="#" className="esqueceu-senha">Esqueceu a senha?</a>

        </form>

        <div className="login-professor-actions">
          <Link to="/Register">Cadastrar</Link>
          <span>|</span>
          <button onClick={() => (window.location.href = "/Login")}>Aluno</button>
        </div>
      </div>
    </div>
  );
}
