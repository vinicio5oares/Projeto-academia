import { useNavigate } from "react-router-dom";
import React from "react";
import "../style/FooterAluno.css";
import { BarChart3, ClipboardList, Layers, Trophy, User } from "lucide-react";

export default function FooterAluno() {
  const navigate = useNavigate();

  return (
    <footer className="FooterDashboard">
        <button onClick={() => navigate("/LstTreinoAluno")}>
          <ClipboardList />
          <span>Lista de Treinos</span>
        </button>


        <button onClick={() => navigate("/AvaliacaoFisicaAluno")}>
          <Layers />
          <span>Histórico do Aluno</span>
        </button>

        <button className="ativo" onClick={() => navigate("/DashboardAluno")}>
          <BarChart3 />
          <span>Dashboard</span>
        </button>

        <button onClick={() => navigate("/Gameficacao")}>
          <Trophy />
          <span>Ranking</span>
        </button>

        <button onClick={() => navigate("/PerfilAluno")}>
          <User />
          <span>Perfil</span>
        </button>
      </footer>

  );
}
