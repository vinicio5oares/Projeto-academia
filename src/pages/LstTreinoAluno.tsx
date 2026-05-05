import { Menu, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "../style/LstTreinoAluno.css";
import CircularChart from "../components/CircularChart";
import FooterAluno from "../components/FooterAluno";

import imgDefaultMusculo from "../assets/peito-biceps.png";
import costasImg from "../assets/costas.png";
import pernasImg from "../assets/pernas.png";
import ombrosImg from "../assets/ombros.png";
import hiitImg from "../assets/hiit.png";
import absImg from "../assets/abs.png";

interface CardTreinoAlunoProps {
  titulo: string;
  professor: string;
  imagem?: string;
}

const CardTreinoAluno = ({ titulo, professor, imagem }: CardTreinoAlunoProps) => {
  const navigate = useNavigate();

  return (
    <div className="CardTreino">
      <img
        src={imagem ?? imgDefaultMusculo}
        alt={titulo}
        className="ImagemMusculos"
      />

      <div className="CardTextos">
        <h3 className="NomeExercicio">{titulo}</h3>
        <p className="NomeProfessor">Prof. {professor}</p>
      </div>

      <button
        className="btnIniciar"
        onClick={() => navigate("/Exercicios")}
      >
        Iniciar ▶
      </button>
    </div>
  );
};

export default function LstTreinoAluno() {
  return (
    <div className="TelaDashboard">
      {/* ===== CABEÇALHO ===== */}
      <header className="HeaderDashboard">
        <div className="HeaderUsuario">
          <User size={26} />
          <span>Olá, Jorge</span>
        </div>
      </header>

      {/* ===== TÍTULO ===== */}
      <h2 className="TituloDashboard">Lista de Treinos</h2>

      {/* ===== CONTEÚDO ===== */}
      <main className="ConteudoDashboard">
        <div className="GraficoContainer">
          <CircularChart value={75} />
        </div>

        <div className="ListaDeTreinos">
        <CardTreinoAluno
          titulo="Peito e Bíceps"
          professor="Paulo Pascal"
          imagem={imgDefaultMusculo}
        />

        <CardTreinoAluno
          titulo="Costas e Tríceps"
          professor="Juliana Castro"
          imagem={costasImg}
        />

        <CardTreinoAluno
          titulo="Pernas"
          professor="Marcos Ventura"
          imagem={pernasImg}
        />

        <CardTreinoAluno
          titulo="Ombros"
          professor="Amanda Dias"
          imagem={ombrosImg}
        />

        <CardTreinoAluno
          titulo="HIIT"
          professor="Roberto Maia"
          imagem={hiitImg}
        />

        <CardTreinoAluno
          titulo="Abdômen"
          professor="Clara Nogueira"
          imagem={absImg}
        />
        </div>
      </main>

    
      <FooterAluno />
    </div>
  );
}
