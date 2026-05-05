import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/Login.css";
import logo from "../assets/logo.png"; 



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    navigate("/DashboardAluno");
  }

  return (
    <div className="login-container">
      <div className="login-box">
       
        <img
          src={logo} 
          alt="Logo"
          className="login-logo"
        />
        <h2>Aluno</h2>
        <form onSubmit={handleLogin} className="login-form">
          <label htmlFor="email">Login</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <button onClick={() => (window.location.href = "/LoginProfessor")}>Professor</button>
        </div>
      </div>
    </div>
  );
}
