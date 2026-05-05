import {
  ClipboardList,
  Layers,
  BarChart3,
  Trophy,
  User,
  Menu,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import CircularChart from "../components/CircularChart";
import FooterAluno from "../components/FooterAluno";
import "../style/DashboardAluno.css";

export default function DashboardAluno() {
  const navigate = useNavigate();

  return (
    <div className="TelaDashboard">
     
      <header className="HeaderDashboard">
        <div className="HeaderUsuario">
          <User size={26} />
          <span>Olá, Gleyde</span>
        </div>

        <button
          className="HeaderMenuButton HeaderMenuRight"
          onClick={() => navigate("/PerfilAluno")}
          aria-label="Abrir perfil"
        >
          <Menu size={22} />
        </button>
      </header> 

      
      <h2 className="TituloDashboard">Página Inicial</h2>

      
      <main className="ConteudoDashboard">
        <div className="GraficoContainer">
          <CircularChart value={65} />
        </div>

        <div className="BotoesDashboard">
          <button
            className="BotaoDashboard"
            onClick={() => navigate("/LstTreinoAluno")}
          >
            <ClipboardList size={22} />
            Lista de Exercícios
          </button>

          <button
            className="BotaoDashboard"
            onClick={() => navigate("/AvaliacacaoFisicaAluno")}
          >
            <Layers size={22} />
            Histórico do Aluno
          </button>

          <button
            className="BotaoDashboard"
            onClick={() => navigate("/Gameficacao")}
          >
            <Trophy size={22} />
            Ranking
          </button>
        </div>
      </main>

      <FooterAluno />
    </div>
  );
}
