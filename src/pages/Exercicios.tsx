import { Menu, User } from "lucide-react";
import { useState } from "react";
import "../style/Exercicios.css";
import FooterAluno from "../components/FooterAluno";
import peitoImg from "../assets/peito-biceps.png";

type Serie = {
  id: number;
  reps: number;
  concluida: boolean;
};

type Exercicio = {
  id: number;
  nome: string;
  peso: number;
  series: Serie[];
};

export default function Exercicios() {
  const [exercicios, setExercicios] = useState<Exercicio[]>([
    {
      id: 1,
      nome: "Supino Reto",
      peso: 30,
      series: [
        { id: 1, reps: 12, concluida: false },
        { id: 2, reps: 12, concluida: false },
        { id: 3, reps: 12, concluida: false },
        { id: 4, reps: 12, concluida: false },
      ],
    },
    {
      id: 2,
      nome: "Supino Inclinado",
      peso: 26,
      series: [
        { id: 1, reps: 12, concluida: false },
        { id: 2, reps: 12, concluida: false },
        { id: 3, reps: 12, concluida: false },
      ],
    },
    {
      id: 3,
      nome: "Crucifixo Inclinado",
      peso: 14,
      series: [
        { id: 1, reps: 15, concluida: false },
        { id: 2, reps: 15, concluida: false },
        { id: 3, reps: 15, concluida: false },
      ],
    },
  ]);

  function toggleSerie(exId: number, serieId: number) {
    setExercicios((prev) =>
      prev.map((ex) =>
        ex.id === exId
          ? {
              ...ex,
              series: ex.series.map((s) =>
                s.id === serieId
                  ? { ...s, concluida: !s.concluida }
                  : s
              ),
            }
          : ex
      )
    );
  }

  function alterarPeso(exId: number, peso: number) {
    setExercicios((prev) =>
      prev.map((ex) =>
        ex.id === exId ? { ...ex, peso } : ex
      )
    );
  }

  return (
    <div className="TelaExercicios">
      {/* HEADER */}
      <header className="Header">
        <div className="HeaderPag">
          <User size={22} />
          <span>Olá, Jorge</span>
        </div>
        <Menu size={26} />
      </header>

      {/* BANNER */}
      <div className="BannerExercicio">
        <img src={peitoImg} alt="Peito e Bíceps" />
      </div>

      <h2 className="TituloSessao">Peito e Bíceps</h2>

      {/* LISTA DE EXERCÍCIOS */}
      <div className="ListaExercicios">
        {exercicios.map((exercicio) => (
          <div key={exercicio.id} className="CardExercicio">
            <span className="NomeExercicio">{exercicio.nome}</span>

            <div className="Series">
              {exercicio.series.map((serie) => (
                <button
                  key={serie.id}
                  className={`Serie ${
                    serie.concluida ? "concluida" : ""
                  }`}
                  onClick={() =>
                    toggleSerie(exercicio.id, serie.id)
                  }
                >
                  <span>
                    Série {serie.id} · {serie.reps} reps
                  </span>
                </button>
              ))}
            </div>

            <div className="Peso">
              <input
                type="number"
                value={exercicio.peso}
                onChange={(e) =>
                  alterarPeso(
                    exercicio.id,
                    Number(e.target.value)
                  )
                }
              />
              <span>kg</span>
            </div>
          </div>
        ))}
      </div>

      <FooterAluno />
    </div>
  );
}
