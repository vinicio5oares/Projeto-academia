import { useState } from "react";
import { User, Plus, Trash2 } from "lucide-react";
import FooterAluno from "../components/FooterAluno";
import "../style/ExerciciosProfessor.css";

interface Exercicio {
  id: number;
  nome: string;
  series: string;
  repeticoes: string;
  peso: string;
}

export default function ExerciciosProfessor() {
  const [exercicios, setExercicios] = useState<Exercicio[]>([
    { id: 1, nome: "Supino Reto", series: "4", repeticoes: "12", peso: "30kg" },
    { id: 2, nome: "Supino Inclinado", series: "4", repeticoes: "10", peso: "26kg" },
  ]);

  const adicionarExercicio = () => {
    setExercicios([
      ...exercicios,
      {
        id: Date.now(),
        nome: "",
        series: "",
        repeticoes: "",
        peso: "",
      },
    ]);
  };

  const atualizarCampo = (
    id: number,
    campo: keyof Exercicio,
    valor: string
  ) => {
    setExercicios(
      exercicios.map((ex) =>
        ex.id === id ? { ...ex, [campo]: valor } : ex
      )
    );
  };

  const removerExercicio = (id: number) => {
    setExercicios(exercicios.filter((ex) => ex.id !== id));
  };

  return (
    <div className="ex-prof-container">
      {/* CABEÇALHO */}
      <header className="ex-prof-header">
        <User size={22} />
        <span>Professor</span>
      </header>

      <main className="ex-prof-content">
        <h2>Editar Exercícios</h2>

        {/* LISTA */}
        <div className="ex-lista">
          {exercicios.map((ex) => (
            <div key={ex.id} className="ex-card">
              <input
                placeholder="Exercício"
                value={ex.nome}
                onChange={(e) =>
                  atualizarCampo(ex.id, "nome", e.target.value)
                }
              />

              <input
                placeholder="Séries"
                value={ex.series}
                onChange={(e) =>
                  atualizarCampo(ex.id, "series", e.target.value)
                }
              />

              <input
                placeholder="Repetições"
                value={ex.repeticoes}
                onChange={(e) =>
                  atualizarCampo(ex.id, "repeticoes", e.target.value)
                }
              />

              <input
                placeholder="Peso"
                value={ex.peso}
                onChange={(e) =>
                  atualizarCampo(ex.id, "peso", e.target.value)
                }
              />

              <button
                className="btn-remover"
                onClick={() => removerExercicio(ex.id)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        {/* BOTÃO ADD */}
        <button className="btn-add" onClick={adicionarExercicio}>
          <Plus size={18} />
          Adicionar Exercício
        </button>
      </main>

      <FooterAluno />
    </div>
  );
}
