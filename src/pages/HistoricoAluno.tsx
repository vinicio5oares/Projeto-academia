import { useState } from "react";
import "../style/HistoricoAluno.css"; // CORRIGIDO
import { 
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";
import { Menu, User } from "lucide-react";
import FooterAluno from "../components/FooterAluno";

//TIPAGEM DOS DIAS
type DiaSemana = "domingo" | "segunda" | "terça" | "quarta" | "quinta" | "sexta" | "sábado";

const mapDias: DiaSemana[] = [
  "domingo","segunda","terça","quarta","quinta","sexta","sábado",
];

export default function HistoricoAluno() {
  const [trainDays, setTrainDays] = useState<Date[]>([]);

  const registerToday = () => {
    const hoje = new Date();
    hoje.setHours(0,0,0,0);
    const jaRegistrado = trainDays.some(d => d.getTime() === hoje.getTime());
    if (!jaRegistrado) setTrainDays(prev => [...prev, hoje]);
  };

  const getWeekday = (date: Date) => date.getDay();

  const weeklyCounts: Record<DiaSemana, number> = {
    domingo:0,segunda:0,terça:0,quarta:0,quinta:0,sexta:0,sábado:0
  };

  const now = new Date();
  const firstDayOfWeek = new Date(now);
  firstDayOfWeek.setDate(now.getDate() - now.getDay());
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);

  const currentWeekTrainDays = trainDays.filter(d => d >= firstDayOfWeek && d <= lastDayOfWeek);
  currentWeekTrainDays.forEach(d => {
    const weekdayIndex = getWeekday(d);
    weeklyCounts[mapDias[weekdayIndex]]++;
  });

  const chartData = [
    { dia: "Dom", valor: weeklyCounts.domingo },
    { dia: "Seg", valor: weeklyCounts.segunda },
    { dia: "Ter", valor: weeklyCounts.terça },
    { dia: "Qua", valor: weeklyCounts.quarta },
    { dia: "Qui", valor: weeklyCounts.quinta },
    { dia: "Sex", valor: weeklyCounts.sexta },
    { dia: "Sáb", valor: weeklyCounts.sábado },
  ];

  const totalHistorico = trainDays.length;

  // Dias consecutivos
  const sortedDays = [...trainDays].sort((a,b)=>a.getTime()-b.getTime());
  let currentStreak=0, bestStreak=0;
  for(let i=0;i<sortedDays.length;i++){
    if(i===0){ currentStreak=1; bestStreak=1; }
    else{
      const diff=(sortedDays[i].getTime()-sortedDays[i-1].getTime())/(1000*60*60*24);
      currentStreak = diff===1 ? currentStreak+1 : 1;
      if(currentStreak>bestStreak) bestStreak=currentStreak;
    }
  }

  return (
    <div className="Tela">
      <header className="Header">
        <div className="HeaderPag"><User size={26} /><span>Olá, Jorge</span></div>
        <Menu size={28} />
      </header>

      <h2 className="TituloPag">Forma Fitness</h2>

      <div className="cardHistorico">
        <h2>Gráfico de Treinos na Semana</h2>
        <button className="buttonRegistrar" onClick={registerToday}>Registrar treino hoje</button>
        <div style={{ width: "100%", height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dia" />
              <YAxis allowDecimals={false}/>
              <Tooltip />
              <Bar dataKey="valor" fill="#4F46E5" radius={6}/>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="contadores">
        <p>Total de treinos no histórico:</p>
        <h2>{totalHistorico}</h2>
        <p>🔥 Dias consecutivos de treino:</p>
        <h2>{currentStreak}</h2>
        <p>🏆 Melhor sequência (recorde):</p>
        <h2>{bestStreak}</h2>
      </div>

      <FooterAluno />
    </div>
  );
}
