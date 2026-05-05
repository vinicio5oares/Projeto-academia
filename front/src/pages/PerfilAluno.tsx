import { LogOut, Camera } from "lucide-react";
import MenuInferior from "../components/FooterAluno";
import "../style/PerfilAluno.css";
import abdImg from "../../assets/abs.png";

export default function PerfilAluno() {
  return (
    <div className="TelaPerfil">
      
      {/* ================= TOPO ================= */}
      <div className="PerfilHeader">
        <div className="PerfilInfo">
          <div className="FotoPerfil">
            <img src={abdImg} alt="Foto do usuário" />
            <Camera size={14} className="IconeCamera" />
          </div>

          <div>
            <h2>Jorge</h2>
            <p>Peso: 95 kg</p>
          </div>
        </div>

        <button
          className="BotaoSair"
          onClick={() => (window.location.href = "/Login")}
        >
          <LogOut size={18} />
        </button>
      </div>

      <hr />

      {/* ================= RESUMO ================= */}
      <div className="Resumo">
        <div>
          <strong>14</strong>
          <p>Treinos</p>
        </div>
        <div>
          <strong>2</strong>
          <p>Programas</p>
        </div>
        <div>
          <strong>12</strong>
          <p>Conquistas</p>
        </div>
      </div>

      <hr />

      {/* ================= ATIVIDADE ================= */}
      <div className="Atividade">
        <h3>Atividade Recente</h3>

        <div className="AtividadeItem">
          <strong>Treino de Membros Superiores</strong>
          <span>Hoje • 45 min</span>
        </div>
      </div>

      {/* ================= MENU ================= */}
      <MenuInferior />
    </div>
  );
}
