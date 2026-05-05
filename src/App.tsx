import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";

/* aluno */
import DashboardAluno from "./pages/DashboardAluno";
import AvaliacaoFisicaAluno from "./pages/AvaliacaoFisicaAluno";
import Exercicios from "./pages/Exercicios";
import Treinos from "./pages/LstTreinoAluno";
import Gameficacao from "./pages/Gameficacao";
import PerfilAluno from "./pages/PerfilAluno";

/* professor */
import LoginProfessor from "./pages/LoginProfessor";
import PrescricaoTreino from "./pages/PrescricaoTreino";
import TiposDeTreino from "./pages/TiposDeTreino";
import AvaliacaoFisicaProf from "./pages/AvaliacaoFisicaProf";
import ExerciciosProfessor from "./pages/ExerciciosProfessor";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* ================= GERAL ================= */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= ALUNO ================= */}
        <Route path="/DashboardAluno" element={<DashboardAluno />} />
        <Route path="/LstTreinoAluno" element={<Treinos />} />
        <Route path="/exercicios" element={<Exercicios />} />
        <Route path="/AvaliacaoFisicaAluno" element={<AvaliacaoFisicaAluno />} />
        <Route path="/Gameficacao" element={<Gameficacao />} />
        <Route path="/PerfilAluno" element={<PerfilAluno />} />

        {/* ================= PROFESSOR ================= */}
        <Route path="/LoginProfessor" element={<LoginProfessor />} />
        <Route path="/PrescricaoTreino" element={<PrescricaoTreino />} />
        <Route path="/tipos-de-treino/:alunoId" element={<TiposDeTreino />} />
        <Route path="/AvaliacaoFisicaProf" element={<AvaliacaoFisicaProf />} />
        <Route path="/exercicios/:treinoId" element={<ExerciciosProfessor />} />
        
        {/* 👉 mesma página de exercícios, mas em modo PROFESSOR */}
        {/* <Route
          path="/exercicios-prof/:treinoId"
          element={<Exercicios modo="professor" />}
        /> */}
      </Routes>
    </Router>
  );
}
