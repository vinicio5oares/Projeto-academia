import { Dumbbell, CalendarCheck, Flame } from "lucide-react";
import "../style/ResumoAluno.css";

export default function ResumoAluno() {
  return (
    <div className="ResumoCard">
      <h3>Resumo das Aulas</h3>

      <div className="ResumoGrid">
        <div>
          <Dumbbell />
          <span>Aulas realizadas</span>
          <strong>455</strong>
        </div>

        <div>
          <CalendarCheck />
          <span>Aulas no mês</span>
          <strong>12</strong>
        </div>
      </div>

      <div className="ResumoDestaque">
        <Flame />
        <div>
          <span>Dias consecutivos</span>
          <strong>10</strong>
        </div>
      </div>
    </div>
  );
}
