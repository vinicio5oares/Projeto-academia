import { useState } from "react";
import "../style/CardsExercicios.css";

interface Props {
  titulo: string;
  serie: string;
  repeticoes: string;
  peso: string;
  editavel?: boolean;
}

export default function CardsExercicios({
  titulo,
  serie,
  repeticoes,
  peso,
  editavel = false,
}: Props) {
  const [serieEdit, setSerieEdit] = useState(serie);
  const [repEdit, setRepEdit] = useState(repeticoes);
  const [pesoEdit, setPesoEdit] = useState(peso);

  return (
    <div className="CardExercicio">
      <h4>{titulo}</h4>

      {editavel ? (
        <div className="Editavel">
          <input value={serieEdit} onChange={(e) => setSerieEdit(e.target.value)} />
          <input value={repEdit} onChange={(e) => setRepEdit(e.target.value)} />
          <input value={pesoEdit} onChange={(e) => setPesoEdit(e.target.value)} />
          <button className="btnSalvar">Salvar</button>
        </div>
      ) : (
        <p>
          {serie}x{repeticoes} • {peso}
        </p>
      )}
    </div>
  );
}
