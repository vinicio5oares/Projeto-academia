import { useParams } from "react-router-dom";
import { useState } from "react";
import FooterAluno from "../components/FooterAluno";
import "../style/TiposDeTreino.css";
import { User, Plus, Trash2, Dumbbell } from "lucide-react";

type TipoTreino = {
  id: number;
  nome: string;
};

export default function TiposDeTreino() {
  const { alunoId } = useParams();

  const [tipos, setTipos] = useState<TipoTreino[]>([
    { id: 1, nome: "Peito e Bíceps" },
    { id: 2, nome: "Glúteo" },
  ]);

  const [novoTipo, setNovoTipo] = useState("");

  const adicionarTipo = () => {
    if (!novoTipo.trim()) return;

    setTipos((prev) => [
      ...prev,
      { id: Date.now(), nome: novoTipo },
    ]);

    setNovoTipo("");
  };

  const removerTipo = (id: number) => {
    setTipos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="tipos-container">
      {/* HEADER */}
      <header className="tipos-header">
        <div className="header-user">
          <User size={22} />
          <span>Professor</span>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="tipos-content">
        <h2 className="titulo">Tipos de Treino</h2>
        <p className="subtitulo">Aluno #{alunoId}</p>

        {/* ADICIONAR */}
        <div className="add-tipo">
          <input
            type="text"
            placeholder="Ex: Peito, Costas, Pernas..."
            value={novoTipo}
            onChange={(e) => setNovoTipo(e.target.value)}
          />

          <button onClick={adicionarTipo}>
            <Plus size={18} />
          </button>
        </div>

        {/* LISTA */}
        <div className="lista-tipos">
          {tipos.map((t) => (
            <div key={t.id} className="card-tipo">
              <div className="tipo-info">
                <Dumbbell size={18} />
                <span>{t.nome}</span>
              </div>

              <button
                className="btn-remover"
                onClick={() => removerTipo(t.id)}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </main>

      <FooterAluno />
    </div>
  );
}
