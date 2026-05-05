import { useState } from "react";
import { Link } from "react-router-dom";
import FooterAluno from "../components/FooterAluno";
import "../style/PrescricaoTreino.css";
import { User } from "lucide-react";

export default function PrescricaoTreino() {
  const alunos = [
    { id: 1, nome: "Roberto Carlos" },
    { id: 2, nome: "Ana Pereira" },
  ];

  const [alunoSelecionado, setAlunoSelecionado] = useState(1);

  const dadosAluno = {
    sexo: "M",
    idade: 30,
    peso: 89,
    altura: 1.87,
    ultimaAvaliacao: "12/08/25",
    proximaAvaliacao: "12/02/25",
    observacao: "Aluno com problemas articulares no joelho",
  };

  const treinos = [
    { id: 1, nome: "Peito e Bíceps" },
    { id: 2, nome: "Glúteo" },
    { id: 3, nome: "Quadríceps" },
    { id: 4, nome: "Costas e Bíceps" },
  ];

  return (
    <div className="prescricao-container">
      {/* CABEÇALHO */}
      <header className="prescricao-header">
        <div className="header-user">
          <User size={22} />
          <span>Professor</span>
        </div>
      </header>

      {/* CONTEÚDO */}
      <main className="prescricao-content">
        <h2 className="titulo-pagina">Prescrição de Treino</h2>

        {/* Seleção do aluno */}
        <div className="select-aluno">
          <label>Aluno</label>
          <select
            value={alunoSelecionado}
            onChange={(e) => setAlunoSelecionado(Number(e.target.value))}
          >
            {alunos.map((aluno) => (
              <option key={aluno.id} value={aluno.id}>
                {aluno.nome}
              </option>
            ))}
          </select>

          <button className="btn-salvar">Salvar</button>
        </div>

        {/* CARD DO ALUNO */}
        <div className="card-aluno">
          <p><strong>Sexo:</strong> {dadosAluno.sexo}</p>
          <p><strong>Idade:</strong> {dadosAluno.idade}</p>
          <p><strong>Peso:</strong> {dadosAluno.peso} kg</p>
          <p><strong>Estatura:</strong> {dadosAluno.altura} m</p>

          <hr />

          <p><strong>Última avaliação:</strong> {dadosAluno.ultimaAvaliacao}</p>
          <p><strong>Próxima avaliação:</strong> {dadosAluno.proximaAvaliacao}</p>

          <p className="observacao">
            <strong>Observações:</strong> {dadosAluno.observacao}
          </p>
        </div>

        {/* LISTA DE TREINOS */}
        <div className="lista-treinos">
          <div className="lista-header">
            <h3>Lista de Treinos</h3>
            <Link to={`/tipos-de-treino/${alunoSelecionado}`}>
              <button className="btn-editar">Editar Tipos de Treino</button>
            </Link>
          </div>

          {treinos.map((treino) => (
            <div key={treino.id} className="card-treino">
              <span>{treino.nome}</span>

              <Link to={`/exercicios/${treino.id}`}>
                <button className="btn-editar">Editar</button>
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* RODAPÉ */}
      <FooterAluno />
    </div>
  );
}
