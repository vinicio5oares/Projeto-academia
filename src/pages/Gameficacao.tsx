import { Flame, Zap, Trophy, User } from "lucide-react";
import "../style/Gameficacao.css";
import MenuInferior from "../components/FooterAluno";

export default function Gameficacao() {
  // 🔢 SIMULAÇÃO DE DIAS FREQUENTADOS
  const diasComparecidos = 16;
  const metaDias = 22;

  return (
    <div className="GameContainer">
      {/* CABEÇALHO */}
      <header className="GameHeader">
        <div className="HeaderUser">
          <User size={22} />
          <span>Olá, Gleyde</span>
        </div>
      </header>

      <h2 className="GameTitulo">Ranking</h2>

      {/* CARDS DE CONQUISTAS */}
      <div className="GameCards">
        <div className="GameCard">
          <Zap />
          <strong>0</strong>
          <span>Raios</span>
        </div>

        <div className="GameCard">
          <Flame />
          <strong>0</strong>
          <span>Fogos</span>
        </div>

        <div className="GameCard">
          <Trophy />
          <strong>0</strong>
          <span>Troféus</span>
        </div>
      </div>

      {/* CARTELA DE FREQUÊNCIA */}
      <section className="Box">
        <h3>Frequência • {diasComparecidos}/{metaDias} dias</h3>

        <div className="CartelaDias">
          {Array.from({ length: metaDias }).map((_, i) => (
            <div
              key={i}
              className={`Dia ${
                i < diasComparecidos ? "ativo" : ""
              }`}
            />
          ))}
        </div>

        <p className="Legenda">
          Complete <strong>22 dias</strong> sem faltar para ganhar ⚡ 1 Raio
        </p>
      </section>

      {/* GRÁFICO SEMANAL */}
      <section className="Box Azul">
        <h3>Frequência da Semana</h3>

        <div className="GraficoColuna">
          {["S", "T", "Q", "Q", "S", "S", "D"].map((dia, i) => (
            <div key={i} className="ColunaItem">
              <div
                className={`Coluna ${
                  [0,1,3,4,6].includes(i) ? "ativa" : ""
                }`}
              />
              <span>{dia}</span>
            </div>
          ))}
        </div>
      </section>

      <MenuInferior />
    </div>
  );
}
