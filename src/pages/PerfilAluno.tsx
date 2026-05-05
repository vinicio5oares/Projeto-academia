import { useState } from "react";
import { User, Camera } from "lucide-react";
import "../style/PerfilAluno.css";
import MenuInferior from "../components/FooterAluno";

export default function PerfilAluno() {
  const [nome, setNome] = useState("Gleyde");
  const [idade, setIdade] = useState(22);
  const [peso, setPeso] = useState(65);
  const [altura, setAltura] = useState(1.65);

  const diasComparecidos = 16;
  const metaDias = 22;

  return (
    <div className="PerfilContainer">
      {/* CABEÇALHO */}
      <header className="PerfilHeader">
        <User size={22} />
        <span>Meu Perfil</span>
      </header>

      {/* FOTO */}
      <div className="FotoBox">
        <div className="FotoPerfil">
          <User size={46} />
        </div>

        <label className="BtnFoto">
          <Camera size={16} />
          Alterar foto
          <input type="file" hidden />
        </label>
      </div>

      {/* DADOS PESSOAIS */}
      <section className="BoxPerfil">
        <h3>Informações Pessoais</h3>

        <div className="Campo">
          <label>Nome</label>
          <input value={nome} onChange={(e) => setNome(e.target.value)} />
        </div>

        <div className="Linha">
          <div className="Campo">
            <label>Idade</label>
            <input
              type="number"
              value={idade}
              onChange={(e) => setIdade(Number(e.target.value))}
            />
          </div>

          <div className="Campo">
            <label>Peso (kg)</label>
            <input
              type="number"
              value={peso}
              onChange={(e) => setPeso(Number(e.target.value))}
            />
          </div>

          <div className="Campo">
            <label>Altura (m)</label>
            <input
              type="number"
              step="0.01"
              value={altura}
              onChange={(e) => setAltura(Number(e.target.value))}
            />
          </div>
        </div>
      </section>

      {/* PONTUAÇÃO DE FREQUÊNCIA */}
      <section className="BoxPerfil">
        <h3>Frequência na Academia</h3>

        <p className="ResumoDias">
          {diasComparecidos} / {metaDias} dias completos
        </p>

        <div className="CartelaDias">
          {Array.from({ length: metaDias }).map((_, i) => (
            <div
              key={i}
              className={`Dia ${i < diasComparecidos ? "ativo" : ""}`}
            />
          ))}
        </div>

        <span className="Meta">
          Complete 22 dias para ganhar ⚡ 1 Raio
        </span>
      </section>

      <MenuInferior />
    </div>
  );
}
